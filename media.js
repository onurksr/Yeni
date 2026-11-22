'use strict';
// Medya çözücü: şarkı önizlemesi (iTunes Search API -> Deezer yedek) ve film kareleri (TMDB).
const crypto = require('crypto');

const TMDB_KEY = (process.env.TMDB_API_KEY || '').trim();
const hasTmdb = () => Boolean(TMDB_KEY);

const fold = s => String(s || '').toLowerCase().replace(/ı/g, 'i').normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();

const cache = new Map();
const getC = k => { const h = cache.get(k); return h && h.exp > Date.now() ? h.v : undefined; };
const setC = (k, v, ms) => cache.set(k, { v, exp: Date.now() + ms });
const shuffle = a => { const x = [...a]; for (let i = x.length - 1; i > 0; i--) { const j = crypto.randomInt(i + 1); [x[i], x[j]] = [x[j], x[i]]; } return x; };

async function getJson(url, headers) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), 6000);
  try {
    const r = await fetch(url, { signal: c.signal, headers });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return await r.json();
  } finally { clearTimeout(t); }
}

// 30 sn'lik resmî önizleme URL'si (şarkının orta kısmından). Bulunamazsa null.
async function resolveSong(item) {
  const key = 's:' + item.id;
  const hit = getC(key);
  if (hit !== undefined) return hit;
  const a = fold(item.artist).split(' ')[0];
  const t = fold(item.title);
  let url = null;
  try {
    const j = await getJson('https://itunes.apple.com/search?media=music&entity=song&limit=15&country=TR&term=' + encodeURIComponent(item.artist + ' ' + item.title));
    const m = (j.results || []).find(r => r.previewUrl && fold(r.artistName).includes(a) && (fold(r.trackName).includes(t) || t.includes(fold(r.trackName))));
    if (m) url = m.previewUrl;
  } catch (e) { /* yedeğe geç */ }
  if (!url) {
    try {
      const j = await getJson('https://api.deezer.com/search?limit=10&q=' + encodeURIComponent(`artist:"${item.artist}" track:"${item.title}"`));
      const m = (j.data || []).find(r => r.preview && fold(r.artist && r.artist.name).includes(a));
      if (m) url = m.preview;
    } catch (e) { /* yok */ }
  }
  if (url) setC(key, url, 3600e3); else setC(key, null, 120e3);
  return url;
}

// Filmden 5'e kadar farklı kare URL'si. Yönetici görsel eklediyse onlar öncelikli.
async function resolveFilm(item, n = 5) {
  if (Array.isArray(item.images) && item.images.length >= 3) return shuffle(item.images).slice(0, n);
  if (!TMDB_KEY) return null;
  const key = 'f:' + item.id;
  let pool = getC(key);
  if (pool === undefined) {
    pool = null;
    try {
      const H = TMDB_KEY.startsWith('eyJ') ? { Authorization: 'Bearer ' + TMDB_KEY } : undefined;
      const k = H ? '' : '&api_key=' + TMDB_KEY;
      let id = item.tmdb;
      for (const q of [item.en, item.title]) {
        if (id || !q) continue;
        const j = await getJson(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(q)}&year=${item.year}${k}`, H);
        id = j.results && j.results[0] && j.results[0].id;
      }
      if (id) {
        const j = await getJson(`https://api.themoviedb.org/3/movie/${id}/images?include_image_language=null${k}`, H);
        const b = (j.backdrops || []).filter(x => !x.iso_639_1 && x.width >= 1000)
          .sort((x, y) => (y.vote_count || 0) - (x.vote_count || 0)).slice(0, 14);
        if (b.length >= 3) pool = b.map(x => 'https://image.tmdb.org/t/p/w1280' + x.file_path);
      }
    } catch (e) { pool = null; }
    setC(key, pool, pool ? 6 * 3600e3 : 300e3);
  }
  return pool ? shuffle(pool).slice(0, n) : null;
}

module.exports = { fold, hasTmdb, resolveSong, resolveFilm };

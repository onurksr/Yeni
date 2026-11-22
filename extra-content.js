'use strict';
// Ek şarkı ve film havuzu (kompakt format). Yönetici panelinden de eklenebilir.
const dec = y => (y >= 2020 ? ['2020 ve sonrası'] : y >= 2010 ? ["2010'lar"] : y >= 2000 ? ["2000'ler"] : []);
const SONGS = `
Tarkan|Kuzu Kuzu|2001|tr|Türkçe Pop
Tarkan|Dudu|2003|tr|Türkçe Pop
Oğuzhan Koç|Mecnun|2020|tr|Türkçe Pop
Sezen Aksu|Firuze|2017|tr|Türkçe Pop,Türkçe Slow
Hadise|Düm Tek Tek|2009|tr|Türkçe Pop
Edis|Martılar|2020|tr|Türkçe Pop
Mabel Matiz|Fatih Harbiye|2017|tr|Türkçe Pop,Alternatif
Simge|Ben Bazen|2020|tr|Türkçe Pop
Ezhel|Geceler|2017|tr|Türkçe Rap
Ceza|Suspus|2004|tr|Türkçe Rap
Duman|Her Şeyi Yak|2005|tr|Rock,Alternatif
Manga|Beni Böyle Hatırla|2009|tr|Rock,Alternatif
Teoman|İstanbul'da Sonbahar|2000|tr|Rock,Türkçe Slow
Kenan Doğulu|Tutamıyorum Zamanı|2003|tr|Türkçe Pop
Mustafa Sandal|Araba|2001|tr|Türkçe Pop
The Weeknd|Blinding Lights|2019|en|Yabancı Pop
The Weeknd|Starboy|2016|en|Yabancı Pop
Taylor Swift|Shake It Off|2014|en|Yabancı Pop
Taylor Swift|Blank Space|2014|en|Yabancı Pop
Eminem|Lose Yourself|2002|en|Yabancı Rap
Eminem|Without Me|2002|en|Yabancı Rap
Rihanna|Umbrella|2007|en|Yabancı Pop
Rihanna|Diamonds|2012|en|Yabancı Pop
Drake|Hotline Bling|2015|en|Yabancı Rap
Drake|God's Plan|2018|en|Yabancı Rap
Billie Eilish|bad guy|2019|en|Yabancı Pop
Billie Eilish|Ocean Eyes|2016|en|Yabancı Pop,Yabancı Slow
Bruno Mars|Just the Way You Are|2010|en|Yabancı Pop
Bruno Mars|Locked Out of Heaven|2012|en|Yabancı Pop
Ed Sheeran|Shape of You|2017|en|Yabancı Pop
Ed Sheeran|Perfect|2017|en|Yabancı Pop,Yabancı Slow
Dua Lipa|Levitating|2020|en|Yabancı Pop
Dua Lipa|New Rules|2017|en|Yabancı Pop
Michael Jackson|Billie Jean|1983|en|Yabancı Pop
Michael Jackson|Thriller|1982|en|Yabancı Pop
Adele|Rolling in the Deep|2010|en|Yabancı Pop
Adele|Someone Like You|2011|en|Yabancı Pop,Yabancı Slow
Coldplay|Yellow|2000|en|Rock,Alternatif
Coldplay|Viva la Vida|2008|en|Rock,Alternatif
Imagine Dragons|Believer|2017|en|Rock,Alternatif
Imagine Dragons|Radioactive|2012|en|Rock,Alternatif
Linkin Park|In the End|2000|en|Rock,Alternatif
Linkin Park|Numb|2003|en|Rock,Alternatif
Queen|Bohemian Rhapsody|1975|en|Rock
Queen|Don't Stop Me Now|1978|en|Rock
`.trim().split('\n').map((l, i) => {
  const [artist, title, y, lang, g] = l.split('|');
  const year = +y;
  return { id: 'mx' + i, title, artist, lang, genres: [...g.split(','), ...(lang === 'tr' && /Rock/.test(g) ? ['Türkçe Rock'] : []), ...dec(year), 'Karışık'], decade: dec(year)[0] || '', year, d: 'medium', pop: 'high' };
});

const A = 'Hollywood', P = 'Tüm Zamanların Popüler Filmleri';
const FILMS = `
Avengers: Endgame|Yenilmezler: Son Oyun|2019|hollywood|Hollywood,Marvel,Aksiyon,Bilim Kurgu,Yeni Filmler,${P}|Marvel Sinematik Evreni|Endgame
Iron Man|Demir Adam|2008|hollywood|Hollywood,Marvel,Aksiyon,Bilim Kurgu|Marvel Sinematik Evreni|
Black Panther|Kara Panter|2018|hollywood|Hollywood,Marvel,Aksiyon,Yeni Filmler|Marvel Sinematik Evreni|
Spider-Man: No Way Home|Örümcek-Adam: Eve Dönüş Yok|2021|hollywood|Hollywood,Marvel,Aksiyon,Yeni Filmler|Spider-Man|
The Dark Knight|Kara Şövalye|2008|hollywood|Hollywood,DC,Aksiyon,Gerilim,${P}|Batman|
Joker|Joker|2019|hollywood|Hollywood,DC,Dram,Gerilim,Yeni Filmler|DC Evreni|
Inception|Başlangıç|2010|hollywood|Hollywood,Bilim Kurgu,Aksiyon,Gerilim,${P}||
Interstellar|Yıldızlararası|2014|hollywood|Hollywood,Bilim Kurgu,Dram,${P}||
The Matrix|Matrix|1999|hollywood|Hollywood,Bilim Kurgu,Aksiyon,Eski Klasikler||
Titanic|Titanik|1997|hollywood|Hollywood,Romantik,Dram,Eski Klasikler,${P}||
Jurassic Park|Jurassic Park|1993|hollywood|Hollywood,Bilim Kurgu,Macera,Eski Klasikler|Jurassic Park|
Star Wars: Episode IV - A New Hope|Yıldız Savaşları|1977|hollywood|Hollywood,Bilim Kurgu,Fantastik,Eski Klasikler|Star Wars|Star Wars;Yeni Umut
Harry Potter and the Philosopher's Stone|Harry Potter ve Felsefe Taşı|2001|hollywood|Hollywood,Fantastik,Macera|Harry Potter|Felsefe Taşı
The Lord of the Rings: The Return of the King|Yüzüklerin Efendisi: Kralın Dönüşü|2003|hollywood|Hollywood,Fantastik,Macera,${P}|Yüzüklerin Efendisi|Kralın Dönüşü
Fast Five|Hızlı ve Öfkeli 5|2011|hollywood|Hollywood,Aksiyon,Suç ve Polisiye|Hızlı ve Öfkeli|Hızlı ve Öfkeli 5;Fast Five
John Wick|John Wick|2014|hollywood|Hollywood,Aksiyon,Gerilim,Suç ve Polisiye|John Wick|
Pirates of the Caribbean: The Curse of the Black Pearl|Karayip Korsanları: Siyah İncinin Laneti|2003|hollywood|Hollywood,Macera,Fantastik|Karayip Korsanları|Karayip Korsanları
Transformers|Transformers|2007|hollywood|Hollywood,Bilim Kurgu,Aksiyon|Transformers|
Mission: Impossible|Görevimiz Tehlike|1996|hollywood|Hollywood,Aksiyon,Gerilim|Mission Impossible|Mission Impossible
Gladiator|Gladyatör|2000|hollywood|Hollywood,Aksiyon,Dram,Eski Klasikler,${P}||
Forrest Gump|Forrest Gump|1994|hollywood|Hollywood,Dram,Romantik,Eski Klasikler,${P}||
Toy Story|Oyuncak Hikayesi|1995|hollywood|Hollywood,Pixar,Animasyon,Komedi,Eski Klasikler||
Finding Nemo|Kayıp Balık Nemo|2003|hollywood|Hollywood,Pixar,Animasyon,Macera||Nemo
The Lion King|Aslan Kral|1994|hollywood|Hollywood,Disney,Animasyon,Eski Klasikler||
Frozen|Karlar Ülkesi|2013|hollywood|Hollywood,Disney,Animasyon,Fantastik||Frozen
Shrek|Shrek|2001|hollywood|Hollywood,Animasyon,Komedi,Fantastik||
Recep İvedik|Recep İvedik|2008|tr|Türk Sineması,Komedi||
Hababam Sınıfı|Hababam Sınıfı|1975|tr|Türk Sineması,Komedi,Eski Klasikler||
E�kıya|Eşkıya|1996|tr|Türk Sineması,Dram,Suç ve Polisiye,Eski Klasikler||
G.O.R.A.|G.O.R.A.|2004|tr|Türk Sineması,Komedi,Bilim Kurgu||
Babam ve Oğlum|Babam ve Oğlum|2005|tr|Türk Sineması,Dram||
`.trim().split('\n').map((l, i) => {
  const [en, tr, y, region, cats, series, alias] = l.split('|');
  return { id: 'fx' + i, title: tr, en, year: +y, region, categories: cats.split(','), series: series || '', d: 'medium', pop: 'high', answers: [en, tr, ...(alias ? alias.split(';') : [])] };
});

module.exports = {
  MUSIC: SONGS,
  FILMS,
  ARTISTS_TR: ['Tarkan', 'Oğuzhan Koç', 'Sezen Aksu', 'Hadise', 'Edis', 'Mabel Matiz', 'Simge', 'Güneş', 'Ezhel', 'Ceza', 'Sagopa Kajmer', 'Uzi', 'Lvbel C5', 'Murda', 'Duman', 'Manga', 'Barış Manço', 'Teoman', 'Kenan Doğulu', 'Mustafa Sandal'],
  ARTISTS_EN: ['The Weeknd', 'Taylor Swift', 'Eminem', 'Rihanna', 'Drake', 'Billie Eilish', 'Bruno Mars', 'Ed Sheeran', 'Dua Lipa', 'Michael Jackson', 'Adele', 'Coldplay', 'Imagine Dragons', 'Linkin Park', 'Queen'],
};

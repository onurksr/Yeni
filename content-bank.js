// Parti Odası - Modüler Soru, Kelime, Film ve Müzik İçerik Bankası
// Zorluk seviyeleri: 'easy' (Kolay), 'medium' (Orta), 'hard' (Zor)

const TF_BANK = [
  // Kolay
  { d: 'easy', c: 'Genel Kültür', t: 'Ahtapotların üç kalbi vardır.', v: true, x: 'İki kalbi solungaçlara kan pompalar, biri tüm vücuda.' },
  { d: 'easy', c: 'Doğa', t: 'Develer hörgüçlerinde su depolar.', v: false, x: 'Hörgüçlerde yağ depolanır, su değil.' },
  { d: 'easy', c: 'Uzay', t: 'Güneş Sistemi’nin en sıcak gezegeni Venüs’tür.', v: true, x: 'Yoğun sera atmosferi yüzeyi Merkür’den daha sıcak yapar.' },
  { d: 'easy', c: 'Biyoloji', t: 'Yetişkin bir insan bedeninde 206 kemik bulunur.', v: true, x: 'Bebeklerde bu sayı daha fazladır ve zamanla birleşir.' },
  { d: 'easy', c: 'Fizik', t: 'Işık, sesten daha yavaş yayılır.', v: false, x: 'Işık boşlukta saniyede yaklaşık 300.000 km hızla ilerler.' },
  { d: 'easy', c: 'Gıda', t: 'Bal, uygun koşullarda yıllarca bozulmadan kalabilir.', v: true, x: 'Düşük nem ve asidik yapısı bakterilerin çoğalmasını engeller.' },
  { d: 'easy', c: 'Uzay', t: 'Ay’ın Dünya’ya hep aynı yüzünü gösteririz.', v: true, x: 'Gelgit kilidi nedeniyle dönüş ve dolanım süreleri eşittir.' },
  { d: 'easy', c: 'Coğrafya', t: 'Büyük Çin Seddi uzaydan çıplak gözle net görülebilir.', v: false, x: 'İnce yapısı nedeniyle alçak yörüngede bile çıplak gözle seçilmesi çok zordur.' },
  // Orta
  { d: 'medium', c: 'Doğa', t: 'Kutup ayılarının derisi siyahtır.', v: true, x: 'Kürkleri şeffaf ve içi boştur; koyu deri ısıyı daha iyi tutar.' },
  { d: 'medium', c: 'Fizik', t: 'Şimşek aynı yere asla iki kez düşmez.', v: false, x: 'Yüksek ve sivri yapılar (örneğin gökdelenler) defalarca yıldırım alabilir.' },
  { d: 'medium', c: 'Tarih', t: 'Napolyon Bonapart aslında çok kısa boylu değildi.', v: true, x: 'Yaklaşık 1,68–1,70 m boyundaydı; Fransız inç-ayak birimi ve karikatürler algıyı değiştirdi.' },
  { d: 'medium', c: 'Doğa', t: 'Denizanalarının beyni ve kalbi yoktur.', v: true, x: 'Sinir ağları ve difüzyon sistemiyle yaşarlar.' },
  { d: 'medium', c: 'Coğrafya', t: 'Avustralya kıtası, Ay’ın görünür yüzeyinden daha geniştir.', v: false, x: 'Ay’ın toplam yüzeyi Avustralya anakarasından daha büyüktür.' },
  { d: 'medium', c: 'Biyoloji', t: 'Muz aslında botanik açıdan bir meyve değil, çilek ise meyvedir.', v: false, x: 'Botanikte muz bir "berry" (üzümsü) sayılırken çilek agregat/yalancı meyvedir.' },
  // Zor
  { d: 'hard', c: 'Biyoloji', t: 'Vombaların dışkıları küp şeklindedir.', v: true, x: 'Bağırsak esnekliğindeki farklılıklar küp biçimli parçalar oluşturur; yuvarlanıp işaret bırakmaz.' },
  { d: 'hard', c: 'Tarih', t: 'Oxford Üniversitesi, Aztek İmparatorluğu’nun yükselişinden daha eskidir.', v: true, x: 'Oxford’da eğitim 1096 civarında başlamıştır; Aztekler 14.–15. yüzyılda öne çıkmıştır.' },
  { d: 'hard', c: 'Fizik', t: 'Sıcak su, soğuk suya göre her koşulda daha hızlı donar.', v: false, x: 'Mpemba etkisi yalnızca belirli koşullarda ve istisnai durumlarda gözlenebilir, evrensel kural değildir.' },
  { d: 'hard', c: 'Uzay', t: 'Satürn’ün yoğunluğu sudan düşüktür.', v: true, x: 'Ortalama yoğunluğu yaklaşık 0,69 g/cm³ ile suyun (1 g/cm³) altındadır.' },
];

const CLOSEST_BANK = [
  // Kolay
  { d: 'easy', c: 'Coğrafya', t: 'Everest Dağı kaç metre yüksekliğindedir?', v: 8849, u: 'm', x: 'Resmî ortak yükseklik 8.848,86 m (8.849 m) kabul edilir.' },
  { d: 'easy', c: 'Uzay', t: 'Ay, Dünya’ya ortalama kaç km uzaklıktadır?', v: 384400, u: 'km', x: 'Ortalama uzaklık yaklaşık 384.400 kilometredir.' },
  { d: 'easy', c: 'Mimarlık', t: 'Eyfel Kulesi kaç metre yüksekliğindedir?', v: 330, u: 'm', x: 'Anteniyle birlikte yüksekliği 330 metredir.' },
  { d: 'easy', c: 'Tarih', t: 'Titanik hangi yılda battı?', v: 1912, u: '', x: '15 Nisan 1912 gecesi battı.' },
  // Orta
  { d: 'medium', c: 'Dünya', t: 'Birleşmiş Milletler’in kaç üye ülkesi vardır?', v: 193, u: '', x: 'BM’nin 193 üye devleti bulunur.' },
  { d: 'medium', c: 'Coğrafya', t: 'Türkiye’nin yüzölçümü yaklaşık kaç km²’dir?', v: 783562, u: 'km²', x: 'Yaklaşık 783.562 km²’dir.' },
  { d: 'medium', c: 'Tarih', t: 'İstanbul hangi yılda fethedildi?', v: 1453, u: '', x: '29 Mayıs 1453 tarihinde fethedildi.' },
  { d: 'medium', c: 'Coğrafya', t: 'Nil Nehri yaklaşık kaç km uzunluğundadır?', v: 6650, u: 'km', x: 'Yaklaşık 6.650 km uzunluğundadır.' },
  // Zor
  { d: 'hard', c: 'Biyoloji', t: 'Yetişkin insan vücudunda yaklaşık kaç kas bulunur?', v: 600, u: '', x: 'Kaynaklara göre yaklaşık 600’ün üzerinde iskelet kası vardır.' },
  { d: 'hard', c: 'Uzay', t: 'Güneş’in Dünya’ya ortalama uzaklığı kaç milyon km’dir?', v: 150, u: 'milyon km', x: '1 Astronomik Birim (AB) yaklaşık 149,6–150 milyon km’dir.' },
  { d: 'hard', c: 'Tarih', t: 'Türkiye Cumhuriyeti hangi yılda ilan edildi?', v: 1923, u: '', x: '29 Ekim 1923’te ilan edildi.' },
  { d: 'hard', c: 'Coğrafya', t: 'Mariana Çukuru’nun bilinen en derin noktası yaklaşık kaç metredir?', v: 10984, u: 'm', x: 'Challenger Deep yaklaşık 10.984 metre derinliktedir.' },
];

const QUIZ_BANK = [
  { d: 'easy', c: 'Bilim', t: 'Suyun kimyasal formülü nedir?', o: ['H2O', 'CO2', 'NaCl', 'O2'], v: 0, x: 'İki hidrojen ve bir oksijen atomundan oluşur.' },
  { d: 'easy', c: 'Coğrafya', t: 'Japonya’nın başkenti neresidir?', o: ['Kyoto', 'Osaka', 'Tokyo', 'Sapporo'], v: 2, x: 'Tokyo Japonya’nın başkentidir.' },
  { d: 'easy', c: 'Sanat', t: 'Mona Lisa tablosu hangi sanatçıya aittir?', o: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'], v: 1, x: 'Leonardo da Vinci’nin başyapıtıdır.' },
  { d: 'medium', c: 'Uzay', t: 'Güneş Sistemi’nde halkalarıyla en ünlü gezegen hangisidir?', o: ['Jüpiter', 'Uranüs', 'Satürn', 'Neptün'], v: 2, x: 'Satürn’ün buz ve kaya parçalarından oluşan belirgin halkaları vardır.' },
  { d: 'medium', c: 'Edebiyat', t: '“Küçük Prens” kitabının yazarı kimdir?', o: ['Antoine de Saint-Exupéry', 'Jules Verne', 'Victor Hugo', 'Albert Camus'], v: 0, x: 'Antoine de Saint-Exupéry tarafından 1943’te yayımlandı.' },
  { d: 'medium', c: 'Teknoloji', t: 'HTML hangi alanın temel yapı taşıdır?', o: ['Veritabanı yönetimi', 'Web sayfaları', 'Ses sıkıştırma', '3D modelleme'], v: 1, x: 'HyperText Markup Language web tarayıcılarının iskeletini kurar.' },
  { d: 'hard', c: 'Bilim', t: 'Periyodik tabloda “Au” sembolü hangi elementi temsil eder?', o: ['Gümüş', 'Argon', 'Altın', 'Alüminyum'], v: 2, x: 'Latince “aurum” kelimesinden gelir ve altındır.' },
  { d: 'hard', c: 'Coğrafya', t: 'Dünyanın en fazla ülkeye sınırı olan ülkesi hangisidir?', o: ['Rusya', 'Çin', 'Brezilya', 'Almanya'], v: 1, x: 'Çin (veya kaynaklara göre Rusya ile birlikte 14 komşu ülke).' },
  { d: 'hard', c: 'Müzik', t: 'Standart bir piyanoda kaç tuş bulunur?', o: ['76', '88', '92', '104'], v: 1, x: '52 beyaz ve 36 siyah olmak üzere toplam 88 tuş vardır.' },
];

const LIAR_BANK = [
  { d: 'easy', c: 'Hayvanlar', t: 'Penguenler hakkında hangisi YALAN?', o: ['Uçamayan kuşlardır', 'Güney Yarımküre’de yaşarlar', 'Kutuplarda hiç kuş yaşamaz', 'İyi yüzücülerdir'], v: 2, x: 'Penguenler Antarktika ve güney bölgelerde yaşar; kutup bölgelerinde başka kuş türleri de vardır.' },
  { d: 'easy', c: 'Uzay', t: 'Mars hakkında hangisi YALAN?', o: ['Kızıl Gezegen olarak bilinir', 'İki uydusu vardır', 'Güneş’e en yakın gezegendir', 'Kutup buzulları bulunur'], v: 2, x: 'Güneş’e en yakın gezegen Merkür’dür.' },
  { d: 'medium', c: 'Teknoloji', t: 'İnternet ve web hakkında hangisi YALAN?', o: ['HTTP bir iletişim protokolüdür', 'DNS alan adlarını IP’ye çevirir', 'Wi-Fi ve Bluetooth aynı şeydir', 'SSL/TLS bağlantıyı şifreler'], v: 2, x: 'Wi-Fi ve Bluetooth farklı kablosuz standartlardır.' },
  { d: 'medium', c: 'Coğrafya', t: 'Türkiye hakkında hangisi YALAN?', o: ['İki kıtada toprağı vardır', 'Karadeniz’e kıyısı vardır', 'En yüksek dağı Ağrı Dağı’dır', 'Kıta Avrupası’nda hiç toprağı yoktur'], v: 3, x: 'Marmara Bölgesi’nin bir kısmı Avrupa kıtasındadır.' },
  { d: 'hard', c: 'Tarih', t: 'Antik dünya hakkında hangisi YALAN?', o: ['İskenderiye Feneri antik harikalardandır', 'Kağıt yapımı Çin’de gelişmiştir', 'Matbaa Avrupa’da MÖ 500’de icat edildi', 'Kolomb Amerika’ya 1492’de ulaştı'], v: 2, x: 'Gutenberg hareketli harf matbaası 15. yüzyılda (yaklaşık 1450) Avrupa’da öne çıktı.' },
];

const WYR_BANK = [
  { d: 'easy', c: 'Günlük', t: 'Hangisini seçerdin?', o: ['Sınırsız kahve', 'Sınırsız tatlı'], v: null, x: 'Çoğunluğun seçtiği seçenek puan kazandırır!' },
  { d: 'easy', c: 'Seyahat', t: 'Hangisini seçerdin?', o: ['Deniz kenarı tatil', 'Dağ & orman tatili'], v: null, x: 'Grubun nabzını tut bakalım.' },
  { d: 'medium', c: 'Süper Güç', t: 'Hangisini seçerdin?', o: ['Uçabilmek', 'Görünmez olabilmek'], v: null, x: 'İki klasik seçenek, tek çoğunluk!' },
  { d: 'medium', c: 'Zaman', t: 'Hangisini seçerdin?', o: ['Geçmişe 1 kez gitmek', 'Geleceğe 1 kez gitmek'], v: null, x: 'Merak geçmişte mi, gelecekte mi?' },
  { d: 'hard', c: 'Yaşam Tarzı', t: 'Hangisini seçerdin?', o: ['Hiç müzik dinlememek', 'Hiç film/dizi izlememek'], v: null, x: 'Zor bir tercih!' },
];

const ML_BANK = [
  { d: 'easy', c: 'Grup', t: 'Odada kim daha olası: Alarmı 5 kez erteleyen?', o: [], v: null, x: 'Arkadaşlarını oyla!' },
  { d: 'easy', c: 'Grup', t: 'Odada kim daha olası: Seyahatte bavulunu son dakika hazırlayan?', o: [], v: null, x: 'En çok oyu alan öne çıkar.' },
  { d: 'medium', c: 'Grup', t: 'Odada kim daha olası: Bir filmde 10 dakikada uyuyakalan?', o: [], v: null, x: 'Gözler üstünde!' },
  { d: 'medium', c: 'Grup', t: 'Odada kim daha olası: Grup sohbetine en geç cevap veren?', o: [], v: null, x: 'Kim acaba?' },
  { d: 'hard', c: 'Grup', t: 'Odada kim daha olası: Issız adada en hızlı düzen kuran?', o: [], v: null, x: 'Stratejist kim?' },
];

const EMOJI_BANK = [
  { d: 'easy', c: 'Film', t: '🦁👑🌅', a: ['aslan kral', 'the lion king'], x: 'Aslan Kral' },
  { d: 'easy', c: 'Film', t: '🕷️🕸️🏙️', a: ['örümcek adam', 'spider-man', 'spiderman'], x: 'Örümcek Adam' },
  { d: 'easy', c: 'Film', t: '🚢❄️🧊', a: ['titanik', 'titanic'], x: 'Titanik' },
  { d: 'medium', c: 'Film', t: '🧙‍♂️⚡🏰', a: ['harry potter'], x: 'Harry Potter' },
  { d: 'medium', c: 'Oyun', t: '🍄⭐ Luigi / Mario', a: ['super mario', 'mario'], x: 'Super Mario' },
  { d: 'medium', c: 'Dizi', t: '🐉🔥👑', a: ['game of thrones', 'taht oyunları'], x: 'Game of Thrones' },
  { d: 'hard', c: 'Film', t: '🕶️💊🐇', a: ['matrix', 'the matrix'], x: 'The Matrix' },
  { d: 'hard', c: 'Film', t: '🌀🧳💭', a: ['başlangıç', 'inception'], x: 'Inception' },
];

// Codenames kelime havuzu (zorluk filtreli)
const CODENAMES_WORDS = {
  easy: ['GÜNEŞ', 'DENİZ', 'ORMAN', 'KİTAP', 'MÜZİK', 'YILDIZ', 'KÖPRÜ', 'ARABA', 'ELMA', 'KULE', 'BULUT', 'ŞEHİR', 'AYNA', 'KAPI', 'BAHÇE', 'TREN', 'BALIK', 'KAR', 'ATEŞ', 'YOL', 'SAAT', 'MASA', 'GÖL', 'KUŞ', 'PENCERE', 'ÇİÇEK', 'ADA', 'RÜZGAR', 'KALEM', 'KARTAL', 'GEMİ', 'PİANO', 'DAĞ', 'NEHİR', 'AY', 'DÜNYA', 'IŞIK', 'SES', 'KEDİ', 'KÖPEK', 'PARK', 'KAMP', 'FENER', 'LİMAN'],
  medium: ['GÖLGE', 'PUZZLE', 'KORSAN', 'KUTUP', 'VOLKAN', 'MASKE', 'PUSULA', 'LABİRENT', 'KRAL', 'KRALİÇE', 'SİNYAL', 'VAKİT', 'KAFES', 'ELMAS', 'ZİNCİR', 'ÇÖL', 'MİRAS', 'GİZEM', 'KÖK', 'AYAZ', 'KAVŞAK', 'MEŞALE', 'BÜYÜ', 'KULE', 'KART', 'DÜĞÜM', 'KILAVUZ', 'ŞÖVALYE', 'SİS', 'KUM', 'AYDINLIK', 'KIVILCIM', 'KALKAN', 'OKYANUS', 'RİTM', 'KÖŞK', 'İKSİR'],
  hard: ['PARADOKS', 'EŞİK', 'İZ', 'KOD', 'SİMETRİ', 'MİRAGE', 'SÜREKLİLİK', 'KÖPRÜBAŞI', 'KUTUP YILDIZI', 'SESSİZLİK', 'KIPIRTI', 'ÖRÜNTÜ', 'KAVRAMA', 'SÜRGÜN', 'EKO', 'GEÇİT', 'KILIF', 'YANKI', 'TİTREŞİM', 'KAVRAM', 'DÖNGÜ', 'AĞ', 'NOKTA', 'ÇİZGİ', 'PERDE', 'SAHNE', 'KUŞAK', 'MİHENK', 'SIZINTI', 'İZLENİM', 'KIVRIM', 'KARŞITLIK']
};

// Imposter - Gizli Kelime çiftleri (ortak kelime, imposter kelime, kategori, zorluk)
const IMPOSTER_BANK = [
  { d: 'easy', c: 'Hayvanlar', common: 'KEDİ', imposter: 'KÖPEK' },
  { d: 'easy', c: 'Yiyecekler', common: 'PİZZA', imposter: 'BURGER' },
  { d: 'easy', c: 'Ülkeler', common: 'TÜRKİYE', imposter: 'YUNANİSTAN' },
  { d: 'easy', c: 'Şehirler', common: 'İSTANBUL', imposter: 'ANKARA' },
  { d: 'easy', c: 'Spor', common: 'FUTBOL', imposter: 'BASKETBOL' },
  { d: 'easy', c: 'Eşyalar', common: 'TELEFON', imposter: 'TABLET' },
  { d: 'medium', c: 'Filmler', common: 'TITANIC', imposter: 'AVATAR' },
  { d: 'medium', c: 'Diziler', common: 'SHERLOCK', imposter: 'LUPIN' },
  { d: 'medium', c: 'Oyunlar', common: 'MINECRAFT', imposter: 'ROBLOX' },
  { d: 'medium', c: 'Günlük hayat', common: 'KAHVE', imposter: 'ÇAY' },
  { d: 'medium', c: 'Yiyecekler', common: 'DONDURMA', imposter: 'PASTA' },
  { d: 'medium', c: 'Şehirler', common: 'PARİS', imposter: 'ROMA' },
  { d: 'hard', c: 'Eşyalar', common: 'PUSULA', imposter: 'HARİTA' },
  { d: 'hard', c: 'Günlük hayat', common: 'RÜYA', imposter: 'HAFIZA' },
  { d: 'hard', c: 'Spor', common: 'SATRANÇ', imposter: 'GO' },
  { d: 'hard', c: 'Filmler', common: 'INCEPTION', imposter: 'INTERSTELLAR' },
];

// Şarkıyı İlk Sen Bil! kataloğu (telifsiz / izinli / synth veya demo preview URL'li genişletilebilir yapı)
// Not: Telif kuralları gereği harici ses dosyaları sunucuda barındırılmaz; meta veri + opsiyonel previewUrl/synth desteği bulunur.
const MUSIC_CATEGORIES = [
  'Türkçe Pop', 'Yabancı Pop', 'Türkçe Rap', 'Yabancı Rap', 'Rock',
  'Alternatif', 'Arabesk', 'Türkçe Slow', 'Yabancı Slow',
  '2000\'ler', '2010\'lar', '2020 ve sonrası',
  'Film müzikleri', 'Dizi müzikleri', 'Oyun müzikleri', 'Karışık'
];

const TURKISH_ARTISTS = [
  'Tarkan', 'Oğuzhan Koç', 'Sezen Aksu', 'Hadise', 'Edis',
  'Mabel Matiz', 'Simge', 'Güneş', 'Ezhel', 'Ceza',
  'Sagopa Kajmer', 'Uzi', 'Lvbel C5', 'Murda', 'Duman',
  'Manga', 'Barış Manço', 'Teoman', 'Kenan Doğulu', 'Mustafa Sandal'
];

const FOREIGN_ARTISTS = [
  'The Weeknd', 'Taylor Swift', 'Eminem', 'Rihanna', 'Drake',
  'Billie Eilish', 'Bruno Mars', 'Ed Sheeran', 'Dua Lipa', 'Michael Jackson',
  'Adele', 'Coldplay', 'Imagine Dragons', 'Linkin Park', 'Queen'
];

const MUSIC_BANK = [
  { id: 'm1', title: 'Şımarık', artist: 'Tarkan', lang: 'tr', genres: ['Türkçe Pop', 'Karışık'], decade: '2000\'ler', year: 1997, d: 'easy', pop: 'high', notes: [659.25, 783.99, 880, 783.99, 659.25] },
  { id: 'm2', title: 'Gülümse', artist: 'Sezen Aksu', lang: 'tr', genres: ['Türkçe Pop', 'Türkçe Slow', 'Karışık'], decade: '2000\'ler', year: 1991, d: 'easy', pop: 'high', notes: [523.25, 587.33, 659.25, 587.33, 523.25] },
  { id: 'm3', title: 'Aman Aman', artist: 'Duman', lang: 'tr', genres: ['Rock', 'Alternatif', 'Karışık'], decade: '2000\'ler', year: 2002, d: 'easy', pop: 'high', notes: [440, 523.25, 659.25, 587.33, 440] },
  { id: 'm4', title: 'Bir Kızıl Gonca', artist: 'Manga', lang: 'tr', genres: ['Rock', 'Alternatif', '2010\'lar'], decade: '2010\'lar', year: 2009, d: 'medium', pop: 'high', notes: [392, 493.88, 587.33, 659.25, 587.33] },
  { id: 'm5', title: 'Sarı Çizmeli Mehmet Ağa', artist: 'Barış Manço', lang: 'tr', genres: ['Türkçe Pop', 'Alternatif', 'Karışık'], decade: '2000\'ler', year: 1981, d: 'easy', pop: 'high', notes: [587.33, 659.25, 739.99, 659.25, 587.33] },
  { id: 'm6', title: 'Paramparça', artist: 'Teoman', lang: 'tr', genres: ['Rock', 'Türkçe Slow', '2000\'ler'], decade: '2000\'ler', year: 2001, d: 'medium', pop: 'high', notes: [493.88, 587.33, 659.25, 523.25, 493.88] },
  { id: 'm7', title: 'Aşkın Olayım', artist: 'Simge', lang: 'tr', genres: ['Türkçe Pop', '2020 ve sonrası'], decade: '2020 ve sonrası', year: 2019, d: 'easy', pop: 'high', notes: [659.25, 659.25, 783.99, 880, 783.99] },
  { id: 'm8', title: 'Neyse', artist: 'Ezhel', lang: 'tr', genres: ['Türkçe Rap', '2010\'lar'], decade: '2010\'lar', year: 2017, d: 'medium', pop: 'high', notes: [349.23, 440, 523.25, 440, 392] },
  { id: 'm9', title: 'Holocaust', artist: 'Ceza', lang: 'tr', genres: ['Türkçe Rap', '2000\'ler'], decade: '2000\'ler', year: 2006, d: 'hard', pop: 'medium', notes: [329.63, 392, 493.88, 587.33, 493.88] },
  { id: 'm10', title: '24', artist: 'Sagopa Kajmer', lang: 'tr', genres: ['Türkçe Rap', 'Türkçe Slow', '2010\'lar'], decade: '2010\'lar', year: 2011, d: 'hard', pop: 'medium', notes: [440, 415.30, 392, 329.63, 440] },
  { id: 'm11', title: 'Blinding Lights', artist: 'The Weeknd', lang: 'en', genres: ['Yabancı Pop', '2020 ve sonrası'], decade: '2020 ve sonrası', year: 2019, d: 'easy', pop: 'high', notes: [698.46, 698.46, 783.99, 880, 783.99] },
  { id: 'm12', title: 'Shape of You', artist: 'Ed Sheeran', lang: 'en', genres: ['Yabancı Pop', '2010\'lar'], decade: '2010\'lar', year: 2017, d: 'easy', pop: 'high', notes: [659.25, 783.99, 659.25, 659.25, 587.33] },
  { id: 'm13', title: 'Bad Guy', artist: 'Billie Eilish', lang: 'en', genres: ['Alternatif', 'Yabancı Pop', '2020 ve sonrası'], decade: '2020 ve sonrası', year: 2019, d: 'medium', pop: 'high', notes: [220, 220, 261.63, 293.66, 220] },
  { id: 'm14', title: 'Bohemian Rhapsody', artist: 'Queen', lang: 'en', genres: ['Rock', 'Karışık'], decade: '2000\'ler', year: 1975, d: 'easy', pop: 'high', notes: [587.33, 659.25, 783.99, 880, 987.77] },
  { id: 'm15', title: 'Numb', artist: 'Linkin Park', lang: 'en', genres: ['Rock', '2000\'ler'], decade: '2000\'ler', year: 2003, d: 'medium', pop: 'high', notes: [493.88, 659.25, 739.99, 659.25, 587.33] },
  { id: 'm16', title: 'Lose Yourself', artist: 'Eminem', lang: 'en', genres: ['Yabancı Rap', '2000\'ler'], decade: '2000\'ler', year: 2002, d: 'medium', pop: 'high', notes: [293.66, 349.23, 440, 392, 349.23] },
  { id: 'm17', title: 'Rolling in the Deep', artist: 'Adele', lang: 'en', genres: ['Yabancı Slow', 'Yabancı Pop', '2010\'lar'], decade: '2010\'lar', year: 2010, d: 'easy', pop: 'high', notes: [440, 523.25, 659.25, 587.33, 523.25] },
  { id: 'm18', title: 'Viva La Vida', artist: 'Coldplay', lang: 'en', genres: ['Alternatif', 'Yabancı Pop', '2010\'lar'], decade: '2010\'lar', year: 2008, d: 'easy', pop: 'high', notes: [622.25, 698.46, 523.25, 466.16, 392] },
  { id: 'm19', title: 'Sinematik Tema', artist: 'Film Orkestrası', lang: 'inst', genres: ['Film müzikleri', 'Karışık'], decade: '2010\'lar', year: 2014, d: 'medium', pop: 'medium', notes: [392, 587.33, 783.99, 659.25, 587.33] },
  { id: 'm20', title: 'Piksel Kahramanı', artist: '8-Bit Kolektif', lang: 'inst', genres: ['Oyun müzikleri', '2010\'lar'], decade: '2010\'lar', year: 2016, d: 'hard', pop: 'low', notes: [523.25, 659.25, 783.99, 1046.5, 783.99] },
];

// Filmden Kareyi Bil! kataloğu
// Not: Her kare farklı bir sahne/anlatım kartıdır (yakınlaştırma değil, ayrı sahne açıklaması ve görsel kart).
const FILM_CATEGORIES = [
  'Hollywood', 'Türk Sineması', 'Marvel', 'DC', 'Animasyon', 'Disney', 'Pixar',
  'Harry Potter', 'Bilim Kurgu', 'Aksiyon', 'Komedi', 'Korku', 'Gerilim',
  'Fantastik', 'Dram', 'Romantik', 'Macera', 'Suç ve Polisiye',
  'Eski Klasikler', 'Yeni Filmler', 'Tüm Zamanların Popüler Filmleri'
];

const FILM_SERIES = [
  'Marvel Sinematik Evreni', 'DC Evreni', 'Harry Potter', 'Yüzüklerin Efendisi',
  'Hızlı ve Öfkeli', 'Karayip Korsanları', 'Transformers', 'Jurassic Park',
  'Mission Impossible', 'Star Wars', 'John Wick', 'Spider-Man', 'Batman'
];

const FILM_BANK = [
  {
    id: 'f1', title: 'Yüzüklerin Efendisi: Yüzük Kardeşliği', year: 2001, region: 'hollywood',
    categories: ['Hollywood', 'Fantastik', 'Macera', 'Eski Klasikler', 'Tüm Zamanların Popüler Filmleri'],
    series: 'Yüzüklerin Efendisi', d: 'easy', pop: 'high',
    scenes: [
      { label: 'Sahne 1 · Shire Tepeleri', desc: 'Yeşil tepelerdeki yuvarlak kapılı Hobbit evlerinin önünden sabah sisi kalkıyor.', palette: ['#1b4332', '#74c69d'], emoji: '🌿🏡' },
      { label: 'Sahne 2 · Ayrıkvadi Konseyi', desc: 'Farklı halklardan temsilciler taş bir avluda ortak bir amaç için bir araya geliyor.', palette: ['#2b2d42', '#8d99ae'], emoji: '⚔️🤝' },
      { label: 'Sahne 3 · Moria Madenleri', desc: 'Yüksek sütunlu yeraltı salonunda ışık huzmesi antik mezar taşlarına düşüyor.', palette: ['#1d1e2c', '#f7b801'], emoji: '🕯️🏛️' },
      { label: 'Sahne 4 · Amon Hen Kıyısı', desc: 'Geniş nehir kıyısında orman gölgesinde iki yol ayrımı beliriyor.', palette: ['#264653', '#2a9d8f'], emoji: '🛶🌲' },
      { label: 'Sahne 5 · Tek Yüzük', desc: 'Altın halkadaki kadim yazılar korların arasında parlamaya başlıyor.', palette: ['#3d1308', '#ff9f1c'], emoji: '💍🔥' },
    ],
    answers: ['yüzüklerin efendisi', 'yüzük kardeşliği', 'lord of the rings', 'lotr']
  },
  {
    id: 'f2', title: 'Kara Şövalye', year: 2008, region: 'hollywood',
    categories: ['Hollywood', 'DC', 'Aksiyon', 'Suç ve Polisiye', 'Gerilim', 'Tüm Zamanların Popüler Filmleri'],
    series: 'Batman', d: 'easy', pop: 'high',
    scenes: [
      { label: 'Sahne 1 · Gotham Gökyüzü', desc: 'Yağmurlu bir gecede yüksek binaların arasında arama ışığı bulutları yarıyor.', palette: ['#0f172a', '#38bdf8'], emoji: '🦇🌧️' },
      { label: 'Sahne 2 · Banka Soygunu', desc: 'Palyaço maskeli hırsızlar sabahın erken saatinde sokaktan ayrılıyor.', palette: ['#1e1b4b', '#f43f5e'], emoji: '🎭🏦' },
      { label: 'Sahne 3 · Gece Kovalamacası', desc: 'Yeraltı tünelinde motor ve ağır zırhlı araç farları karanlığı aydınlatıyor.', palette: ['#111827', '#f59e0b'], emoji: '🏍️💥' },
      { label: 'Sahne 4 · Sorgu Odası', desc: 'Tek lambalı odada masa başında keskin bir psikolojik yüzleşme yaşanıyor.', palette: ['#18181b', '#a1a1aa'], emoji: '🃏💡' },
      { label: 'Sahne 5 · Yarasa Sinyali', desc: 'Çatı kenarında pelerinli figür şehrin ışıklarını izliyor.', palette: ['#090d16', '#eab308'], emoji: '🌃🦸' },
    ],
    answers: ['kara şövalye', 'the dark knight', 'dark knight', 'batman']
  },
  {
    id: 'f3', title: 'Harry Potter ve Felsefe Taşı', year: 2001, region: 'hollywood',
    categories: ['Hollywood', 'Harry Potter', 'Fantastik', 'Macera', 'Eski Klasikler', 'Tüm Zamanların Popüler Filmleri'],
    series: 'Harry Potter', d: 'easy', pop: 'high',
    scenes: [
      { label: 'Sahne 1 · Privet Drive', desc: 'Sıradan bir banliyö sokağının gece yarısı sokak lambaları sönüyor.', palette: ['#1e293b', '#94a3b8'], emoji: '🌙🏠' },
      { label: 'Sahne 2 · Peron 9¾', desc: 'Tuğla duvar ile buharlı lokomotif arasında gizli bir geçit açılıyor.', palette: ['#450a0a', '#ef4444'], emoji: '🚂🧳' },
      { label: 'Sahne 3 · Büyük Salon', desc: 'Tavanda süzülen yüzlerce mumun altında uzun yemek masaları uzanıyor.', palette: ['#2e1065', '#fbbf24'], emoji: '🕯️🏰' },
      { label: 'Sahne 4 · Quidditch Sahası', desc: 'Çim sahada süpürgelerle havalanan oyuncular topun peşinden gidiyor.', palette: ['#14532d', '#4ade80'], emoji: '🧹⚡' },
      { label: 'Sahne 5 · Yıldızlı Asa & Baykuş', desc: 'Taş koridorda beyaz bir baykuş ve sihirli bir asa görülüyor.', palette: ['#172554', '#e2e8f0'], emoji: '🦉🪄' },
    ],
    answers: ['harry potter', 'felsefe taşı', 'harry potter ve felsefe taşı']
  },
  {
    id: 'f4', title: 'Ayla', year: 2017, region: 'tr',
    categories: ['Türk Sineması', 'Dram', 'Yeni Filmler'],
    series: '', d: 'medium', pop: 'high',
    scenes: [
      { label: 'Sahne 1 · Karlı Gece', desc: 'Soğuk kış gecesinde birlik kampının çevresi sessizlikle kaplı.', palette: ['#1e3a5f', '#cbd5e1'], emoji: '❄️⛺' },
      { label: 'Sahne 2 · Küçük Kız', desc: 'Açık alanda korkmuş küçük bir kız çocuğu etrafına bakıyor.', palette: ['#3f2e21', '#eab308'], emoji: '👧🏻💫' },
      { label: 'Sahne 3 · Askeri Birlik', desc: 'Sıraya geçmiş askerler görev ve dostluk duygusuyla yan yana duruyor.', palette: ['#2f3e2e', '#a3b18a'], emoji: '🎖️🤝' },
      { label: 'Sahne 4 · Liman Vedası', desc: 'Geminin kalkış saatinde rıhtımda duygusal bir veda anı yaşanıyor.', palette: ['#1d3557', '#a8dadc'], emoji: '🚢👋' },
      { label: 'Sahne 5 · Yıllar Sonra Kavuşma', desc: 'İki farklı coğrafyadan gelen insanın yıllar süren hasreti sona eriyor.', palette: ['#4a2c2a', '#f4a261'], emoji: '❤️🕊️' },
    ],
    answers: ['ayla']
  },
  {
    id: 'f5', title: 'Toy Story', year: 1995, region: 'hollywood',
    categories: ['Hollywood', 'Animasyon', 'Disney', 'Pixar', 'Komedi', 'Macera', 'Eski Klasikler', 'Tüm Zamanların Popüler Filmleri'],
    series: '', d: 'easy', pop: 'high',
    scenes: [
      { label: 'Sahne 1 · Çocuk Odası', desc: 'Bulut desenli duvarlar ve raflardaki oyuncaklarla dolu neşeli bir oda.', palette: ['#1d4ed8', '#fde047'], emoji: '☁️🧸' },
      { label: 'Sahne 2 · Uzay Ranger', desc: 'Beyaz-yeşil uzay kostümlü figür kanatlarını açarak poz veriyor.', palette: ['#065f46', '#a7f3d0'], emoji: '🚀👨‍🚀' },
      { label: 'Sahne 3 · Yatak Altı Toplantısı', desc: 'Oyuncaklar kimse yokken odanın ortasında plan yapıyor.', palette: ['#581c87', '#e9d5ff'], emoji: '🤠🧩' },
      { label: 'Sahne 4 · Hareketli Yol', desc: 'Şehir trafiğinde oyuncakların hızla ilerlemesi gereken kritik bir an.', palette: ['#7c2d12', '#fb923c'], emoji: '🚗💨' },
      { label: 'Sahne 5 · Sonsuzluğa ve Ötesine', desc: 'İki yakın dost omuz omuza yeni maceralara bakıyor.', palette: ['#1e1b4b', '#60a5fa'], emoji: '🌟🤝' },
    ],
    answers: ['toy story', 'oyuncak hikayesi']
  },
  {
    id: 'f6', title: 'Avengers: Endgame', year: 2019, region: 'hollywood',
    categories: ['Hollywood', 'Marvel', 'Bilim Kurgu', 'Aksiyon', 'Macera', 'Yeni Filmler', 'Tüm Zamanların Popüler Filmleri'],
    series: 'Marvel Sinematik Evreni', d: 'medium', pop: 'high',
    scenes: [
      { label: 'Sahne 1 · Sessiz Çiftlik', desc: 'Tarla kenarındaki ahşap evin önünde sabah güneşinin ilk ışıkları var.', palette: ['#365314', '#bef264'], emoji: '🌾🌅' },
      { label: 'Sahne 2 · Kuantum Laboratuvarı', desc: 'Metalik platformlar ve enerji halkalarıyla çevrili bilim alanı.', palette: ['#164e63', '#22d3ee'], emoji: '⚛️🔬' },
      { label: 'Sahne 3 · Zaman Yolculuğu', desc: 'Beyaz-kırmızı özel kıyafetlerle geçmişin önemli anlarına dönüş yapılıyor.', palette: ['#312e81', '#c7d2fe'], emoji: '⏳🌀' },
      { label: 'Sahne 4 · Yıkık Savaş Alanı', desc: 'Toz ve duman bulutları arasında dev bir çatışma alanı uzanıyor.', palette: ['#451a03', '#f97316'], emoji: '🛡️🔥' },
      { label: 'Sahne 5 · Kahramanlar Saf Tutuyor', desc: 'Tüm kahramanlar tek bir cephede yan yana diziliyor.', palette: ['#1e1b4b', '#facc15'], emoji: '⚡🦸‍♂️' },
    ],
    answers: ['avengers endgame', 'endgame', 'avengers']
  },
  {
    id: 'f7', title: 'Karayip Korsanları: Siyah İnci’nin Laneti', year: 2003, region: 'hollywood',
    categories: ['Hollywood', 'Disney', 'Macera', 'Fantastik', 'Aksiyon', 'Eski Klasikler'],
    series: 'Karayip Korsanları', d: 'medium', pop: 'high',
    scenes: [
      { label: 'Sahne 1 · Liman İskelesi', desc: 'Korsan hikayelerinin başladığı güneşli liman kasabası ve yelkenliler.', palette: ['#0f4c5c', '#e36414'], emoji: '⚓🏴‍☠️' },
      { label: 'Sahne 2 · Ay Işığında İskelet', desc: 'Ay ışığı vurduğunda lanetli korsanların gerçek görünümü ortaya çıkıyor.', palette: ['#090d16', '#94a3b8'], emoji: '🌕💀' },
      { label: 'Sahne 3 · Tersane Çatışması', desc: 'Dev çarkların ve halatların arasında hızlı bir kılıç düellosu yaşanıyor.', palette: ['#422006', '#fbbf24'], emoji: '⚔️⚙️' },
      { label: 'Sahne 4 · Açık Deniz', desc: 'Siyah yelkenli gemi dalgaları yararak ufka doğru ilerliyor.', palette: ['#0c4a6e', '#7dd3fc'], emoji: '🌊⛵' },
      { label: 'Sahne 5 · Pusula', desc: 'Kuzeyi değil, en çok isteneni gösteren pirinç pusula.', palette: ['#292524', '#f59e0b'], emoji: '🧭✨' },
    ],
    answers: ['karayip korsanları', 'siyah incinin laneti', 'pirates of the caribbean']
  },
  {
    id: 'f8', title: 'Vizontele', year: 2001, region: 'tr',
    categories: ['Türk Sineması', 'Komedi', 'Dram', 'Eski Klasikler'],
    series: '', d: 'medium', pop: 'high',
    scenes: [
      { label: 'Sahne 1 · Anadolu Kasabası', desc: 'Taş evler ve tepelerle çevrili sakin bir kasaba meydanı.', palette: ['#5c4033', '#e9c46a'], emoji: '🏔️🏘️' },
      { label: 'Sahne 2 · Televizyon Geliyor', desc: 'Kasaba halkı ilk kez göreceği televizyon kutusunun etrafında toplanıyor.', palette: ['#2b2d42', '#edf2f4'], emoji: '📺👥' },
      { label: 'Sahne 3 · Verici Tepesi', desc: 'Yüksek bir tepede sinyal yakalamaya çalışan ekip uğraş veriyor.', palette: ['#283618', '#dda15e'], emoji: '📡⛰️' },
      { label: 'Sahne 4 · Belediye Binası', desc: 'Kasaba yönetiminin sıcak ve esprili sohbetleri sürüyor.', palette: ['#3d405b', '#f2cc8f'], emoji: '🏛️😄' },
      { label: 'Sahne 5 · İlk Yayın', desc: 'Ekran açılıyor ve tüm kasaba nefesini tutarak izliyor.', palette: ['#1d3557', '#f1faee'], emoji: '🎬✨' },
    ],
    answers: ['vizontele']
  },
];

module.exports = {
  TF_BANK,
  CLOSEST_BANK,
  QUIZ_BANK,
  LIAR_BANK,
  WYR_BANK,
  ML_BANK,
  EMOJI_BANK,
  CODENAMES_WORDS,
  IMPOSTER_BANK,
  MUSIC_CATEGORIES,
  TURKISH_ARTISTS,
  FOREIGN_ARTISTS,
  MUSIC_BANK,
  FILM_CATEGORIES,
  FILM_SERIES,
  FILM_BANK,
};

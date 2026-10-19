# DESIGN.md — Kahve Destanı

Bu dosya sitenin biçimlendirmesinde tek doğru kaynaktır. Aşağıdaki blok, `../tasarim-yonu.md` dosyasının son bölümünden ("KURULUM ADIMINA YAPIŞTIRILACAK BLOK") olduğu gibi kopyalandı; içinde tek kelime değiştirilmedi. Gerekçeler ve kontrast hesapları için o dosyanın tamamına bakın.

```
TASARIM YÖNÜ — Kahve Destanı (Feritpaşa, Selçuklu / Konya). Palet taslaktır; tabela renkleri gelince firuze onunla değişir.

FİKİR: Feritpaşa'nın gece yarısına kadar yanan lambası. Sakin bir mahalle kafesi; sayfa sabahtan geceye akar ve "şimdi gidebilir miyim?" sorusunu cevaplar.

TİPOGRAFİ
- Display: Instrument Serif 400 (yedek: "Iowan Old Style", "Palatino Linotype", Georgia, serif). YALNIZCA h1, h2 ve saat bandındaki "00.00" / "09.00" rakamları.
- Metin: Atkinson Hyperlegible Next (yedek: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif). 400: gövde, adres, saat satırları, alt yazı, footer. 600: buton, menü bağlantısı, ürün adı, bugünün saat satırı, "Şu an açık". Başka kesit yükleme.
- Puntolar (masaüstü / telefon, satır yüksekliği): dev "00.00" 280px / 120px, 0.9 · h1 88px / 56px, 1.0 · h2 52px / 36px, 1.05 · giriş satırı 24px / 20px, 1.45 · h3 ve ürün adı 24px / 21px, 1.3 · gövde 18px / 17px, 1.6 · buton ve menü 18px / 17px · alt yazı 15px / 15px, 1.45.
- clamp: h1 clamp(3.5rem, 7vw, 5.5rem); dev rakam clamp(7.5rem, 22vw, 17.5rem). Metin sütunu max-width 66ch.

RENK
- Krem #F6EFE3 (gündüz zemini) · Espresso #2A1D17 (metin, gece zemini) · Firuze #0E6466 (ana buton, bağlantı) · Lamba #E8B04B (yalnızca koyu zeminde) · Toprak #6A5547 (alt yazı).
- Kontrast: espresso/krem 14.28:1 · krem/firuze 6.06:1 · toprak/krem 6.12:1 · lamba/espresso 8.35:1.
- Yasak: lamba krem üstünde (1.71:1), firuze espresso üstünde (2.36:1), toprak espresso üstünde (2.33:1).
- Gradyan, gölge, cam efekti, neon yok.

DÜZEN VE SIRA
- Bölüm sırası: Üst başlık · Hero · Ne sunuyoruz · Neden biz · Fotoğraf şeridi · Saatler ve konum (espresso) · Çağrı (espresso) · Footer (espresso).
- 8px taban. Bölüm aralığı 128px masaüstü / 80px telefon. Kenar boşluğu 20px telefon / 32px tablet / 64px masaüstü. İçerik en fazla 1200px.
- 12 sütun. Hero: metin 1–7, fotoğraf 8'den başlayıp ekranın sağ kenarına taşar. Ne sunuyoruz: h2 2–5, liste 6–12 ve 96px aşağıdan başlar. Neden biz: metin 1–6, portre 8–12 ve bölümün üstünden 64px yukarı taşar.
- Hero sola yaslı, tek buton ("Hemen ara"); "Yol tarifi al" adresin altında altı çizili bağlantı. Menü üç kart değil, ince çizgilerle ayrılmış liste.
- En büyük öğe: saatler bandındaki lamba renkli "00.00". Altında 09'dan 24'e uzanan gün çizgisi ve şimdiki saati gösteren nokta.
- Kenardan kenara: fotoğraf şeridi (4 kare, 4:5, 8px ara; telefonda 2×2) ve ardından espresso saatler bandı.

DOKUNMA VE ARAMA BUTONU
- Dokunulabilir her şey en az 48px yüksek, aralarında en az 8px. Telefon, adres ve Instagram da 48px'lik bağlantı.
- "Hemen ara": firuze dolgu, krem yazı, 600, 56px, solda 20px çizgi telefon ikonu. tel:+905370247828.
- Telefon: altta sabit bar, 72px + env(safe-area-inset-bottom), krem zemin, üstte 1px toprak çizgi. Sağda %60 "Hemen ara", solda %40 "Yol tarifi al" (2px espresso kenar). Kaydırınca hep yerinde, hiç gizlenmez; body'nin altına bar kadar boşluk.
- Masaüstü: yapışkan üst başlık 72px, sağ ucunda "0537 024 78 28" firuze arama butonu.
- Koyu bölümde buton: lamba dolgu, espresso yazı.
- Emoji yok; yalnızca üç çizgi SVG ikon (telefon, konum, Instagram), 2px çizgi.
- Menü bağlantıları (Menü · Konum · Hakkımızda) telefonda da görünür, hamburger yok. Site tek dilli; İngilizce eklenirse "TR · EN" menünün içinde, aynı punto ve kesitle.

FOTOĞRAF
- Telefonla, gün ışığında, flaşsız, 1x lens. Çekilecekler: sokaktan kapı (29/A okunur), pencereye doğru iç mekân, akşam lambalar yanarken iç mekân, 45 dereceden kahve, günün tatlısı, kahve hazırlayan eller, arkadan/yandan sohbet eden müşteriler (izinli), işletmeyi çalıştıran kişinin portresi.
- Hero: akşam karesi 4:5, sağ kenara taşar, üstüne yazı binmez. Şerit: 4 kare 4:5 kenardan kenara. Konum: kapı 3:4. Neden biz: portre 3:2. WebP 100–150 KB, ilk kare dışında loading="lazy". Stok fotoğraf yok.
- Fotoğraf yokken: aynı oranlı düz blok, ortasında 1.5px çizgiyle Selçuklu sekiz köşeli yıldızı (genişliğin %40'ı, merkezden hafif sağa-aşağı). İki çeşit sırayla: espresso + lamba çizgi, firuze + krem çizgi. Altında 15px toprak alt yazı, gelecek kareyi anlatır: "Nişantaş Sokak No:29/A, kapımız" / "Akşam, lambalar yanarken" / "Günün tatlısı". "Görsel/fotoğraf" yazan gri kutu asla.

HAREKET
- Hero: h1 450ms opaklık + 16px yukarı; 100ms sonra "Şu an açık" 300ms opaklık; fotoğraf 400ms opaklık + scale 0.98→1.
- Göründükçe bir kez, her bölüm farklı: menü satırları yalnızca opaklık, 60ms arayla; portre 24px soldan; şerit kareleri scale 0.98→1. 300–450ms.
- Geri bildirim: buton üzerine gelince translateY(-2px) 200ms, basınca scale(0.97) 150ms; bağlantı alt çizgisi scaleX 200ms. Renk geçişsiz değişir.
- İmza: saatler bandı görününce gün çizgisi scaleX 0→1 ve nokta translateX ile 09'dan şimdiki saate, 500ms. Kapalıysa nokta başta, "Kapalı · 09.00'da açıyoruz".
- Eğri cubic-bezier(0.2, 0, 0, 1). Linear yok. Yalnızca transform ve opacity.
- Gizli durumlar yalnızca html.js-hareket altında; sınıfı JS ekler, IntersectionObserver varsa ve hareket tercih ediliyorsa. Yüklemede ekrandakiler hemen görünür; 2.5 sn sonra hâlâ gizli olan her şey açılır. JS yoksa sayfa bitmiş, saatler düz metin.
- Tüm girişler @media (prefers-reduced-motion: no-preference) içinde; azaltılmış harekette nokta doğrudan şimdiki saatte.
- Kaydırma ele geçirme, parallax, otomatik karusel, açılış ekranı yok.

YASAK: gradyan ve gradyanlı metin; ortalanmış hero + gri alt başlık + yan yana iki buton; ikonlu üç eşit kart; "Yükselt, Keşfet, Kusursuz, Güçlendir, Devrim, Dönüştür, Günümüzün hızlı dünyasında"; emoji ikon; glassmorphism, neon, gölge; stok fotoğraf; uydurma yorum, puan, logo şeridi, istatistik. ⚠️ Saatler (09.00–00.00) teyit edilmeden yayına çıkmaz; değişirse "00.00" ve gün çizgisi onunla değişir.
```

---

## Kararlar (bloktan sonra alınanlar)

Yukarıdaki blok değişmez. Onunla çelişen bir karar alınırsa burada, tarihiyle yazılır ve bu bölüm kazanır.

1. **Ana buton "Yol tarifi al".** (Berra Gök, 18 Ekim 2026.) Blok "Hemen ara"yı ana buton yapmıştı. Hero'da ve çağrıda dolu buton "Yol tarifi al"dır: gündüzde firuze dolgu ve krem yazı, gecede lamba dolgu ve espresso yazı. "Hemen ara" ise üst başlıkta ve iletişim bloğunda çerçeveli ikinci buton olarak durur.
2. **Metin genişliği 44ch.** Bloktaki "66ch" bu yazı karakterinde satıra 84 harf sığdırıyordu. Bloğun asıl istediği şey satırda en fazla 66 karakter olması. Bu yüzden ölçülerek 44ch'ye çekildi.
3. **Yazı karakterleri yerelde.** Google Fonts'tan çekilmiyor, `fonts/` klasöründe duruyor (OFL lisansları yanında). Böylece ziyaretçinin IP adresi Google'a gitmiyor.
4. **Telefonda h1 68px.** Bloktaki 56px, 17px gövdenin 3,3 katıydı. Kurulum şartı ise başlığın gövdenin en az 4 katı olması. Bu yüzden alt sınır 68px'e çekildi (`clamp(4.25rem, 3rem + 4vw, 5.5rem)`). Masaüstündeki 88px değişmedi.
5. **Telefonda üst başlık iki satır ve yapışkan değil.** "Hamburger yok" şartı için marka bir satırda, üç menü bağlantısı ikinci satırda duruyor. Arama ve yol tarifi alttaki sabit barda. Bar kararın 1'e göre sağda %60 "Yol tarifi al" (firuze), solda %40 "Hemen ara" (çerçeveli). 360px'in altında bardaki ikonlar düşüyor.
6. **Daha modern görünüm.** (Berra Gök, 19 Ekim 2026.) Sayfa fazla boş ve "Konum" bölümü dağınık bulundu. Butonlar hap biçiminde (tam yuvarlak köşe), çizimler ve kartlar 20px yuvarlak köşeli. Menüdeki iki kalem ince çizgiler yerine yan yana iki kum renkli kart (#EDE2CF). "Neredeyiz?" ve "Bize ulaşın" kapı çiziminin yanında tek bir kahve renkli kartta (#3A2A22) birleşti. Hero çizimi ekran yüksekliğinin %70'iyle sınırlı. Gölge, gradyan ve cam efekti yasağı sürüyor.

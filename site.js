// Kahve Destanı — "şu an açık mı?" ve göründükçe ortaya çıkma.
// Bu dosya hiç çalışmazsa sayfa eksiksiz okunur; yalnızca durum satırı ve gün çizgisindeki nokta olmaz.

(function () {
  // Saatler (⚠️ teyit bekliyor): her gün 09.00–00.00. Değişirse yalnızca bu iki sayı değişir.
  var ACILIS = 9;
  var KAPANIS = 24;

  // Ziyaretçinin saat dilimi ne olursa olsun Konya saati
  function konyaSaati() {
    var parcalar = new Intl.DateTimeFormat("tr-TR", {
      timeZone: "Europe/Istanbul",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23"
    }).formatToParts(new Date());
    var saat = 0;
    var dakika = 0;
    parcalar.forEach(function (p) {
      if (p.type === "hour") saat = Number(p.value);
      if (p.type === "minute") dakika = Number(p.value);
    });
    return saat + dakika / 60;
  }

  var simdi = konyaSaati();
  var acik = simdi >= ACILIS && simdi < KAPANIS;

  document.querySelectorAll("[data-durum]").forEach(function (el) {
    el.textContent = acik ? "Şu an açık" : "Kapalı · 09.00'da açıyoruz";
    el.classList.toggle("kapali", !acik);
    el.hidden = false;
  });

  // Gün çizgisi: kapalıyken nokta 09'un başında durur
  var oran = acik ? (simdi - ACILIS) / (KAPANIS - ACILIS) : 0;
  document.querySelectorAll(".gun").forEach(function (gun) {
    gun.style.setProperty("--oran", oran.toFixed(4));
    gun.querySelector(".gun-nokta-yolu").hidden = false;
  });

  // Ortaya çıkma: yalnızca head'deki betik js-hareket sınıfını eklediyse
  var kok = document.documentElement;
  if (!kok.classList.contains("js-hareket")) return;

  var ogeler = document.querySelectorAll("[data-gorun]");
  var gozlemci = new IntersectionObserver(function (girdiler) {
    girdiler.forEach(function (g) {
      if (g.isIntersecting) {
        g.target.classList.add("gorundu");
        gozlemci.unobserve(g.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });

  // Bir kare bekle ki başlangıç durumu çizilsin ve geçiş gerçekten oynasın
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      ogeler.forEach(function (el) { gozlemci.observe(el); });
    });
  });
})();

/* Marina Casino - ozel link yonlendirmeleri
   Altyapinin kendi yonlendirmesini ezip, kisayol butonlarini kendi linklerimize gonderir.
   Header Script'e su satirla yuklenir:
   <script src="https://cdn.jsdelivr.net/gh/RayanCherki/style@main/custom.js"></script>
*/
(function () {
  // img alt metni -> gidilecek URL. Yeni override eklemek icin bir satir ekle.
  var LINKS = {
    'BONUS TALEP': 'https://marinaotobonus.com/bonustalep'
  };

  // Tek bir yakalama (capture) fazi dinleyici: SPA yeniden render etse de bozulmaz,
  // altyapinin kendi tiklama isleyicisinden ONCE calisir.
  document.addEventListener('click', function (e) {
    // Hesap menusu > Bonus Talebi -> kendi bonustalep sayfamiz
    var nav = e.target.closest && e.target.closest('a[href*="t=bonus_offers"]');
    if (nav) {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.location.href = 'https://marinaotobonus.com/bonustalep';
      return;
    }
    var item = e.target.closest && e.target.closest('[data-mj="widget-pages-item"]');
    if (!item) return;
    var img = item.querySelector('img[alt]');
    if (!img) return;
    var url = LINKS[img.getAttribute('alt')];
    if (!url) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    window.location.href = url;
  }, true);
})();

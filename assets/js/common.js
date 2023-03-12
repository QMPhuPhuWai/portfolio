jQuery(function ($) {
  /* =========================================
   *  MV Slider Text
   * ========================================= */
  $(".voice-slider").slick({
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  });

  /* ========================================= */

  /* =========================================
   *  Accrodian
   * ========================================= */
  $(function () {
    // タイトルをクリックすると
    $(".js-accordion-title").on("click", function () {
      // クリックしたタイトル以外のopenクラスを外す(－から＋にする)
      $(".js-accordion-title").not(this).removeClass("open");
      $(".js-accordion-title").not(this).removeClass("close");
      // クリックしたタイトル以外のコンテンツを閉じる
      $(".js-accordion-title").not(this).next().slideUp(300);
      // クリックしたタイトルにopenクラスを付け外しして＋と－を切り替える
      $(this).toggleClass("open");
      $(".js-accordion-title").toggleClass("close");
      // クリックしたタイトルの次の要素(コンテンツ)を開閉
      $(this).next().slideToggle(500);
    });
  });
  /* ========================================= */
});

/* =========================================
 *  Match Height
 * ========================================= */
$(".par-info-list li .step-img img").length && $(".par-info-list li .step-img img").matchHeight();
$(".par-info-list li .ttl").length && $(".par-info-list li .ttl").matchHeight();
/* ========================================= */

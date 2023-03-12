/* =========================================
 *  Typed Initiate
 * ========================================= */
if ($(".typed-text-output").length == 1) {
  var typed_strings = $(".typed-text").text();
  var typed = new Typed(".typed-text-output", {
    strings: typed_strings.split(", "),
    typeSpeed: 100,
    backSpeed: 20,
    smartBackspace: false,
    loop: true,
  });
}

/* =========================================
 *  Skill
 * ========================================= */
$(".skill").waypoint(
  function () {
    $(".progress .progress-bar").each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });
  },
  { offset: "80%" }
);

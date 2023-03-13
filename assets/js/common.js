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

/* =========================================
 *  Menu
 * ========================================= */
const menu = document.querySelector(".menu");
const lineOne = document.querySelector(".line1");
const lineTwo = document.querySelector(".line2");
const lineThree = document.querySelector(".line3");
const Navbar = document.querySelector(".navi-div");
const Body = document.querySelector("body");
const NavItems = Array.from(document.querySelectorAll(".navi li"));
menu.addEventListener("click", function () {
  lineOne.classList.toggle("rotate-left");
  lineTwo.classList.toggle("hide");
  lineThree.classList.toggle("rotate-right");
  Navbar.classList.toggle("sp_menu_open");
  Body.classList.toggle("overflow-hide ");
  $(".wrapper").toggle("active");
});

NavItems.forEach((item) => {
  item.addEventListener("click", function () {
    lineOne.classList.remove("rotate-left");
    lineTwo.classList.remove("hide");
    lineThree.classList.remove("rotate-right");
    Navbar.classList.remove("sp_menu_open");
    Body.classList.remove("overflow-hide ");
    $(".wrapper").remove("active");
  });
});

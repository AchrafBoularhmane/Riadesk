// MOBILE NAVBAR// COOKIES //
var menu = document.getElementById("Menu"),
  Navbar = document.getElementById("menu-overlay"),
  body = document.getElementsByTagName("BODY")[0];
function toggle() {
  menu.classList.toggle("Show-Hamburger-icon");
  Navbar.classList.toggle("Show-Mobile-Menu");
  body.classList.toggle("stop-scrolling");
  cookies.classList.add("close-cookies");
}
function toggleoff() {
  menu.classList.remove("Show-Hamburger-icon");
  Navbar.classList.remove("Show-Mobile-Menu");
  body.classList.remove("stop-scrolling");
  cookies.classList.remove("close-cookies");
}
// HOME IMAGE SLIDER //
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 4000);
// Cookies //
var cookies = document.getElementById("cookie");
function Close() {
  cookies.classList.add("close-cookies");
}
document.getElementById("ok").addEventListener("click", function (event) {
  event.preventDefault();
  cookies.classList.add("close-cookies");
});
document.getElementById("ensavoirplus").addEventListener("click", function (event) {
  cookies.classList.add("close-cookies");
});

// Fixing nav bar on scroll //
var height = $("#about").height();
$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $("#home").removeClass("active");
    $(".backToTop").addClass("top");
    $(".LogoAndNavbar").addClass("fix-navbar");
  } else {
    $("#Accueil").addClass("active");
    $(".backToTop").removeClass("top");
    $(".LogoAndNavbar").removeClass("fix-navbar");
  }
});

// Back to top //
$(document).ready(function () {
  $("#backTop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

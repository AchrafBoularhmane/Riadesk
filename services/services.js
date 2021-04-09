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
var cookies = document.getElementById("Cookie");
function Close() {
  cookies.classList.add("close-cookies");
}
document.getElementById("ok").addEventListener("click", function (event) {
  cookies.classList.add("close-cookies");
});
document.getElementById("ensavoirplus").addEventListener("click", function (event) {
  cookies.classList.add("close-cookies");
});

// Fixing nav bar on scroll //
var height = $("#Home").height();
$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $(".backToTop").addClass("top");
    $(".LogoAndNavbar").addClass("fix-navbar");
  } else {
    $(".backToTop").removeClass("top");
    $(".LogoAndNavbar").removeClass("fix-navbar");
  }
});

// Back to top //
$(document).ready(function () {
  $("#BackTop").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

// doublie check if input is empty //
function checkIfEmpty(input) {
  if (input == "") {
    return false;
  } else return true;
}
// doublie check email adress //
function checkEmail(input) {
  var atpos = input.indexOf("@"),
    dotpos = input.lastIndexOf(".");
  if (atpos < 1 || dotpos - atpos < 2) {
    return false;
  } else return true;
}

/* inscription newsletter double check */
document.querySelector("#newsletter-submit").addEventListener("submit", function (e) {
  e.preventDefault();
  return newsletter();
});
function newsletter() {
  var newsletterinput = $("#user-email").val();
  if (checkEmail(newsletterinput) == false) {
    $(".email-newsletter").addClass("show");
  } else {
    $("#modal-container-NL").addClass("show");
    $("body,html").addClass("stop-scrolling");
    $("#close-NL").click(function () {
      $("#modal-container-NL").removeClass("show");
      $("body,html").removeClass("stop-scrolling");
      $("#newsletter-submit").submit();
      return true;
    });
  }
}
/*animation on scroll*/
var ratio = 0.1;
var options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

var handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

document.documentElement.classList.add("reveal-loaded");

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r);
});
/*100vh mobile*/
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

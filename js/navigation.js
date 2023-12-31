const nav = document.querySelector("#mySidenavMobile");
const navA = document.querySelectorAll(".sidenav a");
nav.style.transition = "1s";

document.querySelector(".nav_mobile .fa-bars").addEventListener(
  "click",
  () => {
    nav.style.width = "100%";
    nav.style.height = "100%";
    nav.style.margin = "0px";
    nav.style.zIndex = "150";
    nav.style.top = "0";
    nav.style.left = "0%";
    nav.style.display = "flex";
    nav.style.transition = "1s";

    setTimeout(() => {
      // nav.style.top = "200px"
      document.querySelector(".nav_mobile .fa-bars").style.display = "none";
      document.querySelector(".nav_mobile .closing").style.display = "block";
      navA.forEach((navA) => {
        navA.style.color = "black";
        navA.style.transition = "1s";
      });
    }, 500);
  },
  1000
);

document.querySelector(".nav_mobile .closing").addEventListener("click", () => {
  document.querySelector(".nav_mobile .fa-bars").style.display = "block";
  document.querySelector(".nav_mobile .closing").style.display = "none";
  nav.style.display = "none";
  navA.forEach((navA) => {
    navA.style.color = "orange";
    navA.style.transition = "1s";
  });
});

//Scroll
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
let header = document.getElementById("nav");
let logo = document.querySelector(".logo");
let icons = document.querySelector(".icons");
let cartCounter = document.querySelector(".fa #cart-count");
let sideNav = document.querySelector("#sideNav");
let uniCategory = document.querySelector("#category");
let heart = document.querySelector(".icons a");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    logo.classList.add("makeWhite");
    heart.classList.add("makeWhite");
    icons.classList.add("newIcons");
    cartCounter.classList.add("cartNumber");
    sideNav.classList.add("fixing");
    uniCategory.classList.add("LeftMargin");
  } else {
    header.classList.remove("sticky");
    logo.classList.remove("makeWhite");
    heart.classList.remove("makeWhite");
    icons.classList.remove("newIcons");
    cartCounter.classList.remove("cartNumber");
    sideNav.classList.remove("fixing");
    uniCategory.classList.remove("LeftMargin");
  }
}

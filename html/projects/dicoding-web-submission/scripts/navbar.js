let navbar = document.querySelector(".navbar");
let isScrolled = false;

window.onscroll = function () {
  if (window.scrollY > 0 && !isScrolled) {
    navbar.style.backgroundColor = "#09142677";
    isScrolled = true;
  } else if (window.scrollY === 0 && isScrolled) {
    navbar.style.backgroundColor = "transparent";
    isScrolled = false;
  }
};

const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const crossIcon = document.querySelector(".cross-icon");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
crossIcon.addEventListener("click", () => {
  navLinks.classList.remove("open");
});

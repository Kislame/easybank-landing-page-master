let menu = document.querySelector(".nav__menu");
let header = document.querySelector(".header");
let nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
  header.classList.toggle("open");
  nav.classList.toggle("scale-up-center");
});

const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  body.classList.toggle("menu-open");
});

const mobileNavLinks = document.querySelectorAll(".mobile-nav__item a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", function () {
    burgerMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
    body.classList.remove("menu-open");
  });
});

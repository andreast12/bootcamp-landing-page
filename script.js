const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarLinks = document.querySelector(".navbar-links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  navbarLinks.classList.toggle("open");
});

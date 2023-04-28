import sal from "sal.js";
import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

// initialize sal.js
sal();

// initialize tiny-slider
const testimonialsSlider = tns({
  container: ".testimonials .slider",
  items: 1,
  slideBy: 1,
  gutter: 30,
  speed: 500,
  loop: false,
  rewind: true,
  mouseDrag: true,
  nav: false,
  prevButton: ".testimonials .prev-btn",
  nextButton: ".testimonials .next-btn",
  responsive: {
    769: {
      items: 3,
    },
  },
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarLinks = document.querySelector("nav .links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  navbarLinks.classList.toggle("open");
});

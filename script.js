const badThings = document.querySelectorAll(".section-1-icons i");
let i = 1;

setInterval(() => {
  i++;

  const icon = document.querySelector(".section-1-icons .change");

  icon.classList.remove("change");

  if (i > badThings.length) {
    badThings[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 2000);

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const icon = document.querySelector(".menu-icon");

const nav = document.querySelector("nav");

icon.onclick = function () {
  nav.classList.toggle("active");
};

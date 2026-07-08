const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));

  dots.forEach((dot) => dot.classList.remove("active"));

  slides[i].classList.add("active");

  dots[i].classList.add("active");
}

document.querySelector(".next").onclick = function () {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  showSlide(index);
};

document.querySelector(".prev").onclick = function () {
  index--;

  if (index < 0) {
    index = slides.length - 1;
  }

  showSlide(index);
};

setInterval(function () {
  index++;

  if (index >= slides.length) {
    index = 0;
  }

  showSlide(index);
}, 5000);

dots.forEach((dot, i) => {
  dot.onclick = function () {
    index = i;

    showSlide(index);
  };
});

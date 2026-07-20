const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;
let autoSlide;
let holdSlide;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

function nextSlide() {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
}

function prevSlide() {
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide(index);
}

// Click một lần
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Tự động chạy
autoSlide = setInterval(nextSlide, 5000);

// Click chấm
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

// =============================
// GIỮ NÚT ĐỂ CHUYỂN LIÊN TỤC
// =============================

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function startNext() {
  clearInterval(holdSlide);
  holdSlide = setInterval(nextSlide, 700); // tốc độ chuyển
}

function startPrev() {
  clearInterval(holdSlide);
  holdSlide = setInterval(prevSlide, 700);
}

function stopSlide() {
  clearInterval(holdSlide);
}

// Chuột
nextBtn.addEventListener("mousedown", startNext);
prevBtn.addEventListener("mousedown", startPrev);

document.addEventListener("mouseup", stopSlide);
document.addEventListener("mouseleave", stopSlide);

// Điện thoại
nextBtn.addEventListener("touchstart", startNext);
prevBtn.addEventListener("touchstart", startPrev);

document.addEventListener("touchend", stopSlide);

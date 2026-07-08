const items = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  items.forEach((item) => {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
});

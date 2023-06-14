export default function slider() {
  const $btnPrev = document.getElementById("btn-previous");
  const $btnNext = document.getElementById("btn-next");

  const slides = document.querySelectorAll(".slider-slide");

  let index = 0;

  document.addEventListener("click", (event) => {
    if (event.target === $btnPrev) {
      event.preventDefault();
      slides[index].classList.remove("active");
      index--;

      if (index < 0) index = slides.length - 1;
      slides[index].classList.add("active");
    }

    if (event.target === $btnNext) {
      event.preventDefault();
      slides[index].classList.remove("active");
      index++;

      if (index > slides.length - 1) index = 0;
      slides[index].classList.add("active");
    }
  });
}

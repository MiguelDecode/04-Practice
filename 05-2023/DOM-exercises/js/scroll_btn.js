export function scrollTopBtn(btn) {
  const $scrollBtn = document.querySelector(btn);

  window.addEventListener("scroll", (event) => {
    let scrollTop = document.documentElement.scrollTop;
    // Set the position where the scroll button is visible.(Px to the top of the page)
    let limitVisible = 300;

    if (scrollTop > limitVisible) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.matches(btn)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}

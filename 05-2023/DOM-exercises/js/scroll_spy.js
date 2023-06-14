export default function scrollSpy() {
  const $sections = document.querySelectorAll("section[data-scroll-spy]");

  const callback = (entries) => {
    // console.log("Entries", entries);

    entries.forEach((entry) => {
      // console.log("Entry", entry);

      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add("active");
      } else {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    threshold: 0.5,
  });
  $sections.forEach((section) => observer.observe(section));
}

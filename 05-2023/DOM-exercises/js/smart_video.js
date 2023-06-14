export default function smartVideo() {
  const $videos = document.querySelectorAll("video[data-smart-video]");

  let options = { threshold: 0.5 };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      window.addEventListener("visibilitychange", (event) =>
        document.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause()
      );
    });
  };

  const observer = new IntersectionObserver(callback, options);

  $videos.forEach((video) => observer.observe(video));
}

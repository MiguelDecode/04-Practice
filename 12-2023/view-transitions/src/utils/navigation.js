const checkIsNavigationSupported = () => Boolean(document.startViewTransition);

const fetchPAge = async (url) => {
  const response = await fetch(url);
  const text = await response.text();

  return text.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];
};

export const startViewTransition = () => {
  if (!checkIsNavigationSupported) return;

  window.navigation.addEventListener("navigate", (event) => {
    const toUrl = new URL(event.destination.url);

    // Review if destination is a outer webpage

    if (location.origin !== toUrl.origin) return;

    event.intercept({
      async handler() {
        const data = await fetchPAge(toUrl.pathname);

        document.startViewTransition(() => {
          document.body.innerHTML = data;

          // Add a top movement to top scroll
          document.documentElement.scrollTop = 0;
        });
      },
    });
  });
};

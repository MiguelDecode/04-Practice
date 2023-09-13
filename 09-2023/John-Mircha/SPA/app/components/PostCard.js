export function PostCard(props) {
  let { date, _embedded, slug, title } = props;
  let dateFormat = new Date(date).toLocaleString();
  let urlPoster = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/favicon.ico";

  document.addEventListener("click", (event) => {
    if (!event.target.matches(".post-card a")) return false;

    localStorage.setItem("slug", event.target.slug);
  });

  return `
  <article class="post-card">
    <img src="${urlPoster}" alt="${title.rendered}" /> 
    <h2>${title.rendered}</h2>
    <p>
      <time datetime="${date}">${dateFormat}</time> 
      <a href="#/${slug}">Ver Publicación</a>
    </p>
  </article> 
  `;
}

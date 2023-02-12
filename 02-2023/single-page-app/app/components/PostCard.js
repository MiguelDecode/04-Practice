export function PostCard(props) {
  let { title, date, slug, _embedded } = props;
  let urlPoster = _embedded["wp:featuredmedia"][0].source_url
    ? _embedded["wp:featuredmedia"][0].source_url
    : "./app/assets/favicon.png";

  return `
  <article class='post-card'>
    <img src='${urlPoster}' alt='${title.rendered}'>
    <h2>${title.rendered}</h2>
    <p>
      <time datetime='${date}'>${new Date(date).toLocaleString()}</time>
      <a href='#/${slug}'>Ver Publicación</a>
    </p>
  </article>
  `;
}

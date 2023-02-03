const $site = document.getElementById("site");
const $posts = document.getElementById("posts");
const $loader = document.querySelector(".loader");
const $template = document.getElementById("post-template").content;
const $fragment = document.createDocumentFragment();
const DOMAIN = "https://malvestida.com";
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
const POSTS = `${API_WP}/posts?_embed`;
const PAGES = `${API_WP}/pages`;
const CATEGORIES = `${API_WP}/categories`;

let page = 1;
let perPage = 5;

function getSiteData() {
  fetch(SITE)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      $site.innerHTML = `
      <h3>Sitio Web</h3>
      <h2>
        <a href="${json.home}" target="_blank">${json.name}</a>
      </h2>
      <p>${json.description}</p>
      <p>${json.timezone_string}</p>
      `;
      $loader.style.display = "none";
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $site.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      $loader.style.display = "none";
    });
}

function getPosts() {
  $loader.style.display = "block";

  fetch(`${POSTS}&page=${page}&per_page=${perPage}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      // console.log(json);

      json.forEach((el) => {
        let categories = "";
        let tags = "";

        el._embedded["wp:term"][0].forEach(
          (el) => (categories += `<li>${el.name}</li>`)
        );
        el._embedded["wp:term"][1].forEach(
          (el) => (tags += `<li>${el.name}</li>`)
        );

        $template.querySelector(".post-image").src = el._embedded[
          "wp:featuredmedia"
        ]
          ? el._embedded["wp:featuredmedia"][0].source_url
          : "";

        $template.querySelector(".post-image").alt =
          el._embedded["wp:featuredmedia"][0].alt_text;

        $template.querySelector(".post-title").innerHTML = el.title.rendered;

        $template.querySelector(".post-date").innerHTML = new Date(
          el.date
        ).toLocaleDateString();

        $template.querySelector(".post-link").href = el.link;

        $template.querySelector(".post-excerpt").innerHTML =
          el.excerpt.rendered.replace("[&hellip;]", "...");

        $template.querySelector(".post-categories").innerHTML = `
        <p>Categorías:</p>
        <ul>${categories}</ul>`;

        $template.querySelector(".post-tags").innerHTML = `
        <p>Etiquetas</p>
        <ul>${tags}</ul>`;

        $template.querySelector(".post-content > article").innerHTML =
          el.content.rendered;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $posts.appendChild($fragment);

      $loader.style.display = "none";
    })
    .catch((err) => {
      // console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $posts.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      $loader.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
  getSiteData();
  getPosts();
});

window.addEventListener("scroll", (event) => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  // console.log(scrollTop, clientHeight, scrollHeight);

  if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
    console.log("Cargar mas posts");
    page++;
    getPosts();
  }
});

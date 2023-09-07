const $site = document.getElementById("site");
const $posts = document.getElementById("posts");
const $loader = document.querySelector(".loader");
const $template = document.getElementById("post-template").content;
const $fragment = document.createDocumentFragment();

const DOMAIN = "https://malvestida.com";
const SITE = `${DOMAIN}/wp-json`;
const VERSION = `${SITE}/wp/v2`;
const POSTS = `${VERSION}/posts?_embed`;
const PAGES = `${VERSION}/pages`;
const CATEGORIES = `${VERSION}/categories`;

function getSiteData() {
  fetch(SITE)
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => {
      // console.log(json)
      $site.innerHTML = `
     <h3>Sitio Web</h3>
      <h2>
        <a href="${json.url}" target="_blank">${json.name}</a>
      </h2> 
      <p>${json.description || "No cuenta con descripción"}</p>
      <p>${json.timezone_string}</p>
      `;
    })
    .catch((err) => {
      console.log(err);
      let msg = err.statusText || "Ocurrió un error";
      $site.innerHTML = `<p>Error ${err.status}: ${msg}</p>`;
    });
}

function getPosts() {
  $loader.style.display = "block";
  fetch(POSTS)
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => {
      console.log(json);

      json.forEach((el) => {
        $template.querySelector('.post-image').src = el._embedded["wp:featuredmedia"][0].source_url;
        $template.querySelector(".post-image").alt = el.title.rendered;
        $template.querySelector(".post-title").textContent = el.title.rendered;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
      });

      $posts.appendChild($fragment);
      $loader.style.display = "none";
    })
    .catch((err) => {
      console.log(err);
      let msg = err.statusText || "Ocurrió un error";
      $posts.innerHTML = `<p>Error ${err.status}: ${msg}</p>`;
      $loader.style.display = "none";
    });
}

document.addEventListener("DOMContentLoaded", (event) => {
  getSiteData();
  getPosts();
});

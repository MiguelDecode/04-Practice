import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";

export function Router() {
  let { hash } = location;
  const $posts = document.getElementById("posts");

  console.log(hash);

  $posts.innerHTML = null;

  if (!hash || hash === "#/") {
    ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts);
        let html = "";

        posts.forEach((post) => (html += PostCard(post)));
        document.querySelector(".loader").style.display = "none";
        $posts.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    $posts.innerHTML = "<h2>Sección del Buscador</h2>";
  } else if (hash === "#/contact") {
    $posts.innerHTML = "<h2>Sección del Contacto</h2>";
  } else {
    $posts.innerHTML =
      "<h2>Aquí cargará el contenido del Post previamente seleccionado</h2>";
  }

  ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {
      // console.log(posts);
      let html = "";

      posts.forEach((post) => (html += PostCard(post)));
      document.querySelector(".loader").style.display = "none";
      document.getElementById("posts").innerHTML = html;
    },
  });
}

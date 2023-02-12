import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";

export async function Router() {
  let { hash } = location;
  const $main = document.getElementById("main");

  // console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts);
        let html = "";

        posts.forEach((post) => (html += PostCard(post)));
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    $main.innerHTML = "<h2>Sección del Buscador</h2>";

    await ajax({
      url: `${api.SEARCH}${hash.slice(22)}`,
      cbSuccess: (search) => {
        $main.innerHTML = "";
        const $list = document.createElement("ul");

        search.forEach((result) => {
          const $link = document.createElement("li");

          $link.innerHTML = `<a href='${result.url}'>${result.title}</a>`;

          $list.appendChild($link);
        });

        $main.appendChild($list);
      },
    });
  } else if (hash === "#/contact") {
    $main.appendChild(ContactForm());
  } else {
    $main.innerHTML =
      "<h2>Aquí cargará el contenido del Post previamente seleccionado</h2>";

    await ajax({
      url: `${api.POST}?slug=${hash.slice(2)}`,
      cbSuccess: (post) => {
        // console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }

  document.querySelector(".loader").style.display = "none";
}

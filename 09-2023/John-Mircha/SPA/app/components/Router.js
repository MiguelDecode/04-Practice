import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
  let { hash } = location;

  const mainElement = document.getElementById("main");
  mainElement.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        mainElement.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    const searchQuery = window.location.hash.slice(16);
    if (!searchQuery) {
      document.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${searchQuery}`,
      cbSuccess: (search) => {
        console.log(search);

        let html = "";
        if (search.length === 0) {
          html = `<p class="error">No existen resultados para tu búsqueda</p>`;
        } else {
          search.forEach((post) => (html += SearchCard(post)));
        }

        mainElement.innerHTML = html;
      },
    });
  } else if (hash.includes("#/contact")) {
    mainElement.appendChild(ContactForm());
  } else {
    const slug = window.location.hash.slice(2);
    await ajax({
      url: `${api.SLUG}${slug}`,
      cbSuccess: (post) => {
        mainElement.innerHTML = Post(post);
      },
    });
  }

  document.querySelector(".loader").style.display = "none";
}

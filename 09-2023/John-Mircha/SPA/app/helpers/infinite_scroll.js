import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export async function InfiniteScroll() {
  let searchQuery = window.location.hash.slice(16);
  let apiUrl;
  let Component; // High Order Component

  window.addEventListener("scroll", async (event) => {
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    let { hash } = window.location;

    if (scrollTop + clientHeight >= scrollHeight) {
      api.page++;

      if (!hash || hash === "#/") {
        apiUrl = `${api.POSTS}&page=${api.page}`;
        Component = PostCard;
      } else if (hash.includes("#/search")) {
        apiUrl = `${api.SEARCH}${searchQuery}&page=${api.page}`;
        Component = SearchCard;
      } else {
        return false;
      }

      document.querySelector(".loader").style.display = "block";

      await ajax({
        url: apiUrl,
        cbSuccess: (posts) => {
          console.log(posts);
          let html = "";
          posts.forEach((post) => (html += Component(post)));
          document.getElementById("main").insertAdjacentHTML("beforeend", html);
          document.querySelector(".loader").style.display = "none";
        },
      });
    }
  });
}

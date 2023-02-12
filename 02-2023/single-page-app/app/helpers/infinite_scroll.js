import { PostCard } from "../components/PostCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export async function InfiniteScroll() {
  window.addEventListener("scroll", async (event) => {
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
      console.log("Final de posts");
      api.page++;

      console.log(api.page);

      document.querySelector(".loader").style.display = "block";

      await ajax({
        url: `${api.POSTS}&page=${api.page}`,
        cbSuccess: (posts) => {
          let html = "";

          posts.forEach((post) => (html += PostCard(post)));
          document.getElementById("main").insertAdjacentHTML("beforeend", html);
        },
      });

      document.querySelector(".loader").style.display = "none";
    }
  });
}

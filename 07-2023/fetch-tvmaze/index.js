const $showsContainer = document.getElementById("shows");
const $template = document.getElementById("show-template").content;
const $fragment = document.createDocumentFragment();

document.addEventListener("keyup", async (event) => {
  if (event.target.matches("#search") && event.key === "Enter") {
    try {
      $showsContainer.innerHTML = `<img class="loader" src="./assets/loader.gif" alt="Cargando...">`;

      let query = event.target.value.toLowerCase().trim();
      const url = `http://api.tvmaze.com/search/shows?q=${query}`;

      let res = await fetch(url);
      let json = await res.json();

      console.log(query);
      console.log(json);
      console.log(!res.ok);
      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      if (json.length === 0) {
        $showsContainer.innerHTML = `<h2>No existen resultados de shows para el críterio de búsqueda: <mark>${query}</mark></h2>`;
      } else {
        json.forEach((el) => {
          $template.querySelector("h3").textContent = el.show.name;
          $template.querySelector("div").innerHTML =
            el.show.summary || `Sin descripción`;
          $template.querySelector("img").src =
            el.show.image?.medium ||
            "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
          $template.querySelector("img").alt = el.show.name;
          $template.querySelector("a").href = el.show.url || "#";
          $template.querySelector("a").textContent = "ver más";

          let $clone = document.importNode($template, true);
          $fragment.appendChild($clone);
        });

        $showsContainer.innerHTML = "";
        $showsContainer.appendChild($fragment);
      }
    } catch (err) {
      console.log(err);
      let msg = err.statusText || "Ocurrió un error";
      $showsContainer.innerHTML = `<p>Error ${err.status}: ${msg}</p>`;
    }
  }
});

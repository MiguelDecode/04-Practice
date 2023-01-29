const $shows = document.getElementById("shows");
const $template = document.getElementById("show-template").content;
const $fragment = document.createDocumentFragment();

document.addEventListener("keypress", async (event) => {
  if (event.target.matches("#search")) {
    // console.log(event.key);
    if (event.key === "Enter") {
      try {
        $shows.innerHTML = `<img class='loader' src='./assets/loader.svg' alt='Cargando'>`;

        let query = event.target.value.toLowerCase();
        let api = `http://api.tvmaze.com/search/shows?q=${query}`;
        let res = await fetch(api);
        let json = await res.json();

        console.log(res, json);

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        if (json.length === 0) {
          $shows.innerHTML = `<h2>No existen resultados de shows para el criterio de búsqueda: <mark>${query}</mark></h2>`;
        } else {
          json.forEach((el) => {
            $template.querySelector("h3").textContent = el.show.name;
            $template.querySelector("div").innerHTML = el.show.summary
              ? el.show.summary
              : "No tiene descripción";
            $template.querySelector("img").src = el.show.image
              ? el.show.image.medium
              : "http://static.tvmaze.com/images/no-img/no-img-protrait-text.png";
            $template.querySelector("img").alt = el.show.name;
            $template.querySelector("img").style.maxWidth = "100%";
            $template.querySelector("a").href = el.show.url ? el.show.url : "#";
            $template.querySelector("a").target = el.show.url
              ? "_blank"
              : "_self";
            $template.querySelector("a").textContent = el.show.url
              ? "ver más..."
              : "";

            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
          });

          $shows.innerHTML = "";
          $shows.appendChild($fragment);
        }
      } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrió un error";
        $shows.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      }
    }
  }
});

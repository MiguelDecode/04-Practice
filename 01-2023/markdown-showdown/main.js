const $main = document.querySelector("main");

fetch("blog.md")
  .then((response) =>
    response.ok ? response.text() : Promise.reject(response)
  )
  .then((text) => {
    // console.log(text);
    $main.innerHTML = new showdown.Converter().makeHtml(text);
  })
  .catch((err) => {
    console.log(err);
    let message = err.statusText || "Ocurrió un error";
    $main.innerHTML = `Error ${err.status}: ${message}`;
  });

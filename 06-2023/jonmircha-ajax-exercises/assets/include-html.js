document.addEventListener("DOMContentLoaded", (event) => {
  const includeHTML = (el, url) => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (event) => {
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status <= 299) {
        el.outerHTML = xhr.responseText;
      } else {
        let msg =
          xhr.statusText ||
          "Error al cargar el archivo, verifica que estes haciendo la petición pro http o https.";
        el.outerHTML = `<div><p>Error ${xhr.statuts}: ${msg}</p></div>`;
      }
    });

    xhr.open("GET", url);

    xhr.setRequestHeader("Content-Type", "text/html; charset=utf-8");

    xhr.send();
  };

  document
    .querySelectorAll("[data-include]")
    .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
});

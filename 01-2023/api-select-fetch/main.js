const $selectPrimary = document.getElementById("select-primary");
const $selectSecondary = document.getElementById("select-secondary");

// Función para buscar los estados
function loadStates() {
  fetch("https://api.copomex.com/query/get_estados?token=pruebas")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      let $options = `<option value="">Elige un estado</option>`;
      json.response.estado.forEach(
        (el) => ($options += `<option value="${el}">${el}</option>`)
      );
      $selectPrimary.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
    });
}

document.addEventListener("DOMContentLoaded", loadStates());

// Función para buscar los municipios
function loadTowns(state) {
  fetch(
    `https://api.copomex.com/query/get_municipio_por_estado/${state}?token=pruebas`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      let $options = `<option value="">Elige un municipio</option>`;
      json.response.municipios.forEach(
        (el) => ($options += `<option value="${el}">${el}</option>`)
      );
      $selectSecondary.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
    });
}

$selectPrimary.addEventListener("change", (event) =>
  loadTowns(event.target.value)
);

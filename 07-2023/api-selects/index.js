const $selectPrimary = document.getElementById("select-primary");
const $selectSecondary = document.getElementById("select-secondary");
const $selectTertiary = document.getElementById("select-tertiary");

function loadStates() {
  fetch("https://api.copomex.com/query/get_estados?token=pruebas")
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => {
      const data = json.response.estado;
      console.log(data);

      let $options = `<option value="default">Elige un estado</option>`;

      data.forEach((state) => {
        $options += `<option value="${state}">${state}</option>`;
      });

      $selectPrimary.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let msg = err.statusText || "Ocurrió un error";
      $selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${msg}`;
    });
}

function loadTowns(state) {
  fetch(
    "https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=pruebas"
  )
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => {
      const data = json.response.municipios;
      console.log(data);

      let $options = `<option value="default">Elige un municipio</option>`;

      data.forEach((town) => {
        $options += `<option value="${town}">${town}</option>`;
      });

      $selectSecondary.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let msg = err.statusText || "Ocurrió un error";
      $selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${msg}`;
    });
}

function loadDistrict(district) {
  fetch(
    "https://api.copomex.com/query/get_colonia_por_municipio/Xochimilco?token=pruebas"
  )
    .then((res) => (res.ok ? res.json() : Promise.reject()))
    .then((json) => {
      const data = json.response.colonia;
      console.log(data);

      let $options = `<option value="default">Elige una colonia</option>`;

      data.forEach((district) => {
        $options += `<option value="${district}">${district}</option>`;
      });

      $selectTertiary.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let msg = err.statusText || "Ocurrió un error";
      $selectTertiary.nextElementSibling.innerHTML = `Error ${err.status}: ${msg}`;
    });
}

document.addEventListener("DOMContentLoaded", loadStates);

$selectPrimary.addEventListener("change", (event) => {
  loadTowns(event.target.value);
});

$selectSecondary.addEventListener("change", (event) => {
  loadDistrict(event.target.value);
});

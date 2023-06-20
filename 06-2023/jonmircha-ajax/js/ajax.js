(() => {
  // Instanciar el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");
  const $fragment = document.createDocumentFragment();
  const url = "https://jsonplaceholder.typicode.com/users";
  const localUrl = "../js/data.json";

  // Asignar el o los eventos que vayamos a utilizar
  xhr.addEventListener("readystatechange", (event) => {
    if (xhr.readyState !== 4) return;

    // console.log(xhr);

    if (xhr.status >= 200 && xhr.status <= 299) {
      let json = JSON.parse(xhr.responseText);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      let msg = xhr.statusText || "Ocurrío un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${msg}`;
    }
  });

  // Abrir la petición con el método y la url
  xhr.open("GET", localUrl);

  // Enviar la petición
  xhr.send();
})();

(() => {
  const $fetch = document.getElementById("fetch");
  const $fragment = document.createDocumentFragment();
  const url = "https://jsonplaceholder.typicode.com/users";
  const localUrl = "../js/data.json";

  fetch(localUrl)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      // console.log(err);
      let msg = err.statusText || "Ocurrío un error";
      $fetch.innerHTML = `Error: ${err.status} ${msg}`;
    });
  // .finally(console.log("Texto del finally"));
})();

(() => {
  const $fetchAsync = document.getElementById("fetch-async");
  const $fragment = document.createDocumentFragment();
  const url = "https://jsonplaceholder.typicode.com/users";
  const localUrl = "../js/data.json";

  async function getData() {
    try {
      let res = await fetch(url);
      let json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetchAsync.appendChild($fragment);
    } catch (err) {
      // console.log("Estoy en el catch", err);
      let msg = err.statusText || "Ocurrío un error";
      $fetchAsync.innerHTML = `Error: ${err.status} ${msg}`;
    } finally {
      // console.log("Texto del finally del Async");
    }
  }

  getData();
})();

(() => {
  const $axios = document.getElementById("axios");
  const $fragment = document.createDocumentFragment();
  const url = "https://jsonplaceholder.typicode.com/users";
  const localUrl = "../js/data.json";

  axios
    .get(localUrl)
    .then((res) => {
      res.data.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $axios.appendChild($fragment);
    })
    .catch((err) => {
      // console.log(err.response);
      let msg = err.response.statusText || "Ocurrío un error";
      $axios.innerHTML = `Error: ${err.response.status} ${msg}`;
    });
  // .finally(console.log("Texto del finally de Axios"));
})();

(() => {
  const $axiosAsync = document.getElementById("axios-async");
  const $fragment = document.createDocumentFragment();
  const url = "https://jsonplaceholder.typicode.com/users";
  const localUrl = "../js/data.json";

  async function getData() {
    try {
      let res = await axios.get(localUrl);

      res.data.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $axiosAsync.appendChild($fragment);
    } catch (err) {
      // console.log(err.response);
      let msg = err.response.statusText || "Ocurrío un error";
      $axiosAsync.innerHTML = `Error: ${err.response.status} ${msg}`;
    } finally {
      console.log("Texto del finally dentro del Axios con Async");
    }
  }

  getData();
})();


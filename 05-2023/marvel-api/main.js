const input = document.getElementById("search");
const btnSearch = document.getElementById("submit");
const form = document.getElementById("form");
const resultContainer = document.getElementById("card");
const listContainer = document.getElementById("list");

// let date = new Date();
// console.log(date.getTime());

const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

form.addEventListener("submit", (event) => event.preventDefault());

const removeResult = () => (resultContainer.innerHTML = "");

const cleanList = () => {
  listContainer.innerHTML = "";
  listContainer.classList.add("hidden");
};

input.addEventListener("keyup", event => {
  removeResult();

  if (input.value.length < 4) return;

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${input.value}`;

  const fragment = document.createDocumentFragment();

  fetch(url)
    .then((data) => data.json())
    .then((json) => {
      json.data.results.forEach((result) => {
        const li = document.createElement("li");
        li.textContent = result.name;
        fragment.appendChild(li);
      });
      listContainer.appendChild(fragment);
    });

    if(event.key === 'Enter') cleanList();

});

const callData = () => {
  if (input.value.trim().length < 1) return alert("Input can't be blank");

  removeResult();

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

  fetch(url)
    .then((data) => data.json())
    .then((json) => {
      console.log(json.data.results);
      json.data.results.forEach((result) => {
        resultContainer.innerHTML = `
            <img class="card__image" src="${
              result.thumbnail.path + "." + result.thumbnail.extension
            }"/>
            <h2 class="card__name">${result.name}</h2>
            <p class="card__description">${result.description}</p>
        `;
      });
    });
};

btnSearch.addEventListener("click", () => {
  cleanList();
  callData();
});



document.addEventListener("DOMContentLoaded", callData);

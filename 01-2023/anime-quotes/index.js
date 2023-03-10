const $main = document.querySelector(".card");

fetch("https://animechan.vercel.app/api/random")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    $main.innerHTML = `
    <h1 class="card__anime">${data.anime}</h1>
    <h2 class="card__character">${data.character}</h2>
    <blockquote class="card__quote">"${data.quote}"</blockquote>
    `;
  })
  .catch();

const showDog = document.getElementById("showDog");
const url = "https://dog.ceo/api/breeds/image/random";
const jumpBtn = document.getElementById("jumpDog");
const likeBtn = document.getElementById("like");
const dislikeBtn = document.getElementById("dislike");
const spinner = document.getElementById("spinner");
const likedDogs = document.getElementById("liked-dogs");
const dislikedDogs = document.getElementById("disliked-dogs");

likedDogs.classList.add("hidden");
dislikedDogs.classList.add("hidden");

spinner.classList.add("hidden");

document.addEventListener("click", (event) => {
  if (event.target === jumpBtn) newDog();

  if (event.target === likeBtn) {
    addDogs("pretty");
  }

  if (event.target === dislikeBtn) {
    addDogs("ugly");
  }
});

showDog.addEventListener("load", () => {
  spinner.classList.toggle("hidden", true);
  showDog.classList.toggle("hidden", false);
});

async function newDog() {
  const res = await fetch(url);
  const resJson = await res.json();

  showDog.src = resJson.message;
  showDog.classList.toggle("hidden", true);
  spinner.classList.toggle("hidden", false);
}

function addDogs(where) {
  const newImage = document.createElement("img");
  newImage.src = showDog.src;
  if (where === "pretty") {
    likedDogs.appendChild(newImage);
    newDog();
    likedDogs.classList.remove("hidden");
  }

  if (where === "ugly") {
    dislikedDogs.appendChild(newImage);
    newDog();
    dislikedDogs.classList.remove("hidden");
  }
}

newDog();

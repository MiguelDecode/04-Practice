const $input = document.getElementById("name");
const $btn = document.getElementById("btn");
const $result = document.getElementById("result");

let arr = [];
const reyesGodos = [
  "Ervigio",
  "Ataulfo",
  "Atanagildo",
  "Leovigildo",
  "Recesvinto",
  "Sisebuto",
  "Teodorico",
];

const capitalize = (name) => {
  name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  return name.trim();
};

const reset = () => {
  $input.value = "";
  $input.focus();
};

const addName = () => {
  if (!$input.value) return false;

  const name = capitalize($input.value);

  if (arr.includes(name)) {
    reset();
  } else {
    arr.push(name);

    if (reyesGodos.includes(name)) {
      $result.insertAdjacentHTML(
        "beforeend",
        `<div class='king'>
        <p>${name}</p>
        <img src='https://www.html6.es/rey_${name.toLowerCase()}.png'>
      </div>`
      );
    } else {
      $result.insertAdjacentHTML(
        "beforeend",
        `<div class='king'>
        <p>${name}</p>
        <img src='https://www.html6.es/rey_desconocido.png'>
      </div>`
      );
    }
    
    reset();
  }
};

$btn.addEventListener("click", addName);

$input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") addName();
});

$result.addEventListener("click", (event) => {
  const kings = document.querySelectorAll(".king");

  kings.forEach((king, index) => {
    if (event.target === king) {
      arr.splice(index, 1);
      event.target.remove();
    }
  });
});

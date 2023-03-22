const $body = document.querySelector("body");

const $input = document.createElement("input");
$input.type = "text";

const $button = document.createElement("button");
$button.textContent = "Botón 1";

const $div = document.createElement("div");

$body.appendChild($input);
$body.appendChild($button);
$body.appendChild($div);

$button.addEventListener("click", () => {
  const name = $input.value.toLowerCase();

  if (name === "miguel") {
    let capitalize = name.slice(0, 1).toUpperCase() + name.slice(1);
    $div.innerHTML = `Hola ${capitalize}`;

    const $link = document.createElement("a");
    $link.href = "https://www.google.es";
    $link.textContent = "Ir a la web";

    $div.appendChild($link)
  } else {
    $input.value = "";
    $div.innerHTML = "";
    $input.focus();
  }
});

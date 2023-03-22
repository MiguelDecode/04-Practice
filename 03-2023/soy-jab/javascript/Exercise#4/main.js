const $result = document.getElementById("result");
const $num1 = document.getElementById("num1");
const $num2 = document.getElementById("num2");
const $btn = document.getElementById("btn");
const $body = document.querySelector("body");

const randomNumber = () => Math.floor(Math.random() * 10);

$num1.value = randomNumber();
$num2.value = randomNumber();

$btn.addEventListener("click", () => {
  let result = Number($result.value);
  let total = Number($num1.value) + Number($num2.value);
  console.log(result, total);
  if (result === total) {
    alert("El resultado es correcto");
  } else {
    alert("El resultado no es correcto");
  }

  $num1.value = randomNumber();
  $num2.value = randomNumber();
  $result.value = "";
});

$result.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    let result = Number($result.value);
    let total = Number($num1.value) + Number($num2.value);
    console.log(result, total);
    const title = document.createElement("h2");
    if (result === total) {
      title.innerHTML = `El resultado es correcto ${$num1.value} + ${$num2.value} = ${total}`;
      $body.insertAdjacentElement("beforeend", title);
    } else {
      title.innerHTML = `El resultado no es correcto ${$num1.value} + ${$num2.value} =/= ${result}`;
      $body.insertAdjacentElement("beforeend", title);

      $num1.value = randomNumber();
      $num2.value = randomNumber();
      $result.value = "";
    }
  }
});

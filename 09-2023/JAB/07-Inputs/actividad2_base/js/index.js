const inputPrice = document.getElementById("precio");
const inputDiscount = document.getElementById("descuento");
const inputTotal = document.getElementById("total");

let discount = 0.01;

const calculate = () => {
  if (!inputPrice.value) {
    inputDiscount.value = "";
    inputTotal.value = "";
    return;
  }
  let price = Number(inputPrice.value);
  inputDiscount.value = Number((price * discount).toFixed(2));
  inputTotal.value = `${Number(price.toFixed(2))} - ${Number(
    (price * discount).toFixed(2)
  )} = ${Number((price - price * discount).toFixed(2))}€`;
};

document.addEventListener("click", (event) => {
  if (event.target.matches("select")) {
    let optionValue = event.target.value;
    discount = Number(optionValue.slice(0, -1) / 100);
    calculate();
  }
});

inputPrice.addEventListener("keyup", (event) => {
  calculate();
});

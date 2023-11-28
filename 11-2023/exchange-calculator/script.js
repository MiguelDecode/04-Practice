const currencyElementOne = document.getElementById("currency-one");
const amountElementOne = document.getElementById("amount-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountElementTwo = document.getElementById("amount-two");
const rateElement = document.getElementById("rate");
const swapBtn = document.getElementById("swap");

const calculate = () => {
  const url = "https://open.exchangerate-api.com/v6/latest";
  const currencyOne = currencyElementOne.value;
  const currencyTwo = currencyElementTwo.value;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const rate = data.rates[currencyTwo] / data.rates[currencyOne];
      rateElement.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
      amountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
    })
    .catch((err) => console.log(err));
};

const swapCurrencies = () => {
  const temp = currencyElementOne.value;
  currencyElementOne.value = currencyElementTwo.value;
  currencyElementTwo.value = temp;
};

// Event Listeners
currencyElementOne.addEventListener("change", calculate);
amountElementOne.addEventListener("input", calculate);
currencyElementTwo.addEventListener("change", calculate);
amountElementTwo.addEventListener("input", calculate);

swapBtn.addEventListener("click", () => {
  swapCurrencies();
  calculate();
});

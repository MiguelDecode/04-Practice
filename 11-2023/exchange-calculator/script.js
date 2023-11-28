const currencyElementOne = document.getElementById("currency-one");
const amountElementOne = document.getElementById("amount-one");
const currencyElementTwo = document.getElementById("currency-two");
const amountElementTwo = document.getElementById("amount-two");
const rateElement = document.getElementById("rate");
const swapBtn = document.getElementById("swap");

const url = "https://open.exchangerate-api.com/v6/latest";

const createOptions = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const options = Object.keys(data.rates);
      options.forEach((el) => {
        const option = document.createElement("option");
        option.textContent = el;
        option.value = el;
        if(el === 'USD') option.setAttribute('selected', 'selected')
        currencyElementOne.appendChild(option);
      });
      options.forEach((el) => {
        const option = document.createElement("option");
        option.textContent = el;
        option.value = el;
        if (el === "EUR") option.setAttribute("selected", "selected");
        currencyElementTwo.appendChild(option);
      });
    })
    .catch((err) => console.log(err));
};

const calculate = () => {
  const currencyOne = currencyElementOne.value;
  const currencyTwo = currencyElementTwo.value;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.rates);
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
document.addEventListener("DOMContentLoaded", createOptions);

currencyElementOne.addEventListener("change", calculate);
amountElementOne.addEventListener("input", calculate);
currencyElementTwo.addEventListener("change", calculate);
amountElementTwo.addEventListener("input", calculate);

swapBtn.addEventListener("click", () => {
  swapCurrencies();
  calculate();
});

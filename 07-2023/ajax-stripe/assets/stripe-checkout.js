import STRIPE_KEYS from "./stripe-keys.js";

const $tacos = document.getElementById("tacos");
const $template = document.getElementById("taco-template").content;
const $fragment = document.createDocumentFragment();

const fetchOptions = {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
};

const moneyFormat = (num) => `$${num.slice(0, -2)},${num.slice(-2)}`;

let prices, products;

// No importa que respuesta se resuelva antes se mostrarán por orden de llamada.
Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    products = json[0].data;
    prices = json[1].data;

    // console.log(products);
    // console.log(prices);

    prices.forEach((el) => {
      let productData = products.filter((product) => product.id === el.product);

      $template.querySelector(".taco").setAttribute("data-price", el.id);
      $template.querySelector("img").src = `${productData[0].images[0]}`;
      $template.querySelector("img").alt = `${productData[0].name}`;
      $template.querySelector("figcaption").innerHTML = `
      ${productData[0].name}
      <br>
      ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
      `;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });

    $tacos.appendChild($fragment);
  })
  .catch((err) => {
    console.log(err);
    let msg =
      err.statusText || "Ocurrió un error al conectarse con la API de Stripe";
    $tacos.innerHTML = `<p>Errro ${err.status}: ${msg}</p>`;
  });

document.addEventListener("click", (event) => {
  if (event.target.matches(".taco *")) {
    let priceId = event.target.parentElement.getAttribute("data-price");

    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        mode: "subscription",
        successUrl:
          "http://127.0.0.1:5500/stripe-checkout.html/assets/stripe-succes.html",
        cancelUrl:
          "http://127.0.0.1:5500/stripe-checkout.html/assets/stripe-cancel.html",
      })
      .then((res) => {
        if (res.error) {
          console.log(res);
          $tacos.insertAdjacentHTML("afterend", res.error.message);
        }
      })
      .catch((err) => {});
  }
});

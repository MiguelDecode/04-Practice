import STRIPE_KEYS from "./stripe-keys.js";

const $tacos = document.getElementById("tacos");
const $template = document.getElementById("taco-template").content;
const $fragment = document.createDocumentFragment();
const fetchOptions = {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.private}`,
  },
};
let prices, products;

const moneyFormat = (num) => `${num.slice(0, -2)}.${num.slice(-2)}`;

// Se aconseja agrupar las peticiones, además el promise all respeta el orden de los fetch a la hora de mostrar los resultados.
Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    // console.log(json);
    products = json[0].data;
    prices = json[1].data;
    console.log(products, prices);

    prices.forEach((el) => {
      let productData = products.filter((product) => product.id === el.product);
      console.log(productData);

      $template.querySelector(".taco").setAttribute("data-price", el.id);
      $template.querySelector("img").src = productData[0].images[0];
      $template.querySelector("img").alt = productData[0].name;
      $template.querySelector("figcaption").innerHTML = `${
        productData[0].name
      }<br>${moneyFormat(el.unit_amount_decimal)} ${el.currency}`;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $tacos.appendChild($fragment);
  })
  .catch((err) => {
    let message =
      err.statusText || "Ocurrió un error al conectarse con la API de Stripe";
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    console.log(err);
  });

document.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target.matches(".taco *")) {
    let price = event.target.parentElement.getAttribute("data-price");
    // console.log(price);

    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems: [
          {
            price,
            quantity: 1,
          },
        ],
        mode: "subscription",
        successUrl:
          "https://www.deepl.com/es/translator/q/es/pago+efectuado/en/payment+made/c08a3283",
        cancelUrl:
          "https://www.deepl.com/es/translator/q/es/pago+cancelado/en/payment+made/c08a3283",
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          $tacos.insertAdjacentHTML("afterend", res.error.message);
        }
      });
  }
});

// Petición de los productos
/* fetch("https://api.stripe.com/v1/products", fetchOptions)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  }); */

// Petición de los precios
/* fetch("https://api.stripe.com/v1/prices", fetchOptions)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((json) => {
    console.log(json);
  }); */

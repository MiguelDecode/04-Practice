let usuario = "Jab";
// let productoComprado = 1;
const DESCUENTO = 0.1;
// let precioDescuento;
const PRODUCTOS = [
  {
    producto: "Pantalón",
    precio: 10,
    talla: "m",
    imagen: "pantalon.jpg",
  },
  {
    producto: "Gorra",
    precio: 5,
    talla: "s",
    imagen: "gorra.jpg",
  },
];

const drawProducts = () => {
  const $main = document.querySelector("main");

  PRODUCTOS.forEach((el) => {
    let product = el;
    let card = document.createElement("article");
    card.innerHTML = `
    <h1>${usuario}</h1>
    <section class="caja">
      <div>
        ${product.producto}
        (${product.precio} €)
      </div>
      <p>Descuento: ${DESCUENTO}€</p>
      <p><strong>Precio final: ${
        product.precio - product.precio * DESCUENTO
      }€</strong></p>
      <div>
        Talla: ${product.talla}
      </div>
      <img src="img/${product.imagen}" alt="${product.producto}">
    </section>

`;

    $main.appendChild(card);
  });
};

drawProducts();

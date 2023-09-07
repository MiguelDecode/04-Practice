let usuario = "Jab";
let productoComprado = 0;
const DESCUENTO = 0.1;
let precioDescuento;
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

const { producto, precio, talla, imagen } = PRODUCTOS[productoComprado];

document.querySelector("body").innerHTML = `
 <h1>Miguel Decode</h1>
    <section class="caja">
      <div>
      <p>${producto} (${precio}€)</p>
      <p>Descuento: ${DESCUENTO * 100}%</p>
      <p><strong>Precio final: ${precio - (precio * DESCUENTO)}€</strong></p>
      </div>
      <div>
        Talla: ${talla.toUpperCase()}
      </div>
      <img src="./img/${imagen}" alt="${producto}">
    </section>
`;

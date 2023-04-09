const PRODUCTOS = [
  {
    id: 11,
    nombre: "Butifarra con judías",
    precio: 12,
    imagen: "butifarra.PNG",
    disponible: false,
  },
  {
    id: 63,
    nombre: "Café con leche",
    precio: 3,
    imagen: "cafe.PNG",
    disponible: true,
  },
  {
    id: 29,
    nombre: "Jarra de cerveza",
    precio: 4,
    imagen: "cerveza.PNG",
    disponible: true,
  },
  {
    id: 43,
    nombre: "Refresco de cola",
    precio: 3,
    imagen: "cola.PNG",
    disponible: true,
  },
  {
    id: 59,
    nombre: "Dorada al horno",
    precio: 18,
    imagen: "dorada.PNG",
    disponible: true,
  },
  {
    id: 65,
    nombre: "Ensalada verde",
    precio: 6,
    imagen: "ensalada.PNG",
    disponible: true,
  },
  {
    id: 73,
    nombre: "Espaguetis con boloñesa",
    precio: 11,
    imagen: "espaguetis.PNG",
    disponible: true,
    disponible: true,
  },
  {
    id: 12,
    nombre: "Flan de huevo casero",
    precio: 6,
    imagen: "flan.PNG",
    disponible: true,
  },
  {
    id: 72,
    nombre: "Hamburguesa con patatas",
    precio: 14,
    imagen: "hamburguesa.PNG",
    disponible: true,
  },
  {
    id: 46,
    nombre: "Helado 3 sabores",
    precio: 5,
    imagen: "helado.PNG",
    disponible: true,
  },
  {
    id: 31,
    nombre: "Melón con jamón",
    precio: 10,
    imagen: "melon.PNG",
    disponible: true,
  },
  {
    id: 16,
    nombre: "Paella marinera",
    precio: 21,
    imagen: "paella.PNG",
    disponible: true,
  },
  {
    id: 32,
    nombre: "Pollo a l'ast",
    precio: 8,
    imagen: "pollo.PNG",
    disponible: true,
  },
  {
    id: 21,
    nombre: "Tortilla de patata",
    precio: 9,
    imagen: "tortilla.PNG",
    disponible: true,
  },
];

const compra = [];
let presupuesto = 30;
let total = 0;

function mostrarProductos() {
  PRODUCTOS.filter(
    (el) => el.disponible === true && el.precio <= presupuesto
  ).map((producto) => {
    document.querySelector(".productos").insertAdjacentHTML(
      "beforeend",
      `
        <div class='producto'>
            <img id='${producto.id}' onmouseover='conocer(this)' onmouseleave='limpiar()' onclick='comprar(this)' src='./img/${producto.imagen}' alt='${producto.nombre}' />
        </div>
        `
    );
  });
}

mostrarProductos();

function actualizar() {
  document.querySelector(".presu strong").innerHTML = `${presupuesto}€`;
  document.querySelector(".lista").insertAdjacentHTML(
    "beforeend",
    `
    <div class="total">
        <h3>A pagar: ${total}€</h3>
    </div>
    `
  );
}

actualizar();

function conocer(producto) {
  let indice = buscar(producto);
  let nombre = PRODUCTOS[indice].nombre;
  let precio = PRODUCTOS[indice].precio;
  document.querySelector(
    ".info"
  ).innerHTML = `${nombre} (<strong>${precio}€</strong>)`;
}

function limpiar() {
  document.querySelector(".info").innerHTML = ``;
}

function comprar(producto) {
  let indice = buscar(producto);
  PRODUCTOS[indice].disponible = false;
  compra.push(PRODUCTOS[indice].id);
  presupuesto -= PRODUCTOS[indice].precio;
  vaciarCajas();
  mostrarProductos();
  mostrarCarrito();
  limpiar();
  actualizar();
}

function buscar(valor) {
  const id = valor.getAttribute("id");
  return PRODUCTOS.findIndex((el) => el.id == id);
}

function vaciarCajas() {
  document.querySelector(".productos").innerHTML = "";
  document.querySelector(".carrito").innerHTML = "";
  document.querySelector(".lista").innerHTML = "";

  total = 0;
}

function devolver(producto) {
  let indice = buscar(producto);
  PRODUCTOS[indice].disponible = true;
  presupuesto += PRODUCTOS[indice].precio;

  compra.splice(compra.indexOf(PRODUCTOS[indice].id), 1);

  vaciarCajas();
  mostrarProductos();
  mostrarCarrito();
  limpiar();
  actualizar();
}

function mostrarCarrito() {
  compra.map((id) => {
    let indice = PRODUCTOS.findIndex((el) => el.id == id);
    document.querySelector(".carrito").insertAdjacentHTML(
      "beforeend",
      `
    <div class="producto">
      <img id="${id}" onmouseover="conocer()" onmouseleave="limpiar" onclick="devolver(this)" src="img/${PRODUCTOS[indice].imagen}" alt="${PRODUCTOS[indice].nombre}" />
    </div>
    `
    );
    anotar(indice);
  });
}

function anotar(indice) {
  document.querySelector(".lista").insertAdjacentHTML(
    "beforeend",
    `
  <div class="linea">
    <div class="columna1">${PRODUCTOS[indice].nombre}</div>
    <div class="columna2">${PRODUCTOS[indice].precio}€</div>
  </div>
  `
  );
  total += PRODUCTOS[indice].precio;
}

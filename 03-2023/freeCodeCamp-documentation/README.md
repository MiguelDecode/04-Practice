Puedes ver un elemento main con su correspondiente id="main-doc", el cual abarcará el contenido principal de la página (documentación técnica)

Dentro del elemento #main-doc, se pueden ver varios elementos section, cada uno con la clase main-section. Debe haber un mínimo de cinco

El primer elemento dentro de cada .main-section debería ser un elemento header, el cual contendrá texto que describa el tema de esa sección.

Cada elemento section con la clase main-section debería tener también un id que corresponda al texto de cada header contenido dentro de él.

Cualquier espacio debe ser reemplazado por guiones bajos ( Ejemplo: La sección que contiene el encabezado "JavaScript and Java" debe tener un id="JavaScript_and_Java")

Los elementos .main-section deberán tener al menos diez elementos p en total (no cada uno)

Los elementos .main-section deberán tener al menos cinco elementos code en total (no cada uno)

Los elementos .main-section deberán tener al menos cinco items li en total (no cada uno)

Puedes ver un elemento nav con su correspondiente id="navbar"

La barra de navegación deberá contener un elemento header, el cual contendrá texto que describa el tema de la documentación técnica
Además, la barra de navegación deberá contener elementos de enlace (a) con la clase nav-link. 

Debe haber uno para cada elemento con la clase main-section

El elemento header dentro de la #navbar debería ir antes que los elementos (a) de la barra de navegación

Cada elemento con la clase nav-link debería tener texto que corresponda al texto del header de cada section (Ejemplo: Si tienes una seccion/encabezado "Hello world", tu barra de navegación debería tener un elemento que contenga el texto "Hello world")

Al hacer click en un elemento de tu barra de navegación, la página debería dirigirse a la sección correspondiente del elemento #main-doc (Ejemplo: Si haces click en el elemento .nav-link que contiene el texto "Hello world", la página debería dirigirse al elemento section que tenga ese id y contenga el encabezado correspondiente)

En dispositivos de tamaño normal (portatiles, computadoras de escritorio), el elemento con id="navbar" debe mostrarse en el lado izquierdo de la pantalla y siempre ser visible para el usuario

Tu documentación técnica debe usar al menos una media query

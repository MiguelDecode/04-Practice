/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
  /*   const myGenerator = myFirstGeneratorFunction();

  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next()); */

  const btn = document.createElement("button");
  btn.textContent = "Click me";
  element.appendChild(btn);

  const genId = idGenerator();

  const renderBtn = () => {
    const { value } = genId.next();
    btn.textContent = `Click ${value}`;
  };

  btn.addEventListener("click", renderBtn);
};

function* myFirstGeneratorFunction() {
  yield "Primer valor";
  yield "Segundo valor";
  yield "Tercer valor";
  yield "Cuarto valor";

  return "Ya no hay valores";
  yield "Nunca se llega hasta aqui";
}

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}

const box = document.getElementById("box");
let counter = 0;

const createCard = () => {
  box.classList.add("box--green");
  box.innerHTML = `
     <section class="wrapper">
        <p class="price">2 Euros</p>
        <img class="img" src="https://www.html6.es/img/cafe1.png" alt="Coffe" />
      </section>
      <p class="description">Café de Colombia</p>
    `;
};

createCard();

box.addEventListener("click", () => {
  const price = document.querySelector(".price");
  const wrapper = document.querySelector(".wrapper");
  const description = document.querySelector(".description");
  const image = document.querySelector(".img");

  if (counter === 0) {
    box.classList.remove("box--green");
    box.classList.add("box--blue");
    price.textContent = "5 Euros";
    image.src = "https://www.html6.es/img/cafe2.png";
    description.textContent = "Mucho café";

    counter++;
  } else if (counter === 1) {
    box.classList.remove("box--blue");
    box.classList.add("box--purple");
    price.textContent = "15 Euros";
    description.textContent = "Desayuno completo";

    const cupcake = document.createElement("img");
    cupcake.src = "https://www.html6.es/img/pasta.png";
    cupcake.alt = "Magdalena";
    wrapper.insertAdjacentElement("beforeend", cupcake);

    counter++;
  } else if (counter === 2) {
    box.classList.remove("box--purple");
    box.classList.add("box--green");
    createCard();
    counter = 0;
  }
});

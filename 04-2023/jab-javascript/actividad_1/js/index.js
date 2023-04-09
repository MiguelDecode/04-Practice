/*
	Utilizar: - do while (con el primer botón`)
	          - while (con el segundo botón`)

	Sin usar: - reverse
*/

const btnDoWhile = document.getElementById("btn-dowhile");
const btnWhile = document.getElementById("btn-while");
const caja = document.querySelector(".caja");

btnDoWhile.addEventListener("click", () => {
  let i = 0;
  caja.innerHTML = "";

  do {
    const card = `
		 <div class="card">
			<img class="rey" src="${
        REYES[i].imagen || "./img/rey_incognito.png"
      }" alt="${REYES[i].nombre}" />
			<p class="name">${REYES[i].nombre}</p>
		</div>`;

    caja.insertAdjacentHTML("beforeend", card);

    i++;
  } while (i < REYES.length);
});

btnWhile.addEventListener("click", () => {
  let j = REYES.length - 1;
  caja.innerHTML = "";

  while (j >= 0) {
    const card = `
		 <div class="card">
			<img class="rey" src="${
        REYES[j].imagen || "./img/rey_incognito.png"
      }" />
			<p class="name">${REYES[j].nombre}</p>
		</div>`;

    caja.insertAdjacentHTML("beforeend", card);

    j--;
  }
});

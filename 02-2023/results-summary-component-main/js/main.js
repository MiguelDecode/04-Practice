const url = "../data.json";
const $summary = document.querySelector(".summary__content");

const taking = fetch(url)
  .then((res) => res.json())
  .then((data) => data.forEach((box) => summaryBox(box)));

const summaryBox = (data) => {
  let { category, score, icon } = data;

  const $summaryResult = document.createElement("div");
  $summaryResult.classList.add("summary__result");
  $summaryResult.classList.add(`summary__result--${category.toLowerCase()}`);

  $summaryResult.innerHTML = `
          <div class="summary__name">
            <img
              src="${icon}"
              alt="Reaction icon"
              class="summary__icon"
            />
            <h3 class="summary__subtitle summary__subtitle--${category}">
              ${category}
            </h3>
          </div>
          <p class="summary__data">
            ${score} <span class="summary__data--light">/ 100</span>
          </p>
  `;

  $summary.insertAdjacentElement("afterbegin", $summaryResult);
};


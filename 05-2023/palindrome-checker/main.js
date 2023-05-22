const input = document.getElementById("input-text");
const btnCheck = document.getElementById("btn");
const result = document.getElementById("result");
const form = document.querySelector("form");


btn.addEventListener("click", (event) => {
  // exp = Expression

  if (input.value.length === 0) return alert("Input can't be empty");

  let expToEvaluate = input.value.toLowerCase().replace(/[^a-z0-9]/g, "");

  let expWithoutSpaces = expToEvaluate.split(" ").join("");

  let reverseExp = expWithoutSpaces.split("").reverse().join("");
  console.log(expWithoutSpaces, reverseExp);

  if (expWithoutSpaces === reverseExp) {
    result.classList.remove("error");
    result.classList.add("success");
    result.textContent = "Yes, it's a palindrome!";
  } else {
    result.classList.remove("success");
    result.classList.add("error");
    result.textContent = "No, it's not a palindrome";
  }
});

form.addEventListener("submit", (event) => event.preventDefault());

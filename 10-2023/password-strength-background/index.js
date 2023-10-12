const InputPasswordElement = document.getElementById("password");
const formElement = document.querySelector("form");
const rootStyle = document.documentElement;

const safePasswordLength = 30;
rootStyle.style.setProperty("--bg-blur", safePasswordLength + "px");

InputPasswordElement.focus();

const checkStrength = () => {
  const passwordLength = InputPasswordElement.value.length;

  let bgBlur = safePasswordLength - passwordLength;

  if (bgBlur < 0) bgBlur = 0;

  rootStyle.style.setProperty("--bg-blur", bgBlur + "px");
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
});

InputPasswordElement.addEventListener("keyup", checkStrength);

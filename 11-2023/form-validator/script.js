const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm-password");

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  formControl.classList.remove("success");
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
};

const checkRequired = (inputArr) => {
  let isRequired = false;

  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `This input is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
};

const checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `Must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `Must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

const checkEmail = (input) => {
  const regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regExp.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
};

const checkPassword = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords don't match");
  }
};

// Events Listener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (checkRequired([username, email, password, passwordConfirm])) {
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPassword(password, passwordConfirm);
  }
});

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const $days = document.getElementById("days");
const $months = document.getElementById("months");
const $years = document.getElementById("years");

const addError = (el, msg) => {
  el.classList.add("form__input--invalid");
  el.parentElement.classList.add("form__label--invalid");
  el.nextElementSibling.textContent = msg;
};

const removeError = (el) => {
  el.classList.remove("form__input--invalid");
  el.parentElement.classList.remove("form__label--invalid");
  el.nextElementSibling.textContent = "";
};

const checkInputs = (userDay, userMonth, userYear) => {
  let dayIsValid;
  let monthIsValid;
  let yearIsValid;

  if ((userDay < 1 || userDay > 31) && userDay !== "") {
    addError(day, "Must be a valid day");
    dayIsValid = false;
  } else if (userDay === "") {
    addError(day, "This field is required");
    dayIsValid = false;
  } else {
    removeError(day);
    dayIsValid = true;
  }

  if ((userMonth < 1 || userMonth > 12) && userMonth !== "") {
    addError(month, "Must be a valid month");
    monthIsValid = false;
  } else if (userMonth === "") {
    addError(month, "This field is required");
    monthIsValid = false;
  } else {
    removeError(month);
    monthIsValid = true;
  }

  if (userYear > 2023 && userYear !== "") {
    addError(year, "Must be in the past");
    yearIsValid = false;
  } else if (userYear < 1900 && userYear !== "") {
    addError(year, "Nobody lives that many years");
    yearIsValid = false;
  } else if (userYear === "") {
    addError(year, "This field is required");
    yearIsValid = false;
  } else {
    removeError(year);
    yearIsValid = true;
  }

  return dayIsValid && monthIsValid && yearIsValid ? true : false;
};

const calculateAge = (day, month, year) => {
  if (day !== "" && month !== "" && year !== "" && year > 1000) {
    const today = new Date().getTime();

    const birthday = new Date(`${year}-${month}-${day}`).getTime();

    const total = today - birthday;

    if (Math.sign(total) !== 1) {
      addError(document.getElementById("day"), "Must be a valid date");
    } else {
      const msInDay = 1000 * 60 * 60 * 24;
      const msInYear = msInDay * 365.25;

      const years = Math.floor(total / msInYear);
      const months = Math.floor((total % msInYear) / msInDay / 30.44);
      const days = Math.floor(((total % msInYear) / msInDay) % 30.44);

      $years.textContent = years;
      $months.textContent = months;
      $days.textContent = days;
    }
  }
};

document.addEventListener("keyup", (event) => {
  if (
    (/[0-9]/.test(event.key) || event.key === "Backspace") &&
    (event.target === day || event.target === month || event.target === year)
  ) {
    let userDay = day.value;
    let userMonth = month.value;
    let userYear = year.value;

    if (checkInputs(userDay, userMonth, userYear)) {
      calculateAge(userDay, userMonth, userYear);
    } else {
      $years.textContent = "--";
      $months.textContent = "--";
      $days.textContent = "--";
    }
  } else {
    event.preventDefault();
  }
});

document.addEventListener("keydown", (event) => {
  if (
    (/[0-9]/.test(event.key) ||
      event.key === "Backspace" ||
      event.key === "Tab") &&
    (event.target === day || event.target === month || event.target === year)
  ) {
  } else {
    event.preventDefault();
  }
});

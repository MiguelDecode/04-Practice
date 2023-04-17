const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const $days = document.getElementById("days");
const $months = document.getElementById("months");
const $years = document.getElementById("years");

const addError = (el, msg) => {
  el.classList.add("calc__input--invalid");
  el.parentElement.classList.add("calc__label--invalid");
  el.nextElementSibling.textContent = msg;
};

const removeError = (el) => {
  el.classList.remove("calc__input--invalid");
  el.parentElement.classList.remove("calc__label--invalid");
  el.nextElementSibling.textContent = "";
};

const checkInputs = (userDay, userMonth, userYear) => {
  if ((userDay < 1 || userDay > 31) && userDay !== "") {
    addError(day, "Must be a valid day");
    return false;
  } else {
    removeError(day);
  }

  if ((userMonth < 1 || userMonth > 12) && userMonth !== "") {
    addError(month, "Must be a valid month");
    return false;
  } else {
    removeError(month);
  }

  if (userYear !== "") {
    if (userYear > 2023) {
      addError(year, "Must be in the past");
      return false;
    } else if (userYear < 1900) {
      addError(year, "Nobody lives that many years");
      return false;
    } else {
      removeError(year);
    }
  } else {
    removeError(year);
  }

  return true;
};

const calculateAge = (day, month, year) => {
  if (day !== "" && month !== "" && year !== "" && year > 1000) {
    const today = new Date().getTime();

    const birthday = new Date(`${year}-${month}-${day}`).getTime();

    const total = today - birthday;

    const msInDay = 1000 * 60 * 60 * 24;
    const msInYear = msInDay * 365.25;

    const years = Math.floor(total / msInYear);
    const months = Math.floor((total % msInYear) / msInDay / 30.44);
    const days = Math.floor(((total % msInYear) / msInDay) % 30.44);

    $years.textContent = years;
    $months.textContent = months;
    $days.textContent = days;
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

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const btn = document.getElementById("btn-calculate");
const $days = document.getElementById("days");
const $months = document.getElementById("months");
const $years = document.getElementById("years");

const leapChecker = (year) => {
  year % 4 === 0 || year % 100 === 0 || year % 400 === 0
    ? (months[1] = 29)
    : (months[1] = 28);
};

const ageCalculate = () => {
  let today = new Date();

  let inputDate = new Date(document.getElementById("date-input").value);

  let birthDay;
  let birthMonth;
  let birthYear;

  let birthDetails = {
    day: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };

  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDay = today.getDate();

  leapChecker(currentYear);

  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year === currentYear) ||
    (birthDetails.day > currentDay &&
      birthDetails.month === currentMonth &&
      birthDetails.year === currentYear)
  ) {
    alert("Not Born Yet");
    $days.textContent = "-";
    $months.textContent = "-";
    $years.textContent = "-";
    return;
  }

  birthYear = currentYear - birthDetails.year;

  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetails.month;
  }

  if (currentDay >= birthDetails.day) {
    birthDay = currentDay - birthDetails.day;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDay = days + currentDay - birthDetails.day;

    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }

  $days.textContent = birthDay;
  $months.textContent = birthMonth;
  $years.textContent = birthYear;
};

btn.addEventListener("click", ageCalculate);

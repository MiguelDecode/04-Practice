const mainElement = document.getElementById("main");
const btnAddUser = document.getElementById("add-user");
const btnDouble = document.getElementById("double");
const btnShowMillionaries = document.getElementById("show-millionaries");
const btnSort = document.getElementById("sort");
const btnCalculateWealth = document.getElementById("calculate-wealth");
const usersContainer = document.getElementById("users");

let url = "https://randomuser.me/api";
const initialUsers = 3;
const millionarieCap = 10000000;

let data = [];

const updateDOM = () => {
  usersContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  data.forEach((user) => {
    const element = document.createElement("div");
    element.classList.add("person");
    const nameElement = document.createElement("span");
    const moneyElement = document.createElement("span");
    nameElement.textContent = user.name;
    moneyElement.textContent = formatMoney(user.money);

    element.appendChild(nameElement);
    element.appendChild(moneyElement);

    fragment.appendChild(element);
  });

  usersContainer.appendChild(fragment);
};

const addUser = (user) => {
  data.push(user);
  updateDOM();
};

const formatMoney = (number) =>
  "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

const getRandomUser = async () => {
  const res = await fetch(url);
  const data = await res.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 100000000),
  };

  addUser(newUser);
};

const doubleMoney = () => {
  data.forEach((el) => (el.money = el.money * 2));

  updateDOM();
};

const showMillionaries = () => {
  const newData = data.filter((user) => user.money > millionarieCap);

  data = newData;

  updateDOM();
};

const sortByMoney = () => {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
};

const calculateTotalWealth = () => {
  const total = data.reduce((acc, user) => (acc += user.money), 0);

  const element = document.createElement("h3");
  element.innerHTML = `Total Wealth  <strong>${formatMoney(total)}</strong>`;
  usersContainer.appendChild(element);
};

for (let i = 0; i < initialUsers; i++) {
  getRandomUser();
}

// Event Listeners

document.addEventListener("DOMContentLoaded", updateDOM);

btnAddUser.addEventListener("click", getRandomUser);
btnDouble.addEventListener("click", doubleMoney);
btnShowMillionaries.addEventListener("click", showMillionaries);
btnSort.addEventListener("click", sortByMoney);
btnCalculateWealth.addEventListener("click", calculateTotalWealth);

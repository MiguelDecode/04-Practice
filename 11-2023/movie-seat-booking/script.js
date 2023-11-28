const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const selectSeat = (event) => {
  if (
    event.target.classList.contains("seat") &&
    !event.target.classList.contains("occupied")
  ) {
    event.target.classList.toggle("selected");
  }
};

const getTotalTickets = () =>
  Number(container.querySelectorAll(".seat.selected").length);

const getTicketPrice = () => Number(movieSelect.value);

const showResult = (num, value) => {
  count.innerText = num;
  total.innerText = num * value;
};

const handleChanges = (event) => {
  selectSeat(event);

  const ticketPrice = getTicketPrice();
  const totalTickets = getTotalTickets();

  showResult(ticketPrice, totalTickets);
};

// Event Listener
movieSelect.addEventListener("change", handleChanges);

container.addEventListener("click", handleChanges);

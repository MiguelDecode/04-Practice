let item;

// Event handlers
const dragStart = (event) => {
  if (event.target.matches(".todo__task")) {
    event.target.classList.add("dragging");
    console.log(event.target);
    item = event.target;
  }
};

const dragEnd = (event) => {
  if (event.target.matches(".todo__task")) {
    event.target.classList.remove("dragging");
  }
};

const dragOver = (event) => {
  if (event.target.matches(".todo__col")) {
    event.preventDefault();
    const container = event.target;
    if (event.target.matches("#done")) {
      item.classList.add("todo__task--done");
    } else {
      item.classList.remove("todo__task--done");
    }
    container.appendChild(item);
  }
};

// Document Listeners
document.addEventListener("dragstart", dragStart);
document.addEventListener("dragend", dragEnd);
document.addEventListener("dragover", dragOver);

const todoInput = document.getElementById("todo-input");
const todoSubmit = document.getElementById("todo-submit");

const createTask = (task) => {
  const parragraph = document.createElement("p");
  parragraph.textContent = task;
  parragraph.classList.add("todo__task");

  document.getElementById("todo").appendChild(parragraph);
};

const handleSubmit = (event) => {
  event.preventDefault();
  createTask(todoInput.value);
  todoInput.value = "";
};

document.addEventListener("submit", handleSubmit);

const btn = document.getElementById("btn");
const input = document.getElementById("task");
const tasks = document.getElementById("tasks");

const createTask = () => {
  const task = document.createElement("div");
  task.classList.add("tasks__task");
  task.innerHTML = `<p class="tasks__msg">${input.value}</p><button class="tasks__remove">🗑️</button>`;
  return task;
};

const deleteTask = (el) => {
  el.remove();
};

const addTask = () => {
  console.log("Add Task");
  tasks.appendChild(createTask());
  input.value = "";
  input.focus();
};

document.addEventListener("click", (event) => {
  if (input.value !== "") addTask();

  document.querySelectorAll(".tasks__remove").forEach((el) => {
    if (event.target === el) deleteTask(el.parentNode);
  });

  document.querySelectorAll(".tasks__msg").forEach((el) => {
    if (event.target === el) el.classList.toggle("tasks__msg--done");
  });
});

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && input.value !== "") addTask();
});

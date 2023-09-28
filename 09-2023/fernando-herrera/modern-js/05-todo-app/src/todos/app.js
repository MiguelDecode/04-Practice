import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw";
import { renderPendingTodos } from "./usecases";
import { renderTodos } from "./usecases/render-todos";

const elementIds = {
  DeleteCompleted: ".clear-completed",
  NewTodoInput: "#new-todo-input",
  TodoList: ".todo-list",
  TodoFilters: ".filters",
  PendingCount: "#pending-count",
};

/**
 *
 * @param {string} elementId
 */
export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(elementIds.TodoList, todos);
    updatePendingCount();
  };

  const updatePendingCount = () => {
    renderPendingTodos(elementIds.PendingCount);
  };

  // When App is call
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  // Referencias HTML
  const newDescriptionInput = document.querySelector(elementIds.NewTodoInput);
  const todoList = document.querySelector(elementIds.TodoList);
  const btnDeleteCompleted = document.querySelector(elementIds.DeleteCompleted);
  const btnsFilter = document.querySelector(elementIds.TodoFilters);

  // Listeners
  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.keyCode !== 13) return;

    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);

    displayTodos();

    event.target.value = "";
  });

  todoList.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]");
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displayTodos();
  });

  todoList.addEventListener("click", (event) => {
    if (event.target.matches(".destroy")) {
      const element = event.target.closest("[data-id]");
      todoStore.deleteTodo(element.getAttribute("data-id"));
      displayTodos();
    }
  });

  btnDeleteCompleted.addEventListener("click", (event) => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  btnsFilter.addEventListener("click", (event) => {
    if (event.target.matches(".filtro")) {
      btnsFilter
        .querySelectorAll(".filtro")
        .forEach((filter) => filter.classList.remove("selected"));
      event.target.classList.add("selected");

      switch (event.target.textContent) {
        case "Todos":
          todoStore.setFilter(Filters.All);
          break;

        case "Pendientes":
          todoStore.setFilter(Filters.Pending);
          break;

        case "Completados":
          todoStore.setFilter(Filters.Completed);
          break;
      }
      displayTodos();
    }
  });
};

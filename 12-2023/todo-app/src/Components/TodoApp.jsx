import { useState } from "react";
import Todo from "./Todo";
import './TodoApp.css'

function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setTitle("");
  }

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const todo = temp.find((item) => item.id === id);
    todo.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((todo) => todo.id !== id);
    setTodos(temp);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input className="todoInput" onChange={handleChange} value={title} />
        <input
          className="buttonCreate"
          type="submit"
          value="Create todo"
          onClick={handleSubmit}
        />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;

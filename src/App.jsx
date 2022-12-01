import { Fragment, useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import { TodoList } from "./components/TodoList";

export function TaskListApp() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1", completed: false },
  ]);

  const todoTaskRef = useRef();

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), task, completed: false }];
    });

    todoTaskRef.current.value = [];
  };

  return (
    <Fragment>
      <TodoList todos={todos} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
      <button onClick={handleTodoAdd}>➕</button>
      <button>🗑️</button>
    </Fragment>
  );
}

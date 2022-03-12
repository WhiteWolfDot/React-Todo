import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/footer";
import "./styles/index.css";

const LOCAL_STORAGE_KEY = "react-todo-todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function removeItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  return (
    <>
      <Header />
      <div id="todo-app">
        <h1>React TODO</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeItem={removeItem}
        />
        <h4>*Click to expand long TODOs</h4>
      </div>
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

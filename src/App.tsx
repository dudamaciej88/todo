import React, { useState, useEffect } from "react";
import "./App.style.css";
import Form from "./components/Form";
import Todolist from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState<Array<Todo>>([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal: string = localStorage.getItem("todos")!;
      setTodos(JSON.parse(todoLocal));
    }
  };

  return (
    <>
      <div className="App">
        <header>
          <h1>Todo List</h1>
        </header>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <Todolist
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
        />
      </div>
    </>
  );
};

export default App;

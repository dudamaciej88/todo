import React from "react";

type Props = {
  setInputText: (e: string) => void;
  setTodos: (e: Array<Todo>) => void;
  setStatus: (e: string) => void;
  todos: Array<Todo>;
  inputText: string;
};

const Form: React.FC<Props> = ({
  inputText,
  setInputText,
  setStatus,
  todos,
  setTodos,
}) => {
  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

import React from "react";
import Todo from "./Todo";

type Props = {
  todos: Array<Todo>;
  setTodos: (e: Array<Todo>) => void;
  filteredTodos: Array<Todo>;
};

const TodoList: React.FC<Props> = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

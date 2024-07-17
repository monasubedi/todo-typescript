import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.length > 0 &&
        todos.map((item) => (
          <SingleTodo
            key={item.id}
            todo={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
    </div>
  );
};

export default TodoList;

import { useReducer, type ReactNode } from "react";
import TodosContext from "./TodosContext";
import type { Todo, TodoAction } from "./types";

type Props = {
  children: ReactNode;
};

const todosReducer = (todos: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [action.todo, ...todos];
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.todoId);
    default:
      return todos;
  }
};

export default function TodosProvider({ children }: Props) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

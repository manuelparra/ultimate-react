import { createContext, useContext, type Dispatch } from "react";
import type { Todo, TodoAction } from "./types";

type TodosContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
};

const TodosContext = createContext<TodosContextType>({} as TodosContextType);

export default TodosContext;

export function useTodos() {
  return useContext(TodosContext);
}

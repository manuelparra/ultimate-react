import { createContext, type Dispatch } from "react";
import type { Todo, TodoAction } from "../types";

type TodosContextType = {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
};

export default createContext<TodosContextType>({} as TodosContextType);

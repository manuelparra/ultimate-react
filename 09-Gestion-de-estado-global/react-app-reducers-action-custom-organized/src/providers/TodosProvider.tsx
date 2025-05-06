import { useReducer, type ReactNode } from "react";
import reducer from "../reducers/todosReducer";
import TodosContext from "../contexts/TodosContext";

type Props = {
  children: ReactNode;
};
export default function TodosProvider({ children }: Props) {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

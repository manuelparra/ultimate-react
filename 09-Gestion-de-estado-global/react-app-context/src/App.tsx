import { useState } from "react";
import { Todo } from "./types";
import MainContent from "./components/MainContent";
import Dashboard from "./components/Dashboard";
import TodosContext from "./contexts/TodosContext";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, name: "Cocinar", completed: false },
    { id: 1, name: "Ordenar closet", completed: false },
  ]);

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <>
      <TodosContext.Provider value={{ todos, addTodo }}>
        <Dashboard />
        <MainContent />
      </TodosContext.Provider>
    </>
  );
}

export default App;

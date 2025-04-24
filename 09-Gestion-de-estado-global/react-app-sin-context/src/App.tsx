import { useState } from "react";
import { Todo } from "./types";
import MainContent from "./components/MainContent";
import Dashboard from "./components/Dashboard";

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
      <Dashboard amount={todos.length} />
      <MainContent todos={todos} addTodo={addTodo} />
    </>
  );
}

export default App;

import { useContext } from "react";
import TodosContext from "../../contexts/TodosContext";

function TodoList() {
  const { todos, addTodo } = useContext(TodosContext);

  return (
    <>
      <button
        onClick={() =>
          addTodo({
            id: Math.random(),
            name: "Chanchito feliz",
            completed: false,
          })
        }
      >
        Agregar
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;

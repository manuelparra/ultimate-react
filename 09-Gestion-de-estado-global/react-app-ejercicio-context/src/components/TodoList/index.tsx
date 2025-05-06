import useTodos from "../../hooks/useTodos";

function TodoList() {
  console.log("Todo List");

  const { todos, addTodo } = useTodos();

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

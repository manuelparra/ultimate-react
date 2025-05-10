import useTodosStore from "../todos/store";

function MainContent() {
  const { todos, add, update, destroy } = useTodosStore();
  return (
    <>
      <h1>Hola Mundo</h1>
      <button
        onClick={() => {
          const id = Math.random();
          add({ id: id, name: `Hola Mundo ${id}` });
        }}
      >
        Agregar
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button onClick={() => destroy(todo.id)}>Eliminar</button>
            {todo.name}
            <button
              onClick={() => {
                update(todo.id, {
                  id: todo.id,
                  name: `New Hola Mundo updated ${todo.id}`,
                });
              }}
            >
              update todo
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MainContent;

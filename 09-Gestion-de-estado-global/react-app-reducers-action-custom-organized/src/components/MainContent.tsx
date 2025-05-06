import useTodos from "../hooks/useTodos";

function MainContent() {
  const { todos, dispatch } = useTodos();
  return (
    <>
      <h1>Hola Mundo</h1>
      <button
        onClick={() => {
          const id = Math.random();
          dispatch({
            type: "ADD",
            todo: { id: id, name: `Hola Mundo ${id}` },
          });
        }}
      >
        Agregar
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  todoId: todo.id,
                })
              }
            >
              Eliminar
            </button>
            {todo.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MainContent;

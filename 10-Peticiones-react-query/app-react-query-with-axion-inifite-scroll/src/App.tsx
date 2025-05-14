import { useState } from "react";
import useTodos from "./hooks/useTodos";

type Props = {};

function App({}: Props) {
  const pageSize = 35;

  const [userId, setUserId] = useState<number>();
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useTodos(userId, pageSize);
  if (error) return <h2>{error.message}</h2>;
  if (isLoading) return <h2>Cargando...</h2>;
  console.log(data);
  const todos = data?.pages.flat();

  return (
    <>
      <h2>Todos</h2>
      <select
        value={userId}
        onChange={(e) => {
          if (e.target.value !== "") {
            setUserId(Number(e.target.value));
          } else {
            setUserId(undefined);
          }
        }}
      >
        <option value="">Todos los usuarios</option>
        <option value="1">Usuario 1</option>
        <option value="2">Usuario 2</option>
        <option value="3">Usuario 3</option>
      </select>
      <ul>{todos?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage ? "Cargando..." : "Cargar más..."}
      </button>
    </>
  );
}

export default App;

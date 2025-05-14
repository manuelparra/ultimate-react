import { useState } from "react";
import useTodos from "./hooks/useTodos";

type Props = {};

function App({}: Props) {
  const pageSize = 35;
  const [page, setPage] = useState(1);

  const [userId, setUserId] = useState<number>();
  const { data, error, isLoading, isPlaceholderData } = useTodos(userId, {
    page,
    pageSize,
  });
  if (error) return <h2>{error.message}</h2>;
  if (isLoading) return <h2>Cargando...</h2>;

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
      <ul>{data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
      <button disabled={page == 1} onClick={() => setPage(page - 1)}>
        {"<<"}
      </button>
      <button onClick={() => setPage(page + 1)}>{">>"}</button>
      {isPlaceholderData && <span>Cargando...</span>}
    </>
  );
}

export default App;

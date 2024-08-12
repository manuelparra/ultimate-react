import useAsyncAwait from "./hooks/useAsyncAwait";

type Props = {};

function AsyncAwait({}: Props) {
  const { loading, error, users } = useAsyncAwait();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error && loading) {
    return <p>Ha ocurrido un error de tipo {error} </p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default AsyncAwait;

import useUsers from "./hooks/useUsers";

function Promesas() {
  const { loading, error, users } = useUsers();

  if (loading) {
    return <p>Cargando ...</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error {error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Promesas;

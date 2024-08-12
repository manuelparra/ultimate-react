import useHttpData from "./hooks/useHttpData";

type User = {
  id: string;
  name: string;
};

function HttpData() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { loading, error, data: users } = useHttpData<User>(url);

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

export default HttpData;

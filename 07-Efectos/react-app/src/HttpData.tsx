import useHttpData from "./hooks/useHttpData";

type User = {
  id?: string | number;
  name: string;
};

function HttpData() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const {
    loading,
    error,
    data: users,
    addData: addUser,
    deleteData: deleteUser,
    updateData: updateUser,
  } = useHttpData<User>(url);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error && loading) {
    return <p>Ha ocurrido un error de tipo {error} </p>;
  }

  return (
    <>
      <button onClick={() => addUser({ name: "Chanchito feliz" })}>
        Enviar
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => deleteUser(Number(user.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => updateUser({ id: 5, name: "Chanchito triste" })}>
        Enviar
      </button>
    </>
  );
}

export default HttpData;

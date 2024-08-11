import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

function Promesas() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status}`);

        return response.json() as Promise<User[]>;
      })
      .then((data) => setUsers(data))
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

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

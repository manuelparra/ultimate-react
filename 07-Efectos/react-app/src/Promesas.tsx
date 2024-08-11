import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

function Promesas() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json() as Promise<User[]>;
      })
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Cargando ...</p>;
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

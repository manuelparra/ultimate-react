import { useEffect, useState } from "react";

function Dependencias() {
  const [users, setUsers] = useState<string[]>([]);
  useEffect(() => {
    console.log("llamando al servidor...");
    const data = ["Chanchito feliz", "Felipe"];

    setUsers(data);
  }, []);

  console.log(users);

  const [token, setToken] = useState<string>("");

  useEffect(() => {
    console.log("Buscando algo con el token...", token);
  }, [token]);

  console.log(token);

  return <button onClick={() => setToken("Otro valor")}>Enviar</button>;
}

export default Dependencias;

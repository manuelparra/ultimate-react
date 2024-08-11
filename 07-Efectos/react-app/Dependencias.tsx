import { useEffect, useState } from "react";

type Props = {};

function Dependencias({}: Props) {
  const [users, setUsers] = useState<string[]>([]);
  useEffect(() => {
    console.log("llamando al servidor...");
    const data = ["Chanchito feliz", "Felipe"];

    setUsers(data);
  }, []);

  console.log(users);

  return <div>Dependencias</div>;
}

export default Dependencias;

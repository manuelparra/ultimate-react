import { useEffect, useState } from "react";

type Props = {};

function App({}: Props) {
  const [users, setUsers] = useState<string[]>([]);
  useEffect(() => {
    console.log("Dentro de useEffect", document.title);
    document.title = "Hola Mundo";
  });
  console.log("fuera de useEffect", document.title);

  useEffect(() => {
    console.log("Cargando usuarios...");

    return () => {
      console.log("Cancelar la carga");
    };
  });

  useEffect(() => {
    console.log("llamando al servidor...");
    const data = ["Chanchito feliz", "Felipe"];

    setUsers(data);
  }, []);

  const [token, setToken] = useState<string>("");

  useEffect(() => {
    console.log("Buscando algo con el token...", token);
  }, [token]);

  console.log(token);

  return (
    <>
      <div>Hola Mundo</div>
      <button onClick={() => setToken("Otro valor")}>Enviar</button>
    </>
  );
}

export default App;

import { useEffect } from "react";

type Props = {};

function App({}: Props) {
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

  return <div>Hola Mundo</div>;
}

export default App;

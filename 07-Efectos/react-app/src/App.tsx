import { useEffect } from "react";

type Props = {};

function App({}: Props) {
  useEffect(() => {
    console.log("Dentro de useEffect", document.title);
    document.title = "Hola Mundo";
  });
  console.log("fuera de useEffect", document.title);
  return <div>Hola Mundo</div>;
}

export default App;

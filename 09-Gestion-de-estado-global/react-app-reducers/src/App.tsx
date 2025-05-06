import { useState } from "react";

type Props = {};

export default function App({}: Props) {
  const [contador, setContador] = useState(0);
  return (
    <>
      <h1>Hola Mundo {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Reducir</button>
      <button onClick={() => setContador(0)}>Reset</button>
    </>
  );
}

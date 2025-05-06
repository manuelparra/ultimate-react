import { useReducer } from "react";

type Props = {};

type Action = {
  type: "INCREMENT" | "DECREASE" | "RESET"; // esto es por convención
};

const reducer = (contador: number, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return contador + 1;
    case "DECREASE":
      return contador - 1;
    case "RESET":
      return 0;
  }
};

export default function App({}: Props) {
  const [contador, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Hola Mundo {contador}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>Reducir</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}

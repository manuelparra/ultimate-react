import { useEffect } from "react";

type Props = {};

function SistemaLimpieza({}: Props) {
  useEffect(() => {
    console.log("Cargando usuarios...");

    return () => {
      console.log("Cancelar la carga");
    };
  });
  return <div>SistemaLimpieza</div>;
}

export default SistemaLimpieza;

import { useEffect } from "react";

function SistemaLimpieza() {
  useEffect(() => {
    console.log("Cargando usuarios...");

    return () => {
      console.log("Cancelar la carga");
    };
  });
  return <div>SistemaLimpieza</div>;
}

export default SistemaLimpieza;

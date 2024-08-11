import { useEffect } from "react";

function CuandoComo() {
  useEffect(() => {
    console.log("Dentro de useEffect", document.title);
    document.title = "Hola Mundo";
  });
  console.log("fuera de useEffect", document.title);

  return <div>CuandoComo</div>;
}

export default CuandoComo;

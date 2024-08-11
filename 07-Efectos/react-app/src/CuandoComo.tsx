import { useEffect } from "react";

type Props = {};

function CuandoComo({}: Props) {
  useEffect(() => {
    console.log("Dentro de useEffect", document.title);
    document.title = "Hola Mundo";
  });
  console.log("fuera de useEffect", document.title);

  return <div>CuandoComo</div>;
}

export default CuandoComo;

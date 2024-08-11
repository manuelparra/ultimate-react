import CuandoComo from "./CuandoComo";
import SistemaLimpieza from "./SistemaLimpieza";
import Dependencias from "./Dependencias";
import Promesas from "./Promesas";

type Props = {};

function App({}: Props) {
  return (
    <>
      <CuandoComo />
      <SistemaLimpieza />
      <Dependencias />
      <Promesas />
    </>
  );
}

export default App;

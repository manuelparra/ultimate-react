import { useState } from "react";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Alert from "./components/Alert";
import AlertByNS from "./components/AlertByNS";
import ButtonByNS from "./components/ButtonByNS";

// al importar desde la carpeta React buscar el archivo index.tsx automaticamente
import Button, { ButtonTwo } from "./components/Button";
import SuperButton from "./components/SuperButton";

const App = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingTwo, setIsLoadingTwo] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [status, setStatus] = useState(false);
  const [sent, setSent] = useState(false);

  const handleClickButtonNS = (): void => {
    setSent(true);
  };

  const [dataMinions, setDataMinions] = useState([
    "Kevin",
    "Stuart",
    "Bob",
    "Gru",
    "Walter",
    "Madge",
  ]);

  const onClick = (): void => {
    setStatus(!status);
  };

  const handleClickAlert = (): void => {
    setIsSelected(!isSelected);
  };

  const handleClick = (): void => {
    setIsLoading(!isLoading);
  };

  const handleClickTwo = (): void => {
    setIsLoadingTwo(!isLoadingTwo);
  };

  const addMinion = (): void => {
    setDataMinions([...dataMinions, "Minions"]);
  };

  const delMinion = (): void => {
    setDataMinions(dataMinions.slice(0, -1));
  };

  const list: string[] = [
    "Goku",
    "Tanjiro",
    "Eren",
    "Vegeta",
    "Krilin",
    "Maestro Roshi",
  ];

  const handleSelect = (elemento: string): void => {
    console.log("imprimiendo", elemento);
  };

  const handleSelectDos = (elemento: string): void => {
    console.log("mostrando", elemento);
  };

  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos para mostrar"
  );

  const masContenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelectDos} />
  );

  const minions = list.length ? (
    <List data={dataMinions} onSelect={handleSelect} />
  ) : (
    "Sin mininos para mostrar"
  );

  return (
    <div className="container text-center mt-3">
      <div className="row justify-content-evenly">
        <div className="col">
          <Card>
            <CardBody
              title="Mi tarjeta"
              subtitle="Subtitulo de mi tarjeta"
              text="Este es el contenido de mi tarjeta."
            />
            {contenido}
            <br />
            {masContenido}
            <br />
            <Button handleClick={handleClick} isLoading={isLoading}>
              {isLoading ? "Cargando..." : "Ejecutar"}
            </Button>
            <ButtonTwo handleClick={handleClickTwo} isLoadingTwo={isLoadingTwo}>
              {isLoadingTwo ? "Cargando..." : "Ejecutar"}
            </ButtonTwo>
          </Card>
        </div>
        <div className="col">
          <Card>
            <CardBody
              title="Trajeta Minions"
              subtitle="Agregar y eleminar minions"
              text="En esta tarjeta puedes agregar y eliminar los minions con un click."
            />
            <div className="row justify-content-evenly">
              <div className="col">
                <SuperButton handleClick={addMinion}>Agregar</SuperButton>
              </div>
              <div className="col">
                <SuperButton handleClick={delMinion}>Eliminar</SuperButton>
              </div>
            </div>
            <br />
            <br />
            {minions}
          </Card>
        </div>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Alert isSelected={isSelected} handleClickAlert={handleClickAlert}>
          A simple danger alert—check it out!
        </Alert>
      </div>
      <div>
        <AlertByNS status={status} onClick={onClick}>
          Alert
        </AlertByNS>
      </div>
      <div style={{ padding: "20px 10px 20px 10px" }}>
        <ButtonByNS sent={sent} onClick={handleClickButtonNS}>
          Enviar
        </ButtonByNS>
      </div>
    </div>
  );
};

export default App;

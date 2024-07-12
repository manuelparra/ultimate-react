import { useState } from "react";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
// al importar desde la carpeta React buscar el archivo index.tsx automaticamente
import Button from "./components/Button";
import SuperButton from "./components/SuperButton";

const App = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataMinions, setDataMinions] = useState([
    "Kevin",
    "Stuart",
    "Bob",
    "Gru",
    "Walter",
    "Madge",
  ]);

  const handleClick = (): void => {
    setIsLoading(!isLoading);
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
    </div>
  );
};

export default App;

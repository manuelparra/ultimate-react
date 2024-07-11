import { useState } from "react";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";

const App = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (): void => {
    alert("Hola");
    setIsLoading(!isLoading);
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

  return (
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
      <Button onClick={handleClick} isLoading={isLoading}>
        Cargando
      </Button>
    </Card>
  );
};

export default App;

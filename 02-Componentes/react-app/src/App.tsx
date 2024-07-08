import Card, { CardBody } from "./components/Card";
import List from "./components/List";

const App = (): JSX.Element => {
  const list = ["Goku", "Tanjiro", "Eren", "Vegeta", "Krilin", "Maestro Roshi"];

  return (
    <Card>
      <CardBody
        title="Mi tarjeta"
        subtitle="Subtitulo de mi tarjeta"
        text="Este es el contenido de mi tarjeta."
      />
      <List data={list} />
    </Card>
  );
};

export default App;

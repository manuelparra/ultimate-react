import Card, { CardBody } from "./components/Card";
import List from "./components/List";

const App = (): JSX.Element => {
  return (
    <Card>
      <CardBody
        title="Mi tarjeta"
        subtitle="Subtitulo de mi tarjeta"
        text="Este es el contenido de mi tarjeta."
      />
      <List />
    </Card>
  );
};

export default App;

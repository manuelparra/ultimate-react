function App(): JSX.Element {
  // jsx -> React.createElement()

  const nombre = "Chanchito Feliz";

  if (nombre) {
    return <p>Hola {nombre}</p>;
  }

  return <p>Hola Mundo!</p>;
}

export default App;

import { useState } from "react";
import "./App.css";

// los hooks no pueden estar fuera de un componente
// los hooks siempre tienen que estar en el nivel más alto del componente

// canda vez que se renderiza un componente, se ejecuta todo el código del componente

function App() {
  const [count, setCount] = useState(0);
  const [sent, setSent] = useState(false);

  // mutabilidad e inmutabilidad
  const [products, setProducts] = useState([{ name: "iPhone" }]);

  const handleClick = (): void => {
    setCount(count + 1);
    setSent(!sent);
    console.log("Handle Click", count, sent);
  };

  const handleClickAdd = (): void => {
    setProducts((products) => [...products, { name: "Samsung" }]);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Enviar</button>
      </div>
      <div style={{ marginTop: 20 }}>
        <button onClick={handleClickAdd}>Agregar</button>
        <ul>
          {products.map((product) => (
            <li key={product.name}>{product.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

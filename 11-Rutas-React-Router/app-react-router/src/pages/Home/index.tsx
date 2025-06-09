import { useNavigate } from "react-router-dom";

type Props = {};

function Home({}: Props) {
  const navigate = useNavigate();
  return (
    <>
      <h2>Hola mundo! Home.tsx</h2>
      <button onClick={() => navigate("/product")}>Enviar</button>
    </>
  );
}

export default Home;

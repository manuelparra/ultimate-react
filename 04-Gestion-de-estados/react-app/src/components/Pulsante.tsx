import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  gestioneClick: () => void;
};

function Pulsante({ children, gestioneClick }: Props) {
  return (
    <button style={{ marginTop: 8, cursor: "pointer" }} onClick={gestioneClick}>
      {children}
    </button>
  );
}

export default Pulsante;

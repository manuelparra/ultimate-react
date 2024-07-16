import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  handleClick: () => void;
};

function ButtonDashboard({ children, handleClick }: Props) {
  return (
    <button style={{ marginTop: 8, cursor: "pointer" }} onClick={handleClick}>
      {children}
    </button>
  );
}

export default ButtonDashboard;

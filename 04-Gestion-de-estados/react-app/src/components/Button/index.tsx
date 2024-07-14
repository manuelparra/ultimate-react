import { ReactNode } from "react";
import styled from "./Button.module.css";

type Props = {
  children: ReactNode;
  handleClick: () => void;
};

function Button({ children, handleClick }: Props) {
  return (
    <button className={styled.btn} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;

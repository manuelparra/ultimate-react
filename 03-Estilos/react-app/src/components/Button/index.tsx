import { ReactNode } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import styled from "styled-components";
import "./Button.css";
import buttonStyles from "./Button.module.css";

type BtnProps = {
  isLoading: boolean;
};

type ButtonProps = {
  children: ReactNode;
  isLoading: boolean;
  handleClick: () => void;
};

type BottonTwoProps = {
  children: ReactNode;
  isLoadingTwo: boolean;
  handleClick: () => void;
};

// uso de styled-components
// primero escribimos el código CSS, cunado tienes código CSS junto con el código JavaScript,
// es mas facil de compartir, eliminar y modificar
const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.isLoading ? "blue" : "green")};
  padding: 25px 30px;
  color: black;
  font-size: 18px;
  margin-left: 10px;
  &:hover {
    color: red;
  }
`;

// inline style no soporta animaciones ni funcionalidades avanzadas de css
const style = {
  backgroundColor: "red",
};

function Button(props: ButtonProps): JSX.Element {
  const { children, isLoading, handleClick } = props;

  const className = [
    `button btn btn-${isLoading ? "secondary" : "primary"} ${
      isLoading ? "disabled" : ""
    }`,
    buttonStyles.button_module,
  ].join(" ");

  return (
    <button
      style={style}
      type="button"
      onClick={handleClick}
      className={className}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}

export function ButtonTwo(props: BottonTwoProps): JSX.Element {
  const { children, isLoadingTwo, handleClick } = props;

  return (
    <Btn disabled={isLoadingTwo} onClick={handleClick} isLoading={isLoadingTwo}>
      {children}
      <FaRegThumbsUp style={{ marginLeft: "3px" }} color="black" size={17} />
    </Btn>
  );
}

export default Button;

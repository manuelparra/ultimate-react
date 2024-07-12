import { ReactNode } from "react";
import "./Button.css";
import buttonStyles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  isLoading: boolean;
  handleClick: () => void;
};

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
    >
      {children}
    </button>
  );
}

export default Button;

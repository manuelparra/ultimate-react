import { ReactNode } from "react";

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

  return (
    <button
      style={style}
      type="button"
      onClick={handleClick}
      className={`btn btn-${isLoading ? "secondary" : "primary"}
							  ${isLoading ? "disabled" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;

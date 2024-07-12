import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  isLoading: boolean;
  handleClick: () => void;
};

function Button(props: ButtonProps): JSX.Element {
  const { children, isLoading, handleClick } = props;

  return (
    <button
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

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  isLoading: boolean;
  handleClick: () => void;
};

function Button(props: ButtonProps): JSX.Element {
  const { children, isLoading } = props;

  return (
    <button
      type="button"
      className={`btn btn-${isLoading ? "secundary" : "primary"} `}
    >
      {children}
    </button>
  );
}

export default Button;

import { ReactNode, MouseEvent } from "react";

type buttonVariant = "primary" | "secondary";
type buttonType = "button" | "submit";

type Props = {
  children: ReactNode;
  type?: buttonType;
  variant?: buttonVariant;
  aditionalCss?: object;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

function Button({
  children,
  type = "button",
  variant = "primary",
  aditionalCss = {},
  onClick,
}: Props) {
  return (
    <button
      type={type}
      className={`btn btn-sm btn-${variant}`}
      onClick={onClick}
      style={aditionalCss}
    >
      {children}
    </button>
  );
}

export default Button;

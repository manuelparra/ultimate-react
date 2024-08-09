import { ReactNode, MouseEvent } from "react";

type buttonVariant = "primary" | "secondary";
type buttonType = "button" | "submit";

type Props = {
  children: ReactNode;
  type?: buttonType;
  variant?: buttonVariant;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
}: Props) {
  return (
    <button
      type={type}
      className={`btn btn-sm btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

import { ReactNode, MouseEvent } from "react";

type variant = "primary" | "secondary" | "warning";
type buttonType = "button" | "submit" | "reset";

type Props = {
  children: ReactNode;
  variant?: variant;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: buttonType;
};

function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
}: Props) {
  return (
    <button type={type} onClick={onClick} className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}

export default Button;

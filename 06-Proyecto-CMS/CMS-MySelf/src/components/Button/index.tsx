import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  behavior: "submit" | "reset";
  typeButton: string;
  addClassCss?: string;
};

function Button({ children, behavior, typeButton, addClassCss }: Props) {
  return (
    <button
      type={behavior}
      className={`${addClassCss ? addClassCss : ""} btn btn-${typeButton}`}
    >
      {children}
    </button>
  );
}

export default Button;

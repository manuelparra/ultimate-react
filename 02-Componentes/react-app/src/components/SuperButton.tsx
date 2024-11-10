import { ReactNode } from "react";

type SuperButtonProps = {
  children: ReactNode;
  handleClick: () => void;
};

function SuperButton(props: SuperButtonProps) {
  const { children, handleClick } = props;

  return (
    <button type="button" onClick={handleClick} className="btn btn-primary">
      {children}
    </button>
  );
}

export default SuperButton;

import { ReactNode } from "react";
import styled from "styled-components";

type AlertaProps = {
  isSelected: boolean;
};

type AlertProps = {
  children: ReactNode;
  isSelected: boolean;
  handleClickAlert: () => void;
};

const Alerta = styled.div<AlertaProps>`
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "red" : "green")};
  border-color: ${(props) => (props.isSelected ? "red" : "green")};
`;

function Alert(props: AlertProps): JSX.Element {
  const { children, isSelected, handleClickAlert } = props;

  return (
    <Alerta
      className="alert alert-danger"
      role="alert"
      isSelected={isSelected}
      onClick={handleClickAlert}
    >
      {children}
    </Alerta>
  );
}

export default Alert;

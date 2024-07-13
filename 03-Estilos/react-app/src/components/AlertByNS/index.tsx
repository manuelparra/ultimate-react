import { ReactNode } from "react";
import styled from "./AlertByNS.module.css";

type Props = {
  children: ReactNode;
  status: boolean;
  onClick: () => void;
};

function AlertByNS({ children, status, onClick }: Props): JSX.Element {
  return (
    <div
      className={[
        styled.alert,
        status ? styled.alertPrimary : styled.alertSecondary,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default AlertByNS;

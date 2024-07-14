import { ReactNode } from "react";
import styled from "./ButtonByNS.module.css";
import { IoIosSend } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

type Props = {
  children: ReactNode;
  onClick: () => void;
  sent: boolean;
};

function ButtonByNS({ children, sent, onClick }: Props): JSX.Element {
  return (
    <button
      disabled={sent}
      onClick={onClick}
      className={[styled.btn, styled.btnPrimary].join(" ")}
    >
      {sent ? "Enviado" : children}{" "}
      <span className={styled.sendIcon}>
        {sent ? <FaCheck color="white" /> : <IoIosSend color="white;" />}
      </span>
    </button>
  );
}

export default ButtonByNS;

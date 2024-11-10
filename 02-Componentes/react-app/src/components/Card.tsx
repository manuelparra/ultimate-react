// Code for Card component
// writed by: Manuel Parra
// created: 06/07/2024
// modified: 06/07/2024

import { Fragment, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;

  return (
    <>
      <div
        className="card"
        style={{ width: "350px", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="card-body">{children}</div>
      </div>
    </>
  );
}

interface CardBodyProps {
  title: string;
  subtitle: string;
  text: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, subtitle, text } = props;

  return (
    <Fragment>
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
      <p className="card-text">{text}</p>
    </Fragment>
  );
}

export default Card;

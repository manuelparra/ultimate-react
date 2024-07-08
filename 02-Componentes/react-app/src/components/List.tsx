import { useState } from "react";

type ListProps = {
  data: string[];
};

function List(props: ListProps): JSX.Element {
  const [index, setIndex] = useState(0);

  const { data } = props;

  const handleClick = (elemento: string, indice: number): void => {
    setIndex(indice);
    console.log(elemento);
  };

  return (
    <>
      <ul className="list-group">
        {data.map(
          (elemento: string, indice: number): JSX.Element => (
            <li
              onClick={(): void => handleClick(elemento, indice)}
              key={elemento}
              className={`list-group-item ${index == indice ? "active" : ""}`}
            >
              {elemento}
            </li>
          ),
        )}
      </ul>
    </>
  );
}

export default List;

import { useState } from "react";

type ListProps = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List(props: ListProps): JSX.Element {
  const { data, onSelect } = props;
  const [index, setIndex] = useState(0);

  const handleClick = (elemento: string, indice: number): void => {
    setIndex(indice);
    onSelect?.(elemento);
  };

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  return (
    <>
      <ul className="list-group">
        {data.length !== 0 ? (
          data.map(
            (elemento: string, indice: number): JSX.Element => (
              <li
                onClick={(): void => handleClick(elemento, indice)}
                key={elemento.concat(`${getRandomInt(10000)}`)}
                className={`list-group-item ${index == indice ? "active" : ""}`}
              >
                {elemento}
              </li>
            ),
          )
        ) : (
          <p>Lista vacia</p>
        )}
      </ul>
    </>
  );
}

export default List;

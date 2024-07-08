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

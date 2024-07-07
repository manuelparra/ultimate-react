type ListProps = {
  data: string[];
};

function List(props: ListProps): JSX.Element {
  const { data } = props;
  const handleClick = (e: string): void => {
    console.log(e);
  };

  return (
    <>
      <ul className="list-group">
        {data.map(
          (elemento: string): JSX.Element => (
            <li
              onClick={(): void => handleClick(elemento)}
              key={elemento}
              className="list-group-item"
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

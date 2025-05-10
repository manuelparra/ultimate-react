import useTodosStore from "../todos/store";

type Props = {};

function Header({}: Props) {
  const total = useTodosStore((state) => state.total);
  console.log("Header");
  return <div>{total}</div>;
}

export default Header;

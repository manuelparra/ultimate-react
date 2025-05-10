import useTodosStore from "../todos/store";

type Props = {};

function Header({}: Props) {
  const { todos } = useTodosStore();
  return <div>{todos.length}</div>;
}

export default Header;

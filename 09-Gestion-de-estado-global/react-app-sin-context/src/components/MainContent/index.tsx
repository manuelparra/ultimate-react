import { Todo } from "../../types";
import TodoList from "../TodoList";

type Props = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

function MainContent({ todos, addTodo }: Props) {
  return (
    <div>
      <h2>Todos</h2>
      <TodoList todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default MainContent;

import { Todo } from "../../types";

type Props = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

function TodoList({ todos, addTodo }: Props) {
  return (
    <>
      <button
        onClick={() =>
          addTodo({
            id: Math.random(),
            name: "Chanchito feliz",
            completed: false,
          })
        }
      >
        Agregar
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;

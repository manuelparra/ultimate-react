import { useReducer } from "react";

type Props = {};

type Todo = {
  id: number;
  name: string;
};

type addAction = {
  type: "ADD"; // esto es por convención
  todo: Todo;
};

type deleteAction = {
  type: "DELETE"; // esto es por convención
  todoId: number;
};

type Action = addAction | deleteAction;

const reducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [action.todo, ...todos];
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.todoId);
    default:
      return todos;
  }
};

export default function App({}: Props) {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <>
      <h1>Hola Mundo</h1>
      <button
        onClick={() => {
          const id = Math.random();
          dispatch({
            type: "ADD",
            todo: { id: id, name: `Hola Mundo ${id}` },
          });
        }}
      >
        Agregar
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  todoId: todo.id,
                })
              }
            >
              Eliminar
            </button>
            {todo.name}
          </li>
        ))}
      </ul>
    </>
  );
}

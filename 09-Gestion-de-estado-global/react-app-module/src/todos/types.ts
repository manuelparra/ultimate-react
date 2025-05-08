export type Todo = {
  id: number;
  name: string;
};

type addActionTodo = {
  type: "ADD"; // esto es por convención
  todo: Todo;
};

type deleteActionTodo = {
  type: "DELETE"; // esto es por convención
  todoId: number;
};

export type TodoAction = addActionTodo | deleteActionTodo;

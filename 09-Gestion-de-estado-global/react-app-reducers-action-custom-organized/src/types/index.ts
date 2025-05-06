export type Todo = {
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

export type TodoAction = addAction | deleteAction;

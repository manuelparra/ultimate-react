import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import type { Todo } from "./types";

type TodosStore = {
  todos: Todo[];
  add: (todo: Todo) => void;
  destroy: (id: number) => void;
  update: (id: number, todo: Todo) => void;
  total: number;
};

const useTodosStore = create<TodosStore>((set) => ({
  todos: [],
  total: 0,
  add: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
  destroy: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
      total: state.todos.length,
    })),
  update: (id, newTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id == id ? newTodo : todo)),
    })),
}));

if (process.env.NODE_ENV == "development") {
  mountStoreDevtool("Todos Store", useTodosStore);
}
export default useTodosStore;

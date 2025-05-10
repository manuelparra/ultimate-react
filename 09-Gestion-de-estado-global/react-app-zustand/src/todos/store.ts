import { create } from "zustand";
import type { Todo } from "./types";

type TodosStore = {
  todos: Todo[];
  add: (todo: Todo) => void;
  destroy: (id: number) => void;
  total: number;
};

const useTodosStore = create<TodosStore>((set) => ({
  todos: [],
  total: 0,
  add: (todo) => set((state) => ({ todos: [todo, ...state.todos] })),
  destroy: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodosStore;

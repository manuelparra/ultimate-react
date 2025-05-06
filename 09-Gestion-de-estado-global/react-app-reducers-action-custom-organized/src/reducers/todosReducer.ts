import type { Todo, TodoAction } from "../types";

export default function reducer(todos: Todo[], action: TodoAction) {
  switch (action.type) {
    case "ADD":
      return [action.todo, ...todos];
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.todoId);
    default:
      return todos;
  }
}

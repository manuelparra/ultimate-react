import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

type TodoQuery = {
  page: number;
  pageSize: number;
};

const queryTodos = (
  userId: number | undefined,
  query: TodoQuery,
): Promise<Todo[]> => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  return axios
    .get(url, {
      params: {
        userId,
        _start: (query.page - 1) * query.pageSize,
        _limit: query.pageSize,
      },
    })
    .then((response) => response.data);
};

function useTodos(userId: number | undefined, query: TodoQuery) {
  return useQuery({
    queryKey: userId ? ["users", userId, "todos", query] : ["todos", query],
    queryFn: () => queryTodos(userId, query),
    refetchOnMount: false, // aquí podemos cambiar la configuración solo para esta query
    placeholderData: keepPreviousData,
  });
}

export default useTodos;

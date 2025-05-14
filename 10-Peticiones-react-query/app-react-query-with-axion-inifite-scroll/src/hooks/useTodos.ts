import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

const queryTodos = (
  userId: number | undefined,
  pageParam: number,
  pageSize: number,
): Promise<Todo[]> => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  return axios
    .get(url, {
      params: {
        userId,
        _start: (pageParam - 1) * pageSize,
        _limit: pageSize,
      },
    })
    .then((response) => response.data);
};

function useTodos(userId: number | undefined, pageSize: number) {
  return useInfiniteQuery({
    queryKey: userId ? ["users", userId, "todos"] : ["todos"],
    queryFn: ({ pageParam }) => queryTodos(userId, pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
}

export default useTodos;

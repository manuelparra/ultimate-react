import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

const queryTodos = (userId: number | undefined): Promise<Todo[]> => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  return axios
    .get(url, { params: { userId } })
    .then((response) => response.data);
};

function useTodos(userId: number | undefined) {
  return useQuery({
    queryKey: userId ? ["users", userId, "todos"] : ["todos"],
    queryFn: () => queryTodos(userId),
    refetchOnMount: false, // aquí podemos cambiar la configuración solo para esta query
  });
}

export default useTodos;

import { useEffect, useState } from "react";

type T = {
  id: string;
  name: string;
};

export default function useAsyncAwait() {
  const [users, setUsers] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function hook() {
      const url = "https://jsonplaceholder.typicode.com/users";
      setLoading(true);

      try {
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`${response.status}`);
        const data: T[] = await response.json();
        setUsers(data);
        setError(undefined); // esto evita que se renderice nuevamente el componente
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    hook();

    return () => controller.abort();
  }, []);

  return { users, loading, error };
}

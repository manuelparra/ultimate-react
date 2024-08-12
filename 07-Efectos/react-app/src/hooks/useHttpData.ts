import { useEffect, useState } from "react";

export default function useHttpData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function hook() {
      setLoading(true);

      try {
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`${response.status}`);
        const data: T[] = await response.json();
        setData(data);
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

  return { data, loading, error };
}

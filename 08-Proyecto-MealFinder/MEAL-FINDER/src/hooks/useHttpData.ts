import axios from "axios";
import { useEffect, useState } from "react";

export default function useHttpData<T>(url: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // realizamos la llamada a la API themealdb.com/api/json/v1/
  useEffect(() => {
    let ignore = false; // lo utilizamos para evitar que se ejecute el código dentro del bloque if (!ignore) { ... } si el componente es desmontado

    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);

    axios
      .get<{ meals: T[] }>(url, { signal })
      .then(({ data }) => {
        if (!ignore) {
          setData(data.meals);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
      controller.abort();
    };
  }, []);

  return { loading, data };
}

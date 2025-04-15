import { useEffect, useState } from "react";
import axios from "axios";

export default function useHttpData<T>(url: string) {
  const [dataResponse, setDataResponse] = useState<T[]>([]);
  const [loadingResponse, setLoadingResponse] = useState(false);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const { signal } = controller;

    setLoadingResponse(true);

    axios
      .get<{ meals: T[] }>(url, { signal })
      .then(({ data }) => {
        if (!ignore) {
          setDataResponse(data.meals);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoadingResponse(false);
        }
      });

    return () => {
      ignore = true;
      controller.abort();
    };
  }, [url]);

  return { loadingResponse, setLoadingResponse, dataResponse, setDataResponse };
}

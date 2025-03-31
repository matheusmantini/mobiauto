import { useState, useEffect } from "react";

export function useFetchData<T>(
  url: string | null,
  requestOptions?: RequestInit
): [T | null, boolean, string | null] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { ...requestOptions });

        if (!response.ok) {
          throw new Error(`Erro ao buscar dados: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, requestOptions]);

  return [data, loading, error];
}

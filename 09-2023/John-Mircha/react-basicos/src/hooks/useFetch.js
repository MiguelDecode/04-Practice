import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        const res = await fetch(url);

        if (!res.ok)
          throw {
            err: true,
            status: res.status,
            statusText: res.statusText && "Ocurrío un error",
          };

        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError({ err: err });
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};

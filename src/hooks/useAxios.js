import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url, method = "get") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, useError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios[method](url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        set(error);
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useAxios;

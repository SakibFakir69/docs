import React, { useEffect, useState } from "react";

function useFetch({ api }) {
  /// https://jsonplaceholder.typicode.com/todos
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const splitApi = api?.split(":")[0];
    console.log(api, splitApi);

    if (api === "" || !api || !splitApi.includes("https")) {
      setError("Please Enter your api");

      return;
    }

    console.log("fetch api");

    const fetchApi = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(api);
        const data = await res.json();
        console.log(data?.data, "data", res);
        setData(data); /// set data
        setIsLoading(false); /// set loading false
      } catch (error) {
        setError(error.name || error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, [api]);
  // cal render when api change

  return { data, isLoading, error };
}

export default useFetch;

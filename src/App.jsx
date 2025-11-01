import { baseApi } from "./axios/api";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await baseApi.get("/todos");

        setData(result?.data);
      } catch (error) {
        if (error.response) {
          console.log(error);

          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(error);
        }
      }
    };
    fetchApi();
  }, []);

  return <div>total data: {data.length}</div>;
}

export default App;

import React from "react";
import useFetch from "./hooks/custom/useFetch";
import Loading from "./components/Loading";
import Erros from "./components/Erros";

function App() {
  
  const { data, isLoading, error } = useFetch({
    api: "https://jsonplaceholder.typicode.com/todos",
  });
  console.log(data)

  if (isLoading) {
    return <Loading/>
  }
  if (error) {
    return <Erros error={error}/>
  }

  return (
    <div>
      {data.length == 0 ? (
        <p>no data founded</p>
      ) : (
        <div>
          {data.map((item ) => (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

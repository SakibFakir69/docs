import React, { useRef, useState } from "react";

function App() {
  console.log("re-render")

  // useState react functional hook use for store data and manage state in component
  // every state change component re-render
  let initialValue = 0;

  const [state, setState] = useState(initialValue);
  // state => get inital value 
  // setState => we can setValue 
  /// useState (initialValue)

  console.log(state, " get initial value ");

  const handleReset = ()=>{
    setState(0);
    // setState value 0
  }

  return (
    <div>
      <p>{state}</p>
      {/* get update state value on ui  */}

      <button onClick={() => setState(state+1)}>Submit</button>
      {/* update state on button call , ui update and render component */}
      {state%2==0 ? <button onClick={handleReset}>Rest</button> : null}

    </div>
  );
}

export default App;





// import React , {useState} from "react";

// function App() {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: "Learn React", done: false },
//     { id: 2, title: "Build Project", done: false },
//   ]);


//   const handlUpdate = (id, title)=>{

//     setTasks(prev => prev.map((item)=> item.id===id ? {...item,title:title} : item))

//   }
  
//   console.log(tasks);

//   return <div>

//     {
//       tasks.map((item)=> (
//         <div key={item.key}>
//           <p>{item.title}</p>
//           <button onClick={()=> handlUpdate(item.id,'newTitle')}>update</button>

//         </div>
//       ))
//     }
//   </div>;
// }

// export default App;

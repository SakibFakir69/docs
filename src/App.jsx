import React from "react";

function App() {
  return (
    <div>
      <button className="bg-yellow-300 text-white hover:bg-sky-400 w-30 p-2 h-10">
        Hover me
      </button>
      <button className="p-3 w-30 border focus:outline-4">Focus</button>



      <div>
         {
          [1,2,3,5,6,7].map((item,key)=>(<div className="even:bg-red-400 first:
          p-2 odd:bg-green-300" key={key}>

            {item}

          </div>))
         }
      </div>
    </div>
  );
}

export default App;

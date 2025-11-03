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
          [1,2,3,5,6,7].map((item,key)=>(<div className=" first:
          p-2 odd:bg-green-300 nth-last-[2]:underline invalid:border-pink-500" key={key}>

            {item}

          </div>))
         }
      </div>

      {/* responisve */}


      <div className="border w-full md:w-1/2  flex  hover:bg-gray-50  text-wrap">

        <div className="h-20 w-20 border">

        </div>

        <p className="text-center md:text-left xl:text-red-400 indent-2.5">Title</p>
        <p className="text-center text-green-400 md:text-red-400 lg:text-yellow-300 xl:text-black 2xl:bg-green-300 font-sans leading-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet quia natus debitis sequi, illo provident molestias voluptas nam enim.</p>


      </div>

     <div className="grid grid-cols-12 gap-3">
  {[1, 2, 3, 4, 5].map((item, key) => (
    <div
      key={key}
      className={`border ${key === 0 ? 'col-span-6' : 'col-span-2'}`}
    >
      <p>{item}</p>
    </div>
  ))}
</div>






    </div>
  );
}

export default App;

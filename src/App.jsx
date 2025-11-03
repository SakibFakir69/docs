import React from "react";

function App() {
  return (
    <div>
      <button className="bg-yellow-300 text-white hover:bg-sky-400 w-30 p-2 h-10">
        Hover me
      </button>
      <button className="p-3 w-30 border focus:outline-4">Focus</button>

      <div>
        {[1, 2, 3, 5, 6, 7].map((item, key) => (
          <div
            className=" first:
          p-2 odd:bg-green-300 nth-last-[2]:underline invalid:border-pink-500 flex flex-col"
            key={key}
          >
            {item}
          </div>
        ))}
      </div>

      {/* responisve */}

      <div className="border w-full md:w-1/2  flex  hover:bg-gray-50  text-wrap">
        <div className="h-20 w-20 border"></div>

        <p className="text-center md:text-left xl:text-red-400 indent-2.5">
          Title
        </p>
        <p className="text-center text-green-400 md:text-red-400 lg:text-yellow-300 xl:text-black 2xl:bg-green-300 font-sans leading-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          amet quia natus debitis sequi, illo provident molestias voluptas nam
          enim.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-3">
        {[1, 2, 3, 4, 5].map((item, key) => (
          <div
            key={key}
            className={`border ${key === 0 ? "col-span-6" : "col-span-2"}`}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>

      {[10, 20, 30].map((item) => (
        <div className="border m-4 border-green-400  space-x-3.5">
          <p className="p-4 border h-20 w-20">{item}</p>
        </div>
      ))}




      <div>

        <p className="inline border">welcome</p>
        <p className="block border"> welcome 2</p>
      </div>

      <div className="relative shadow-2xl/40">
        <div className="h-20 w-20 bg-red-300 z-50">
          Box
        </div>

        <div className="border backdrop-blur-3xl filter h-20 w-40 absolute top-10 -z-50">
          overflow
        </div>
      </div>


      {/* typo */}

      <div>
        <p className="text-5xl antialiased font-bold tracking-wide leading-1 underline indent-2.5 ">Text welcome</p>

      </div>
    </div>
  );
}

export default App;

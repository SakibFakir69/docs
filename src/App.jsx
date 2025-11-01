import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router";
import { baseApi } from "./axios/api";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  /// navigate('/home') /// if condition success push here
  const loc  = useLocation().pathname;
  // get current location 
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

  return <div>

    <nav className="w-full border flex justify-center list-none gap-x-3">
      {/* navlink gave isActive class but link not have is active class */}
      <li>
        <NavLink className={({isActive})=> isActive ? "text-green-500":"text-black"} to={'/home'}>Home</NavLink>
      </li>
       <li>
        <NavLink className={({isActive})=> isActive ? "text-green-500":'text-black'} to={'/about'}>About</NavLink>
      </li>
       <li>
        <NavLink  className={({isActive})=> isActive ? "text-green-500":"text-black"} to={'/dashboard'}>Dashboard</NavLink>
      </li>
       <li>
        <NavLink  className={({isActive})=> isActive ? "text-green-500":"text-black"}
         to={'/users/10'}>users</NavLink>
      </li>

    </nav>

    <main>
      <Outlet/>
    </main>
  
  </div>;
}

export default App;

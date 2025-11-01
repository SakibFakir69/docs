import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../components/Home";
import About from "../components/About";

import Details from "../components/Details";
import { lazy , } from "react";
import Dashboard from "../components/Dashboard";
import { Suspense } from "react";

const LazyDashboard =lazy(()=> import("../components/Dashboard"))

const router = createBrowserRouter([
  // take array
  // inside array of object { path: "" , element:}

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <LazyDashboard />
          </Suspense>
        ),
      },
      {
        path:'/users/:id',
        element:<Details/>
      }
    ],
  },
]);

export default router;

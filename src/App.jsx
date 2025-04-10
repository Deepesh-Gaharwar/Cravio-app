import React from "react";
import Body from "./Components/Body/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Layout from "./Layout/Layout";
import RestMenuPage from "./Pages/RestMenuPage";

const App = () => { 
  return (
    <div className="app ">

     <Layout />

    </div>
  )
}

// routing configuration

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: < App />,

    children : [
      {
        path: "/",
        element : <Body />
      },
      {
        path : "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path : "/restaurants/:resId",
        element:  <RestMenuPage /> 
      },
    ],

    errorElement : <Error /> 
  },
  
]);

export default appRouter;

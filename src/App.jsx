import React,{lazy, Suspense, useEffect} from "react";
import Body from "./Components/Body/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Layout from "./Layout/Layout";
import RestMenuPage from "./Pages/RestMenuPage";
// import Grocery from "./Components/Grocery/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Pages/Cart";
import { ToastContainer } from "react-toastify";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import { useState } from "react";
import { auth } from "./utils/firebase";


 
// lazy loading 
 const Grocery = lazy( () => import("./Components/Grocery/Grocery"));  // dynamic import 


const App = () => { 
   
  const [,setUser] = useState();

  useEffect ( () => {
    auth.onAuthStateChanged ( (user) => {
       
      setUser(user);
    });

  }, []) ;

  return (

   <Provider store={appStore} >
      <div className="app ">

        <Layout />

        <ToastContainer position="top-right" autoClose={3000} />

      </div>

    </Provider>
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
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}     >   <Grocery />  </Suspense>
      },
      {
        path : "/restaurants/:resId",
        element:  <RestMenuPage /> 
      },
      {
        path : "/cart",
        element:  <Cart /> 
      },
      {
        path : "/login",
        element : <Login />
      },{
        path : "/register",
        element : <Register />
      },
      {
        path : "/profile",
        element : <Profile />
      }
    ],

    errorElement : <Error /> 
  },
  
]);

export default appRouter;

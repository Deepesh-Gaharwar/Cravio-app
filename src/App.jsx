import React,{lazy, Suspense, useEffect} from "react";
import Body from "./Components/Body/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Layout from "./Layout/Layout";
import RestMenuPage from "./Pages/RestMenuPage";
import { useDispatch } from "react-redux";
import Cart from "./Pages/Cart";
import { ToastContainer } from "react-toastify";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser,logoutUser } from "./utils/authSlice";
import ScrollToTop from "./utils/ScrollToTop";
import { useLocation } from "react-router-dom";
import ThankYou from "./Pages/ThankYou/ThankYou";


 
// lazy loading 
 const Grocery = lazy( () => import("./Components/Grocery/Grocery"));  // dynamic import 

const App = () => { 

  const dispatch = useDispatch();

  const location = useLocation();
   
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        dispatch(setUser(user));
      }else{
        dispatch(logoutUser());
      }
    }) ;

    return () => unsubscribe();
  }, [dispatch]) ;

  return (

    <div className="app ">  
         <ScrollToTop />  

          <Layout />

          <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
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
        element: (
           <Suspense fallback={<h1>Loading...</h1>} >   <Grocery />  
           </Suspense>
        ),
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
      },
      {
        path : "/register",
        element : <Register />
      },
      {
        path : "/thank-you",
        element : <ThankYou />
      }
      
    ],

    errorElement : <Error /> 
  },
  
]);


export default appRouter;

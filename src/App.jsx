import React from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

const App = () => {
  return (
    <div className="app ">

{/* Ye remove krna h render krne k liye kiya h use  */}
       <Header /> 

{/* Remove krna h body baad m */}
     <Body />

    </div>
  )
}

export default App

// UNIT TESTING

import {it} from "@jest/globals"
import Header from "../Header/Header"
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { MemoryRouter } from "react-router-dom";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom" 

// we uses MemoryRouter in the place of BrowserRouter => BrowserRuter for vite + react testing library + jest + jsDOM -> it doesnot recognises the Link , so we uses this


  it("Should load Header component with a login button",() => {
   
   // render(<Header />) ; // this will throws an error 

   // we will have to provide it the redux toolkit -> store

    render(

    <MemoryRouter >  
        <Provider store={appStore} >  

            <Header />
            
        </Provider>

      </MemoryRouter>    
    );

    const loginButton = screen.getByRole("button", { name: /login/i }); // /login/i => case-insensitive regex (i flag)
expect(loginButton).toBeInTheDocument();


 }); 





it("Should render Header Component with a Cart item", () => {
       
    render(

        <MemoryRouter >  
            <Provider store={appStore} >  
    
                <Header />
                
            </Provider>
    
          </MemoryRouter>    
        );

        const cartItems = screen.getByText("Cart"); // (/Cart/) => regex

        expect(cartItems).toBeInTheDocument();
});




 it("Should change Login button to Logout on click",() => {
   
   // render(<Header />) ; // this will throws an error 

   // we will have to provide it the redux toolkit -> store

    render(

    <MemoryRouter >  
        <Provider store={appStore} >  

            <Header />
            
        </Provider>

      </MemoryRouter>    
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
  
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
 }); 

 

import RestMenuPage from "../../Pages/RestMenuPage";
import { act } from "react";
import { it,jest} from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// Correct fetch mocking
globalThis.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

it("Should Load Restaurant Menu Component", async () => {
    await act(async () => {
        render(
         <BrowserRouter >   
            <Provider store={appStore}>
                <Header />
                <RestMenuPage />
            </Provider>
          </BrowserRouter>  
        );
    });

    console.log(await screen.findAllByText(/Korean/i)); 


    const accordionHeader = await screen.findByText("Korean Tangy Chicken Roll");

     fireEvent.click(accordionHeader);


  //  const addBtn = await screen.getByText("Add")  
    
  //  fireEvent.click(addBtn[0]);

  //  expect(screen.getByText("Cart 1")).toBe;

  // clear cart


  //  fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}))

  // expect(screen.getBytext("Cart is empty. Add Items to the cart!")).toBeInTheDocument();
    
});

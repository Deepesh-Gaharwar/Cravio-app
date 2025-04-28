// INTEGRATION  TESTING


import {it,expect,jest} from "@jest/globals"
import { render, screen,fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import Body from "../Body/Body"
import MOCK_DATA from "../mocks/mocksRestListdata.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"


// we are faking the fetch call here , because these tests are running on the jsDOM -> browser like , but donot have the superPowers of the Browser
globalThis.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
}) ;

  
it("Should Search Res List for burger text input", async () => {
   
  await act(async () => 
    render(
    <BrowserRouter>

        <Body />

    </BrowserRouter>    
)
  ) ;

  const cardsBeforeSearch = screen.getAllByTestId("resCard")

  expect(cardsBeforeSearch.length).toBe(20);
  
  const searchBtn = screen.getByRole("button", {name : "Search"})

  const searchInput = screen.getByTestId("searchInput")

 // console.log(searchInput)

  fireEvent.change(searchInput , { target : { value : "burger"}})

  fireEvent.click(searchBtn);
  

  expect(searchBtn).toBeInTheDocument();

  // screen should loads 2 cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
  
   
})


it("Should filter Top Rated Restaurant", async () => {
   
  await act(async () => 
    render(
    <BrowserRouter>

        <Body />

    </BrowserRouter>    
)
  ) ;

   const cardsBeforeFilter = screen.getAllByTestId("resCard")  ;

   expect(cardsBeforeFilter.length).toBe(20);

   const topRatedBtn = screen.getByRole("button" , {name : "Top Rated Restaurants"});

   fireEvent.click(topRatedBtn);

   const cardsAfterFilter = screen.getAllByTestId("resCard")

   expect(cardsAfterFilter.length).toBe(5);
  
   
})
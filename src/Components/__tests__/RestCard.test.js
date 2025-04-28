// UNIT TESTING

import {it,expect} from "@jest/globals"
import { render, screen } from "@testing-library/react"
import RestCard from "../RestCard/RestCard"
import MOCK_DATA from "../mocks/restCard.json"
import "@testing-library/jest-dom"

it("should render RestCard component with props data" , () => {
     
    render(<RestCard resData={MOCK_DATA}/>);

   const name = screen.getByText("KFC");

   expect(name).toBeInTheDocument();

  
})
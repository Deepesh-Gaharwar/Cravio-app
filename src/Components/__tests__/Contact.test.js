// UNIT TESTING

import { render, screen } from "@testing-library/react"
import Contact from "../../Pages/Contact"
import { test, expect ,describe,it,} from "@jest/globals";

// import {beforeAll, beforeEach, afterAll, afterEach} from "@jest/globals"


// it will grouped the multiple test case in a single => we can have multiple describe and also nested describes => Test cases also works fine without the describe and grouping all these

describe("Contact Us page test case", () => {

 /*  

   // before all these test cases this will run
   beforeAll( () => {
      console.log("Before All");
   })

   // before each test before each will run
   beforeEach(() => {
      console.log("Before Each");
   })

   // after all => it will run after completing all test cases successfully
   afterAll(() => {
      console.log("After All")
   })

   // after each  => called after each test case
   afterEach( () => {
      console.log("After Each");
   })
 */     
   

 // test => it -> we can also write it in the place of test function --> it will also works fine   => these both are the same things
 
    test("Should load contact inside contact component", () => {


        // we have render this component in the jsDOM
        render(<Contact />);
    
       const heading = screen.getByRole("heading") ;
    
       expect(heading).toBeInTheDocument(); // this will check that heading is inside document/screen or not
    
    }) 
    
    
    it("Should load button inside contact component", () => {
    
    
        // we have render this component in the jsDOM
        render(<Contact />);
    
       const button = screen.getByText("Send Message") ;
    
       expect(button).toBeInTheDocument(); // this will check that button is inside document/screen or not
    
    }) 
    
    
    test("Should load 2 input boxes insie contact component", () => {
    
    
        // we have render this component in the jsDOM
        render(<Contact />);
    
     // querying   
       const inputBoxes = screen.getAllByRole("textbox") ;// getAllByRole => for multiple inputs=> checks input tag
    
      //  console.log(inputBoxes.length) // returns jsx element -> react fibre nodes
    
       expect(inputBoxes.length).toBe(3);
    
    }) 

})


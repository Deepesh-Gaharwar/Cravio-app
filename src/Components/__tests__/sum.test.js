// SAMPLE TEST FUNCTION

// test("string",callback func) => test function

import { test, expect } from "@jest/globals"; 
import { sum } from "../sum";

test("Sum function should calculate the sum of two functions",() => {
    
   const result = sum(3,4);

 // Assertion
   expect(result).toBe(7); // this is not mandatory
})
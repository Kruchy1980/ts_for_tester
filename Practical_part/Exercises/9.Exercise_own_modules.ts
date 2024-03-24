// THAT PART IS DEDICAGED TO OWN MODULES IN TS - "exercise_8"
// your task:
//
// 1. Create new module "data.helpers" in directory /helpers
// 2. Prepare a function with name getBiggestNumber() that:
// -- will receive one parameter "values" that is a array of numbers
// -- will return a number
// -- inside function check values in given list and will return largest number
// 3. Use that function in this script:
// -- pass a list of values and check if function returns largest number
import { getBiggestNumber } from './helpers/data.helpers';

// to test your solution in terminal you can run following command:
// npm run ex3-1

const values = [8, 4, 3, 4, 2, -2, 2];
let largestValue: number;
//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

// Assigning max value to largestValue
largestValue = getBiggestNumber(values);

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

console.log("Largest value of ", values, " is ", largestValue);

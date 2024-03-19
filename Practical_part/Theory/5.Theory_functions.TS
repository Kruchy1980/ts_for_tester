// THEORY NO 2 - FUNCTIONS
//======= PART 1 ===========
console.log("\n--------Functions (Named functions)  PART 1--------\n")

// To create function you have to use following pattern:
// function [name]([parameter]:[type]): [returned type] {
//     [body of function]
//     [optional return some value]
// }

// simplest example of function without any parameters and no return:

function printHello(): void {
    console.log("Hello World!")
}

// function that does not return anything - returns VOID

// to use above functions just call it by name (same as in JavaScript):
printHello()

// on console 👀 you will get:
// Hello World!

// to see what function printHello() returns we can use console.log():
console.log("printHello() returns:", printHello())

// on console 👀 you will get:
// printHello() returns: undefined

// Other example of function, that returns string (with type added):
function getHello(): string {
    return "Hello World!"
}

// to use functions just call it by name and assign result to new variable:
const hello = getHello()
console.log("result of getHello():", hello)

// on console 👀 you will get:
// result of getHello(): Hello World!

console.log("\n--------Function and parameters--------\n")

// more complex example with parameters - both numbers and number returned:
function addTwoNumbersNotOptimal(numberOne: number, numberTwo: number): number {
    const result = numberOne + numberTwo
    return result
}

// or shorter:
function addTwoNumbers(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo
}

// to use functions just call them by name and pass parameters:
const result1 = addTwoNumbers(1, 2)
// result of that function will be stored in variable 'result1' and now we can display its value:
console.log("result of 1 + 2:", result1)

// on console 👀 you will get:
// result of 1 + 2: 3

// in TypeScript you can not pass any other type than defined!
// so if you try to pass string - you will get error:
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// const result2 = addTwoNumbers('a', 'b') // TODO: uncomment to see error in IDE ⛔

console.log("\n--------Function and type 'any'--------\n")

// you can create function that will consume any parameters and process them using any type:
function addTwoValues(valueOne: any, valueTwo: any): number {
    return valueOne + valueTwo
}

const resultFromAddTwoValues = addTwoValues(1, "test")

// result of that function will be stored in variable 'result1' and now we can display its value:
console.log('result of addTwoValues(1, "test"):', resultFromAddTwoValues)
// but this is hack because any type should be avoided! ⛔

// ======== PART 2 =========
console.log("\n--------Functions with optional and default parameters  PART 2--------\n")

// We can create optional and default parameters in functions
// default parameters will have its type detected by TypeScript:
function addNewNumbers(numberOne: number, numberTwo = 2): number {
    // numberTwo is optional and has default value = 2
    return numberOne + numberTwo
}

// we can use function addNewNumbers with only one parameter, and second will have default value:
let resultSum = addNewNumbers(1)
console.log("result of addNewNumbers(1):", resultSum)

// on console 👀 you will get:
// result of addNewNumbers(1): 3

// you can also override default value:
resultSum = addNewNumbers(1, 4)
console.log("result of addNewNumbers(1, 4):", resultSum)

// Lets try declaring new function:
function doSomething(numberOne: number): void {
    console.log("numberOne for addTwoStrings has value:", numberOne)
}

// what about passing 0 parameters?
// you will get error:
// Expected 1 arguments, but got 0.ts(2554)
// 5.functions.ts(22, 22): An argument for 'numberOne' was not provided.
// doSomething() // TODO: uncomment to see error in IDE ⛔

console.log("\n--------Functions (Anonymous functions)--------\n")

// we can assign function to variable:
const addNumbers = function (x: number, y: number): number {
    return x + y
}

// and then use variable as function:
const addNumbersResult = addNumbers(2, 4)

console.log("result of addNumbers(2, 4):", addNumbersResult)
// on console 👀 you will get:
// result of addNumbers(2, 4): 6

console.log("\n--------Functions (Arrow functions)--------\n")

// we can assign function to variable:
const multiplyNumbers = (x: number, y: number): number => {
    return x * y
}

// and then use variable as function:
const multiplyNumbersResult = multiplyNumbers(2, 4)

console.log("result of multiplyNumbers(2, 4):", multiplyNumbersResult)
// on console 👀 you will get:
// result of multiplyNumbers(2, 4): 8
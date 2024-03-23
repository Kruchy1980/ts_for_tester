// THE EXERCISE WITH INTERFASE
// your task:
// 1. Declare an interface with name UserData and fields:
// - id with type number
// - fullName with type string
// - pass with type string
// - optional field data with type string
// 2. Create two objects of type UserData:
// - fill them with You own data
// 3. Display on console both objects
// 4. Change value of id in both objects:
// - change id from first object with value from second object
// - change id from second object with value from first object
// 4. Display on console both objects

// to test your solution in terminal you can run following command:
// npm run ex2-1

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------
// Interface declaration
interface UserData {
    id: number;
    fullName: string;
    pass: string | number;
    age: number;
    optional?: string;
}
// Adding values to interface full object
const user_1: UserData = {
    id: 1,
    fullName: 'John Doe',
    pass: 'a#a%a_K0t#',
    age: 24,
    optional: 'The first user from interface',
}
// Adding other object without optional field
const user_2: UserData = {
    id: 2,
    fullName: 'Kate Doe',
    pass: 'Ol!gArc#y',
    age: 24,
}
// 3_A. Display on console both objects - I. Solution 
// console.log(user_1);
// console.log(user_2);
// 3_B. Display on console both objects - II. Solution 
// Prepare function for printing the data:
const printUserData = (id: number, name: string, password: string | number, age: number, text = 'No Data' ): void => {
    console.log(`id: ${id} \n name: ${name} \n pass: ${password} \n age: ${age} \n text: ${text} \n`)
}; 
// Use function for displaying data for both interfaces
printUserData(user_1.id, user_1.fullName, user_1.pass, user_1.age, user_1.optional);
printUserData(user_2.id, user_2.fullName, user_2.pass, user_2.age);

// 4. Change value of id in both objects:
// - change id from first object with value from second object
// - change id from second object with value from first object
const changedId = user_1.id;
user_1.id = user_2.id;
user_2.id = changedId;
// 4. Display on console both objects
printUserData(user_1.id, user_1.fullName, user_1.pass, user_1.age, user_1.optional);
printUserData(user_2.id, user_2.fullName, user_2.pass, user_2.age);

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see (sample output):
// { id: 1, fullName: 'John', pass: '1234', data: 'Some data' }
// { id: 2, fullName: 'Bob', pass: '4321' }

// after change of IDs:

// { id: 2, fullName: 'John', pass: '1234', data: 'Some data' }
// { id: 1, fullName: 'Bob', pass: '4321'
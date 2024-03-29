//  IN THIS FILE THE OWN CREATED MODULE IS ADDED
// 1. Create new module "data.helpers" in directory /helpers
// 2. Prepare a function with name getBiggestNumber() that:
// -- will receive one parameter "values" that is a array of numbers
// -- will return a number
// -- inside function check values in given list and will return largest number
// const values = [8, 4, 38, 4, 2, -2, 2];
// Function for verification of max number in array
export const getBiggestNumber = (data: number[]): number => {
    let maxNum = 0;
    for (let i=0; i < data.length; i++) {
        if (data[i] > maxNum) {
            maxNum = data[i];
        };
    };
    return maxNum;
}
// Function for verification of min number in array using spread operator
export const getSmallerNumber = (data: number[]): number => {
    let result = Math.min(...data);
    return result
}
// console.log(getBiggestNumber(values));
// console.log(getSmallerNumber(values));

// EXERCISE NO 2 - FUNCTIONS
// your task:
// 1. Declare a function:
// - with name "formatStrings"
// - with two parameters of type string - first named pageName and second - componentName
// - function should return string
// - inside function form a sentence: "Opening page 'pageName' and checking 'componentName'"
// 2. Invoke Your function with values "LoginPage" and "UserName" and assign result to new variable "formatStringsOutput"
// 3. Print on console result from "formatStringsOutput"
// 4. Declare similar function as in step 1 but:
// - make it Anonymous function
// - assign function to variable named formatStringsAnonymous
// 5. Invoke Your Anonymous function with values "HomePage" and "UserName" and assign result to new variable "formatStringsAnonymousOutput"
// 6. Print on console result from "formatStringsAnonymousOutput"
// 7. Declare similar function as in step 1 but:
// - make it Arrow function
// - assign function to variable named formatStringsArrow
// 8. Invoke Your Arrow function with values "ContactPage" and "UserName" and assign result to new variable "formatStringsArrowOutput"
// 9. Print on console result from "formatStringsArrowOutput"

// TIP: Remember about types!

// to test your solution in terminal you can run following command:
// npm run ex1-2

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------
// 1. Arrow function declaration SOLUTION_1
const formatStrings = (par_1: string, par_2: string): string => {
    return `Opening page '${par_1}' and checking '${par_2}'`;
}
console.log(formatStrings('LoginPage', 'UserName'));
// 2. Arrow function declaration SOLUTION_2_A
function formatStrings1(par_1: string, par_2: string): any {
    return `Opening page '${par_1}' and checking '${par_2}'`;
}
const formatStringsOutput = formatStrings1('HomePage', 'UserName');
console.log(formatStringsOutput);
// 3. Arrow function declaration SOLUTION_2_B
function formatStrings2(par_1: any, par_2: any): string {
    return `Opening page '${par_1}' and checking '${par_2}'`;
}
const formatStringsOutput_1 = formatStrings2('HomePage- Any', 'UserName- Any');
console.log(formatStringsOutput_1);
// 4. Arrow function declaration SOLUTION_3 - Anonymous
const anonymousFunctionOutput = function() {
    return `Opening page 'ContactPage' and checking 'UserName'`;
}
console.log(anonymousFunctionOutput());
// 4. Arrow function declaration SOLUTION_3 - Anonymous plus Default value
const anonymousFunctionOutput_1 = function(par1: string, par2 = 'UserName'): string {
    return `Opening page '${par1}' and checking '${par2}'`;
}
console.log(anonymousFunctionOutput_1('PricingPage'));

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// Opening page 'LoginPage' and checking 'UserName'
// Opening page 'HomePage' and checking 'UserName'
// Opening page 'ContactPage' and checking 'UserName'
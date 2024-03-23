// THE EXERCISE ABOUT CLASS-OBJECT-MODEL "exercise_5"
// your task:
// 1. Declare class with following details:
// - name: TransactionData
// - with property id of type string
// - with property version of type number
// - with constructor:
// --- that needs one parameter to set value of property id
// --- and sets version to 0
// - with one method:
// --- name: doOperation()
// --- prints information about property version value
// --- method increase value of property version by 1
// --- returns value of version
// 2. Create object from class TransactionData
// 3. Invoke method doOperation() 4 times
// 4. Print return value of last invoked doOperation()

// TIP: Remember about types!

// to test your solution in terminal you can run following command:
// npm run ex2-2

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------
// 1. Declare class with following details:
// - name: TransactionData
// - with property id of type string
// - with property version of type number
// - with constructor:
// --- that needs one parameter to set value of property id
// --- and sets version to 0
// - with one method:
// --- name: doOperation()
// --- prints information about property version value
// --- method increase value of property version by 1
// --- returns value of version
class TransactionData {
    // Class values - access modificators
    // private - visible only for the specific class
    // public - visible everywhere
    // protected - visible inside class and all inheritated classes
    private id: string;
    public version: number;
    // Constructor
    constructor(id: string) {
        this.id = id
        this.version = 0;
    }
    // Class method - arrow function
    // doOperation = (): string | number => {
    //     // console.log(`Last value of version: ${this.version}`);
    //     this.version++;
    //     return `Last value of version: ${this.version}`;
    // }
    // Class method - literal function
    public doOperation(): number { //<-- always mus fit to returned value - version is number 
        console.log(`Last value of version: ${this.version}`);
        this.version++;
        return this.version;
    }
}
// 2. Create object from class TransactionData
const trans_1 = new TransactionData('1');

// 3. Invoke method doOperation() 4 times
for (let i = 0; i < 4; i++) {
    trans_1.doOperation();
};
// 4. Print return value of last invoked doOperation()
console.log(trans_1.version);
// Out of the exercise
// console.log(trans_1.doOperation());
// console.log(trans_1.doOperation());
// console.log(trans_1.doOperation());
// console.log(trans_1.doOperation());
// trans_1.doOperation();
// trans_1.doOperation();
// trans_1.doOperation();
// trans_1.doOperation();

//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// Last value of version: 0
// Last value of version: 1
// Last value of version: 2
// Last value of version: 3
// 4
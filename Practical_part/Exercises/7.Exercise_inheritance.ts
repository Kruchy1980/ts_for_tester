// THIS EXERCISE IS DEDICATED TO INHERITANCE AND CASTING (Rzutowanie) BETWEEN CLASSES - "exercise_6"
/* Casting is used for
1. Changing JSON types
2. Maintenance of JSON Data
3. Mutating Interfaces
4. Work with different library versions
5. Avoiding version compilations 
*/
// your task:
// 1. Declare first class with following details:
// - name: Animal
// - with property type of type string
// - with protected property age of type number with default value 0
// - with constructor:
// --- that needs one parameter to set value of property type
// 2. Declare second class with following details:
// - name: Cat
// - this class inherits after Animal class
// - with constructor:
// --- that needs zero parameters
// --- that sets type to "cat" in super constructor
// - with method:
// --- name: increaseAge()
// --- this method increments value of age by one
// - with method:
// --- name: present()
// --- this should return string In this format: "My type is cat and my age is 2"
// 3. Create object from class Cat
// 4. Invoke method increaseAge() 2 times
// 5. Print return value of method present()

// to test your solution in terminal you can run following command:
// npm run ex2-3

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------
// 1. Declare first class with following details:
// - name: Animal
// - with property type of type string
// - with protected property age of type number with default value 0
// - with constructor:
// --- that needs one parameter to set value of property type
class Animal {
    // Class property
    public type: string;
    protected age: number;
    // Constructor
    constructor(type: string) {
        this.type = type;
        this.age = 0;
    }
}
// 2. Declare second class with following details:
// - name: Cat
// - this class inherits after Animal class
// - with constructor:
// --- that needs zero parameters
// --- that sets type to "cat" in super constructor
// - with method:
// --- name: increaseAge()
// --- this method increments value of age by one
// - with method:
// --- name: present()
// --- this should return string In this format: "My type is cat and my age is 2"
class Cat extends Animal {
    // Constructor must be declared
    constructor() {
        super('cat');
    }
    // Method for increment animal age by 1
    public increaseAge = (): void => {
        this.age++;
    }
    public present() {
        return `My type is ${this.type} and my age is ${this.age}`;
    }
}

// 3. Create object from class Cat
const animal_1 = new Cat();
// 4. Invoke method increaseAge() 2 times
animal_1.increaseAge();
animal_1.increaseAge();
// 5. Print return value of method present()
console.log(animal_1.present());
//// -----------------------DON'T MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise
// Expected output:
// On console 👀 you should see:
// My type is cat and my age is 2

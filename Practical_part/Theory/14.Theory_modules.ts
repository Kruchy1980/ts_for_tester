// make sure, that this object has 'export' in front!
// we can import multiple elements at once:
import {
  printArrayOnConsoleWithFor,
  printArrayOnConsoleWithForeach,
} from './helpers/sample.module';
// Imports in TypeScript works the same way as in JavaScript.
// Lets quickly revise this topic...
// to import data from another module use import:
import { sampleArray } from './helpers/sample.module';

// THAT PART IS DEDICATED TO OWN MODULES WHICH CAN BE IMPORTED INTO OUR CODE - "theory_13"
console.log("\n--------Modules and imports--------\n")

// Good practice: we put all imports at the top of the file

console.log("imported sampleArray:", sampleArray)
// on console 👀 you will get:
// imported sampleArray: [ 'Python', 'Java', 'JavaScript', 'C#' ]

// after importing functions, we can use it as before:
printArrayOnConsoleWithFor(sampleArray)
// on console 👀 you will get:
// printArrayOnConsoleWithFor: Python
// printArrayOnConsoleWithFor: Java
// printArrayOnConsoleWithFor: JavaScript
// printArrayOnConsoleWithFor: C#

printArrayOnConsoleWithForeach(sampleArray)
// on console 👀 you will get:
// printArrayOnConsoleWithForeach: Python
// printArrayOnConsoleWithForeach: Java
// printArrayOnConsoleWithForeach: JavaScript
// printArrayOnConsoleWithForeach: C#

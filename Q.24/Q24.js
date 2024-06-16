"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
Object.defineProperty(exports, "__esModule", { value: true });
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
// • Test whether an item is not in a array
//equality and inequality
let name1 = "Naeem";
let name2 = "Raheel";
console.log(name1 === name2);
console.log(name1 !== name2);
//Tests using the lower case function
let mixedCaseString = "Naeem Warsi";
console.log(mixedCaseString.toLowerCase() === "naeem warsi");
console.log(mixedCaseString.toLowerCase() === "Naeem Warsi"); //false
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 6;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// Tests using "and" and "or" operators
let condition1 = true;
let condition2 = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);
// // Test whether an item is in a array
const Fruits = ["Mango", "Orange", "Banana", "Melon"];
console.log(Fruits.includes("Mango")); // true
console.log(Fruits.includes("mango")); // false
// // Test whether an item is not in a array
const friendNames = ["Naeem", "Raheel", "Umair", "Meer"];
console.log(friendNames.includes("Naeem")); //true
console.log(friendNames.includes("Amjad")); // false

"use strict";
//Q.16 More Guests: You just found a bigger dinner table, so now more space isavailable. Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found abigger dinner table.
//• Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
//Q .15 list let guestArr:string[] = ["Meer","Amjad","Abdul Basit","Saqib"];
let guestArr = ["Meer", "Amjad", "Abdul Basit", "Saqib"];
console.log("Great news! I found a bigger dinner table!");
// add one new guest to the begining ;
let guestBegin = "Owais";
guestArr.unshift(guestBegin);
//console.log(guestArr)
// add one new guest to the Middle ;
let middleGuest = "Raheel";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
//console.log(guestArr)
// use append add one new guest to the end
guestArr.push("Husnain");
console.log(guestArr);
guestArr.map((item) => (console.log(`Dear ${item},you are cordially invited to a dinner`)));

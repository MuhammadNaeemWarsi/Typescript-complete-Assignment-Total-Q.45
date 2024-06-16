"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite them to dinner.
// // • Print a message to each of the two people still on your list, letting them know they’re still invited.
let guestArr = ["Meer", "Amjad", "Abdul Basit", "Saqib"];
// console.log("I can invite two people at dinner due to table not arrive")
// while(guestArr.length>2) { 
//     let removeGuest = guestArr.pop()
//     console.log(`Dear ${removeGuest},you are not invited to dinner`)
// }
// guestArr.map((item) =>
// console.log(`Dear ${item},you are still invited to dinner`)
// );
// guestArr.pop()
// console.log(guestArr)
console.log("Unfortunately, I can only invite two people for dinner.");
while (guestArr.length > 2) {
    let removedGuest = guestArr.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guestArr.map((guestArr => console.log(`Dear ${guestArr}, you're still invited to dinner.`)));
guestArr.splice(0, guestArr.length);
console.log(guestArr); // Shows an empty list

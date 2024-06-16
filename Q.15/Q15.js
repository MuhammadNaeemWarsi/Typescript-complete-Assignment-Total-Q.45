"use strict";
// Q.14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
//Q.15  Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let guestArr = ["Meer", "Amjad", "Abdul Basit", "Umair"];
//let guestArr:string[] = ["Meer","Amjad","Abdul Basit","Saqib"];
let canNotAttend = "Umair";
console.log(`${canNotAttend} can not make it for dinner`);
let newGuest = "Saqib";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((item) => console.log(`Dear ${item}, You are cordially invited to a Dinner`));

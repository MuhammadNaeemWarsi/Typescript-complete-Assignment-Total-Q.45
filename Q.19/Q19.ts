
//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//of people you are inviting to dinner.

let guestArr = ["Meer", "Amjad", "Abdul Basit", "Saqib"];

while(guestArr.length>2) { 
    let removeGuest = guestArr.pop()
    console.log(`Dear ${removeGuest},you are not invited to dinner`)
}
guestArr.map((item) =>
console.log(`Dear ${item},you are still invited to dinner`)
);

guestArr.pop()
console.log(guestArr)
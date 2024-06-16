//19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
//of people you are inviting to dinner.
var guestArr = ["Meer", "Amjad", "Abdul Basit", "Saqib"];
while (guestArr.length > 2) {
    var removeGuest = guestArr.pop();
    console.log("Dear ".concat(removeGuest, ",you are not invited to dinner"));
}
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ",you are still invited to dinner"));
});
guestArr.pop();
console.log(guestArr);

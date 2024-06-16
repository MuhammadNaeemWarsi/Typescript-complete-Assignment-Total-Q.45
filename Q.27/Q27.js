"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// If the alien is green (version 1)
// let alien_color : string ="green"
// if (alien_color ==="green"){
//     console.log("you earned 5 points")
// }
// else if (alien_color === "yellow") {
//     console.log("you earned 10 points")
// } 
// else if (alien_color === "red") {
//     console.log("you earned 15 points")
// }
// else { console.log("not alien color")
// }
// // If the alien is yellow (version 2)
//  alien_color ="yellow"
// if (alien_color ==="green"){
//     console.log("you earned 5 points")
// }
// else if (alien_color === "yellow") {
//     console.log("you earned 10 points")
// } 
// else if (alien_color === "red") {
//     console.log("you earned 15 points")
// }
// else { console.log("not alien color")
// }
// // If the alien is red (version 3)
// alien_color ="red"
// if (alien_color ==="green"){
//     console.log("you earned 5 points")
// }
// else if (alien_color === "yellow") {
//     console.log("you earned 10 points")
// } 
// else if (alien_color === "red") {
//     console.log("you earned 15 points")
// }
// else { console.log("not alien color")
// }
let alignColor = "yellow";
if (alignColor === "green") {
    console.log("you earned 5 points");
}
else if (alignColor === "yellow") {
    console.log("you earned 10 points");
}
else if (alignColor === "red") {
    console.log("you earned 15 points");
}
else {
    console.log("not match color");
}

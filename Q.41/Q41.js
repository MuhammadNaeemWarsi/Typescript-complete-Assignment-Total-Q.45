"use strict";
//Magicians: Make a array of magician’s names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicianNames = ["rogger", "david", "paul"];
// function show_magicians(magicians:string[]){
//     for(let magician of magicians){
//         console.log(magician)
//     }
// }
// show_magicians(magicianNames)  
function show_magicians(magicians) {
    magicianNames.forEach((magicianName) => {
        console.log(magicianName);
    });
}
show_magicians(magicianNames);

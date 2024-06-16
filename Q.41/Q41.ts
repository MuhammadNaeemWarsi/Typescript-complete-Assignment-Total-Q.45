 //Magicians: Make a array of magician’s names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array.

let magicianNames:string[]= ["rogger","david","paul"];


function show_magicians(magicians:string[]){ 
magicianNames.forEach((magicianName )=>{ 
    console.log(magicianName)
} )
 }
show_magicians(magicianNames)
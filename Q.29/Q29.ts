//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

const favoriteFruits: string[]=["Mango,Apple,Banana,"];

if (favoriteFruits.includes("Mango")){
    console.log("you really like Mango!")
}
if (favoriteFruits.includes("Apple")){
    console.log("you really like Apple!")
}

if (favoriteFruits.includes("Melon")){
    console.log("you really like Melon!")
}
else {
    console.log("Melon is not in your fruit list")
} 
if (favoriteFruits.includes("Banana")){
    console.log("you really like Banana!")
}

if (favoriteFruits.includes("Guava")){
    console.log("you really like Guava!")
} 
else{
    console.log("Guava is not in your fruit list")
}

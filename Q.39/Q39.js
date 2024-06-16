"use strict";
//City Names: Write a function called city_country() that takes in the name
//of a city and its country. The function should return a string formatted like this:
Object.defineProperty(exports, "__esModule", { value: true });
//"Lahore, Pakistan"
//Call your function with at least three city-country pairs, and print the value
//that’s returned.
// function city_country(city:string,country:string): void {
//     console.log(` ${city} is in  ${country}`);
//}
city_country("Lahore", "Pakistan");
city_country("Berlin", "Germany");
city_country("Istanbul", "Turkey");
function city_country(city, country) {
    return `${city} ${country}`;
}
console.log(city_country("lahore", "Pakistan"));
console.log(city_country("Berlin", "Germany"));
console.log(city_country("Istanbil", "Turkey"));

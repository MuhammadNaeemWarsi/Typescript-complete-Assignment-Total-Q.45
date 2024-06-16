//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
//character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName = "\t MuhammadNaeemWarsi \n";
console.log(personName);
let strippedName = personName.trim();
console.log(strippedName);
let myName = "\t\n NaeemWarsi \t\n"; // This saves the name with whitespace
console.log(myName); // Shows the name with whitespace
console.log(myName.trim());
export {};

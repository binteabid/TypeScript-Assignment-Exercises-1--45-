"use strict";
// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// EXERCISE 41
// Array of Magician's Names
let magicians = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
//Defining the Function
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
// Calling the function 
show_magicians(magicians); // shows Magician's Names
// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// EXERCISE 42
// Define an array of magician's names
let magicians41 = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
// Define the function to show magicians
function show_magicians41(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Defining the function to make magicians great
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
// Calling the function to make magicians great
make_great(magicians); // Modifies the Magician's Names array
// Calling the function to show magicians
show_magicians(magicians); // Shows modified names of the Magician's Names array
// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// EXERCISE 43
// Define an array of magician's names
let magicians42 = ["Harry Houdini", "David Copperfield", "Penn & Teller"];
// Define the function to show magicians
function show_magiciansagain(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Defining the function to make magicians great without modifying the original array
function make_great42(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
// Call the function to make a great version of the magicians array
let greatMagicians42 = make_great42([...magicians42]);
// Show the original magicians array
console.log("Original Magicians:");
show_magiciansagain(magicians42);
// Show the great magicians array
console.log("\nGreat Magicians:");
show_magiciansagain(greatMagicians42);
// function make_great(magicians: string[]): string[] {
//     let greatMagicians = [];
//     magicians.forEach((magician) => {
//       greatMagicians.push(`${magician} the Great`);
//   });
//   return greatMagicians;
//   }
//   function show_magicians(magicians: string[]) {
//     magicians.forEach((magician) => {
//       console.log(magician);
//     });
//   }
//   let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
//   console.log("Original magicians:");
//   show_magicians(magicians); // Shows original names
//   console.log("Great magicians:");
//   show_magicians(greatMagicians); // Shows modified names
// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Defining a function 
function make_sandwich_spread(...items) {
    console.log("Order of a Sandwich having:");
    items.forEach(item => {
        console.log(`- ${item}`);
    });
    console.log("\n");
}
// Call the function with different numbers of arguments
console.log("First Sandwich Order:");
make_sandwich_spread("Chicken", "Tomato", "Cucumber");
console.log("Second Sandwich Order:");
make_sandwich_spread("Fried Chicken", "Cheese");
console.log("Third Sandwich Order:");
make_sandwich_spread("Grilled Chicken", "Lettuce", "Tomato", "Cucumber", "Fries");
// 45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// EXERCISE 45
function createCarObject(manufacturer, modelName, options) {
    let car = Object.assign({ manufacturer: manufacturer, modelName: modelName }, options);
    return car;
}
// Call the function with required and additional information
let myCar2 = createCarObject("Honda", "Accord", { color: "red", year: 2022 });
// Printing the returned object to verify the information stored correctly
console.log(myCar2);

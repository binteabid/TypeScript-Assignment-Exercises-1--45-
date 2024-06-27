"use strict";
/* Exerecise:23.	Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
// Conditional Tests Series:
//Defining Variables
let car = 'subaru';
// Test 1:
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // prediction is right
// Test 2:
console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); //prediction is right
// Test 3: 
console.log("Is car ==='subaru'? I predict True.");
console.log(car === 'subaru'); //prediction is right
// Test 4: 
console.log("Is car !=='subaru'? I predict True.");
console.log(car !== 'subaru'); //prediction is wrong
// Test 5: 
console.log("Is car.length > 0? I prdedict True.");
console.log(car.length > 0); //prediction is right
// Test 6: 
console.log("Is car.length < 5? I prdedict False.");
console.log(car.length < 5); //prediction is right
// Test 7: 
console.log("Is car.toUpperCase() === 'SUBARU'? I prdedict True.");
console.log(car.toUpperCase() === 'SUBARU'); //prediction is right
// Test 8: 
console.log("Is car.toUpperCase() === 'Subaru'? I prdedict True.");
console.log(car.toUpperCase() === 'Subaru'); // prediction is Wrong
// Test 9:
console.log("Is car.toLowerCase() === 'Subaru'? I prdedict True.");
console.log(car.toLowerCase() === 'Subaru'); // prediction is Wrong
// Test 10: 
console.log("Is car.includes ('u')? I prdedict True.");
console.log(car.includes('u')); //prediction is right
/*Exerecise:24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
// Tests for equality and inequality with strings
const stringAlpha = "hello";
const stringBeta = "world";
console.log(stringAlpha === stringBeta); // false
console.log(stringAlpha !== stringBeta); // true
// Tests using the lower case function
const stringTCase = "Hello";
const stringLCase = "hello";
console.log(stringTCase.toLowerCase() === stringLCase.toLowerCase()); // true
// Numerical tests  using operators
const numberi = 0;
const numberii = 1;
console.log(numberi === numberii); // false (equality)
console.log(numberi !== numberii); // true (inequality)
console.log(numberi > numberii); // false (greater than)
console.log(numberi < numberii); // true    (less than)
console.log(numberi >= numberii); // false  (greater than or equal to,)
console.log(numberi <= numberii); // true    (less than or equal to)
// Tests using "and" and "or" operators
const a = 1;
const b = 2;
const c = 3;
console.log(a > b && b > c); // true  ("and" operator)
console.log(a > b || b < c); // true    ("or" operators)
// Test whether an item is in an array
const arrayI = [11, 22, 33, 44, 55];
const itemi = 22;
const itemii = 50;
console.log(arrayI.indexOf(itemi) !== -1); // true
// Test whether an item is not in an array
console.log(arrayI.indexOf(itemii) !== -1); // false
/*Exerecise:25.	Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
// EXERCISE 25
// version 1:
let alienColorR = 'red';
if (alienColorR === 'red') {
    console.log("The player just earned 5 points."); // printing  so it passes if test
}
// // version 2: 
// let alienColorR: string = 'red';
// if (alienColorR === 'Yellow') {
//     console.log("The player just earned 5 points.");   // no output: this version fails if test
// }
/*Exerecise:26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
// version 1: print if statement
// let alienColorG: string = 'green';
// if (alienColorG === 'green') {
//     console.log("The player just earned 5 points for shooting the alien.");
// } 
//else {
//     console.log("The player just earned 10 points.");
// }
// // version 2: print else block 
//let alienColorG: string = 'green';
// if (alienColorG === 'yellow') {                                   
//     console.log("The player just earned 5 points for shooting the alien.");
// } 
//else {
//     console.log("The player just earned 10 points.");        // for both'yellow' or 'red'
// }
/*Exerecise:27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
// EXERCISE 27
//  version 1 : Red Alien: earned 5 points
let alienColorg = 'green';
if (alienColorg === 'green') {
    console.log("The player earned 5 points."); //Printing this statement
}
else if (alienColorg === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alienColorg === 'red') {
    console.log("The player earned 15 points.");
}
//  version 2 : Yellow Alien: earned 10 points
let alienColorY = 'yellow';
if (alienColorY === 'green') {
    console.log("The player earned 5 points.");
}
else if (alienColorY === 'yellow') {
    console.log("The player earned 10 points."); //printing this statement
}
else if (alienColorY === 'red') {
    console.log("The player earned 15 points.");
}
//  version 3 : Red Alien: earned 15 points
let alienColorr = 'red';
if (alienColorr === 'green') {
    console.log("The player earned 5 points.");
}
else if (alienColorr === 'yellow') {
    console.log("The player earned 10 points.");
}
else if (alienColorr === 'red') {
    console.log("The player earned 15 points."); // printing this statement
}
// Exerecise:28.	Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
//  STAGES OF LIFE:  if-else chain    
//Defining  Variable:
let age = 99;
// writing if-else cahin
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else if (age >= 65) {
    console.log("The person is an elder."); //printing this statement
}
// Exerecise:29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Array of 3 Favorite Fruits
let favorite_fruits = ['pineapple', 'strawberry', 'watermelon'];
// Writing a series of 5 if statements to check Array of Fruit:
if (favorite_fruits.includes('pineapple')) {
    console.log("You really like Pineapple!"); // this will be printed as it is included in array
}
if (favorite_fruits.includes('banana')) {
    console.log("You really like apples!"); // this will not be printed as it is included in array
}
else {
    console.log(" Banana is not your favourite fruit!"); // this will be printed as Banana is not included in array
}
if (favorite_fruits.includes('strawberry')) {
    console.log("You really like Strawberries!"); // this will be printed as it is included in array
}
if (favorite_fruits.includes('watermelon')) {
    console.log("You really like Watermelon!"); // this will be printed as it is included in array
}
if (favorite_fruits.includes('peach')) {
    console.log("You really like Peach! "); // this will not be printed as it is not included in array
}
else {
    console.log("Peach is not your favourite fruit!"); // this will be printed as Peach is not included in array
}
// Exerecise:30.	Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// Hello Admin: Array Loop
// Defining Array of Usernames:
let employeesnames = ['Admin Sumera', 'Amina', 'Emerald', 'Zeba', 'Admin Zanjabeel'];
//Looping through the Array & Printing Greetings:
// for (let employeename of employeesnames ) {         //for of loop
//     if (employeesnames. includes ('Admin')) {
//         console.log (`Hello ${employeename}! Would you like to see this month's employees' progress report now?`);   //printing this for Admins only
//     } 
//     else {
//         console.log(`Hello ${employeename}! Thank you for logging in again.`);   //printing this for other employees who are not Admins 
//     }
// }
// Looping through the Array & Printing Greetings:     
for (let i = 0; i < employeesnames.length; i++) { //for loop
    if (employeesnames[i].includes('Admin')) {
        console.log(`Hello ${employeesnames[i]}! Would you like to see this month's employees' progress report now?`); // printing this for Admins only
    }
    else {
        console.log(`Hello ${employeesnames[i]}! Thank you for logging in again.`); //printing this for other employees who are not Admins 
    }
}

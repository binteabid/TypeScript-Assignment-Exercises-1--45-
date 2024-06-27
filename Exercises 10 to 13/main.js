"use strict";
// 10.	Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. T
//Then write one sentence describing what the program does.//
//Program 1: Adding Comments in Exercise 8:
//Exercise 8:You should create four lines that look like this:console.log(5 + 3); Your output should simply be four lines with the number 8 appearing once on each line.
// creating four lines that look like this:console.log(5 + 3), getting output the number 8
// Printing to get the output number 8 appearing once on each line.
console.log(4 + 4);
console.log(20 - 12);
console.log(8 * 1);
console.log(40 / 5);
//Program 2: Adding Comments in Exercise 9:
//Exercise 9:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
//Declaring a variable storing My Favourite Number
let favouriteNumber = 1;
//Creating a message to communicate My Favourite Number
let message = `My favoutite number: ${"1"} `;
//Printing the message  Communicating My Favourite Number
console.log(message);
// 11.	Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// Define an array of my friends' names
let friendsNames = ['Anam', 'Bisma', 'Ember'];
// Using forEach method to iterate over the array
friendsNames.forEach(name => {
    console.log(name); // Printing each friend's name
});
// 12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
//Using forEach method and same Array as Exercise 11 
friendsNames.forEach(name => {
    console.log(`Assalam O ALaikum Dear, ${name}! Can we meet tomorrow for Hi Tea?`); //Printing message to my each friend
});
// 13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// Define an Array of my Favourite mode of transportation
let transportationMode = ["Peugeot3008", "Chery Omoda", "Tank500",];
transportationMode.forEach(mode => {
    console.log(`In sha Allah! I like to own a "${mode}" oneday`); //Printing message to my each friend
});

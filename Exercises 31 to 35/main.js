"use strict";
// 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// EXERCISE 31:  Exercise 28 with code has been written here
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
// Array of Usernames
// Defining Array of Usernames:
let usernames = []; // it is empty as there is no array in Exercise 28
// Checking if the list of users is empty not empty:
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let username of usernames) {
        console.log(`Hello, ${username}!`); // this greeting  to Users will not be printed as rray is empty
    }
}
// Removing all usernames
usernames = [];
// Re-Checking if the list of users is empty 
if (usernames.length === 0) {
    console.log("We need to find some users!"); // this message  is printed
}
// 32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// EXERCISE 32
// Array of Current Usernames:
let current_users = ['Maria', 'Mona', 'Nimra', 'Alice', 'Ember'];
// Array of  New Usernames:
let new_users = ['alice', 'Mona', 'Zunaira', 'Yusra', 'Huda'];
// Loop through the new_users list using forEach method to check for Uniqueness:
// new_users.forEach((newUser) => {                              
//     if (
//       current_users.some(
//         (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()   // Converting the new username to lowercase for case insensitive comparison
//       )
//     ) {
//       console.log(`${newUser} will need to enter a new username.`);       // printing this message when username is not available
//     } 
//     else {
//       console.log(`${newUser} is available.`);                         //  printing this message when username is  available
//     }
//   });
// // Convert all current usernames to lowercase for case insensitive comparison
let lower_current_users = current_users.map(user => user.toLowerCase());
// Loop through the new_users list to check for Unqueness:
for (let new_user of new_users) { // Using for  of method
    let lower_new_user = new_user.toLowerCase(); // Convert the new username to lowercase for case insensitive comparison
    if (lower_current_users.includes(lower_new_user)) {
        console.log(`The username "${new_user}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username "${new_user}" is available.`);
    }
}
// 33.	Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// EXERCISE 33
// Storing the numbers 1 through 9 in an Array
let ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Printing Ordinal Numbers With Proper Suffixes: 
console.log("Ordinal Numbers:");
// Loop through the Array
// for (let i = 0; i < ordinalNumbers.length; i++) {
//     let num_ending: string;
//     if (ordinalNumbers [i] === 1) {             //   Determining the proper ordinal ending Using an if-else chain
//         num_ending = "st";
//     } 
// else if (ordinalNumbers [i] === 2) {
//     num_ending = "nd";
//     } 
// else if (ordinalNumbers[i] === 3) {
//     num_ending = "rd";
//     } 
// else {
//       num_ending = "th";
//     }
//     console.log(`${ordinalNumbers[i]}${num_ending}`);           // Printing the proper Ordinal Ending
// }
// // Loop through the Array
ordinalNumbers.forEach((number) => {
    let num_ending = "th";
    if (number === 1) { //   Determining the proper ordinal ending Using an if-else chain
        num_ending = "st";
    }
    else if (number === 2) {
        num_ending = "nd";
    }
    else if (number === 3) {
        num_ending = "rd";
    }
    console.log(`${number}${num_ending}`); // Printing the proper Ordinal Ending
});
// 34.	Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// EXERCISE 34
// Defining an Array to store Pizza Names
let favPizzas = ["Chicken Tikka", "Fagitta", "BBQ Chicken"];
// Printing Pizza Names 
console.log("My Favourite Pizza Names:");
//Method 1:Using a for loop method:
for (let i = 0; i < favPizzas.length; i++) { //Printing names
    console.log(favPizzas[i]);
}
// // Method 2: Using a for-of loop
// for (let pizza of favPizzas) {
//     console.log(pizza);        //Printing names
// }
// // Method 3: Using a forEach method
// favPizzas.forEach(pizza => {
//     console.log(pizza);         //Printing names
// });
// // Method 4: Using a while loop
// let index = 0;
// while (index < favPizzas.length) {
//     console.log(favPizzas[index]); // Printing names
//     index++;
// }
// // Method 5: Using a do-while loop
// index = 0;
// do {
//     console.log( favPizzas[index]);       //Printing names
//     index++;   
// }
// while (index < favPizzas.length);
// //Modifying for loop to PRINT A SENTENCE:
// Method 1: Using a  for loop
for (let i = 0; i < favPizzas.length; i++) {
    console.log(`I like ${favPizzas[i]} pizza.`); //Printing this message
}
;
// // Method 2: Using a for-of loop
// for (let pizza of favPizzas) {
//     console.log(`I like ${pizza} pizza.`);          //Printing this message
// }
// // Method 3: Using a forEach method
// favPizzas.forEach(pizza => {
//     console.log(`I like ${pizza} pizza.`);           //Printing this message
// });
// // Method 4: Using a while loop
// let index = 0;
// while (index < favPizzas.length) {
//     console.log(`I like ${favPizzas[index]} pizza.`);    //Printing this message
//     index++;
// }
// // Method 5: Using a do-while loop
// index = 0;
// do {
//     console.log(`I like ${favPizzas[index]} pizza.`);       //Printing this message
//     index++;
// }
// while (index < favPizzas.length);
// Adding a line at the end of the program
console.log("I really love Pizza!"); // Printing this message 
// 35.	Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// EXERCISE 35
// Defining an Array to store Exotic Animal Names:
let exoticPets = ["Parrot", "Iguana", "Hedgehog"];
// Printing Names Of Exotic Animals 
console.log("List Of 3 Exotic Animals:");
// Method 1: Using a for loop to print the name of each animal
for (let i = 0; i < exoticPets.length; i++) {
    console.log(exoticPets[i]); //Printing the name of each animal
}
// Modifying the for loop to print a statement 
for (let i = 0; i < exoticPets.length; i++) {
    console.log(`A ${exoticPets[i]} can be an amazing exotic pet.`); //Printing this statement for each animal
}
// // Method 2: Using a for-of loop to print the name of each animal
// for (let pet of exoticPets) {
//     console.log(pet);                      //Printing the name of each animal
// }
// // Modifying the for-of loop to print a statement about each animal
// for (let pet of exoticPets) {
//     console.log(`A ${pet} can be an interesting exotic pet.`);     //Printing this statement for each animal
// }
// // Method 3: Using a forEach method to print the name of each animal
// exoticPets.forEach(pet => {
//     console.log(pet);               //Printing the name of each animal
// });
// // Modifying the forEach method to print a statement about each animal
// exoticPets.forEach(pet => {
//     console.log(`A ${pet} can be an interesting exotic pet.`);      //Printing this statement for each animal
// });
// // Method 4: Using a while loop to print the name of each animal
// let index = 0;
// while (index < exoticPets.length) {
//     console.log(exoticPets[index]);               //Printing the name of each animal
//     index++;
// }
// // Modifying the while loop to print a statement about each animal
// index = 0;
// while (index < exoticPets.length) {
//     console.log(`A ${exoticPets[index]} can be an interesting exotic pet.`);    //Printing this statement for each animal
//     index++;
// }
// // Method 5: Using a do-while loop to print the name of each animal
// index = 0;
// do {
//     console.log(exoticPets[index]);                   //Printing the name of each animal
//     index++;
// } 
// while (index < exoticPets.length);                    
// // Modifying the do-while loop to print a statement about each animal
// index = 0;
// do {
//     console.log(`A ${exoticPets[index]} can be an interesting exotic pet.`);   //Printing this statement for each animal
//     index++;
// }
// while (index < exoticPets.length);
// Printing the Statement having  common characteristics of these Animals:
console.log("Any of these animals can be marvellous exotic pets!");

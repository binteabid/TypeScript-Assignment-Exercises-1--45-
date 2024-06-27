"use strict";
// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Storing places in an Array
let worldTour = ["Makkah", "Madina", "Karbala", "Istanbul", "Mount Everest"];
// Print in original order
console.log("Original order:", worldTour);
// Printing alphabetical order without modifying the list
console.log("\nAlphabetical order:", worldTour.slice().sort());
// Printing to Show that the array is still in its original order 
console.log("Original order :", worldTour);
// Print in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical  order:", worldTour.slice().sort().reverse());
// Show that the array is still in its original order by printing it again
console.log("Original order:", worldTour);
// Reverse the order of the list
worldTour.reverse();
console.log("Reversed order:", worldTour);
// Reverse the order of the list again to get back to the original order
worldTour.reverse();
console.log("Original order after double reverse:", worldTour);
// Sort the list alphabetically
worldTour.sort();
console.log("Sorted alphabetically:", worldTour);
// Reverse the sorted array to get reverse alphabetical order
worldTour.reverse();
console.log("Sorted in reverse alphabetical order:", worldTour);
// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Define a Array Guest list (Exercise 14)
let guestList = ["Sir Shahid Hussain", "Sir Shakeel Ansari", "Sir Abbas Hussain"];
// Printing the total number of people  inviting to dinner
console.log(`I am inviting ${guestList.length} people to dinner.`);
// Printing a message to each guest indicating that they are invited to dinner
//Using ForEach method
guestList.forEach(guest => {
    console.log(`Dear ${guest}, it would be an honour for me if you accept my invitation to dine at our home this weekend.`);
});
// 20.	Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// Defining an array of Languages
let Languages = ["Urdu", "English", "Arabic", "Turkish", "Persian"];
// Printing the List of Languages
console.log("List of Languages:"),
    Languages.forEach(language => {
        console.log(language);
    });
// 21.	They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Storing Commision's students Database in Object
let allCandidatesData = {
    "candidate1": {
        name: "Hamza",
        rollNumber: 40,
        postAppliedFor: "Lecturer BPS-17"
    },
    "candidate2": {
        name: "Arman",
        rollNumber: 41,
        postAppliedFor: "Lecturer BPS-17"
    },
};
//Printing the Object
console.log("allCandidatesData:", allCandidatesData);
// 22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let alphaBets = ["A", "B", "C"];
// Creating and Printing an intentional error:
console.log(alphaBets[3]);
//Correcting  the error
console.log(alphaBets[0]);

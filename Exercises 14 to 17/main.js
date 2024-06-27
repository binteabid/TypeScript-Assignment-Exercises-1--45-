"use strict";
// 14.	Guest List: If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
//Define Array Guest list
let guestList = ["Sir Shahid Hussain", "Sir Shakeel Ansari", "Sir Abbas Hussain"];
//Invite each guest for dinner
//Using map method
let inviteGuest = guestList.map((guest) => `Dear ${guest},it would be an honour for me if yu accept my invitation to dine at our home this weekend. `);
//printing message
console.log(inviteGuest);
// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//Using the same Array Guest List of Exercise 14
let guestListof14 = ["Sir Shahid Hussain", "Sir Shakeel Ansari", "Sir Abbas Hussain"];
//Changing Array Guest List
let cannotattend = guestListof14.splice(1, 1)[0];
//Printing the name who can't make the dinner
console.log(`${cannotattend} can't make to the dinner this weekend`);
//Modifying the Array Guest List repalcing the name with the new guest using PUSH Method (new name will add at the end)
guestListof14.push("Sir Anas");
//Printing an updated Array Guest List
console.log(guestListof14);
//Inviting each guest for dinner from updated Array Guest List
// Using forEach method to print each invitation message
guestListof14.forEach(newguest => {
    console.log(`Dear ${newguest}, it would be an honor for me if you accept my invitation to dine at our home this weekend.`);
});
// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
////Using the same modified Array Guest List of Exercise 15
let guestListof15 = ["Sir Shahid Hussain", "Sir Abbas Hussain", "Sir Anas"];
//printing a statement informing guests about finding a bigger dinning table
console.log("Wow!we have found a bigger dining table,whata great news!");
//Adding 1 new guest at the beginning using Unshift method
guestListof15.unshift("Sir Zia");
//Adding 1 new guest in the middle using Splice method
guestListof15.splice(Math.floor(guestListof15.length / 2), 0, 'Sir Daniyal');
////Adding 1 new guest at the beginning using Push method
guestListof15.push("Sir Ameen");
//Printing Updated Guest List
console.log(guestListof15);
//// Using forEach method to print each invitation message
guestListof15.forEach(newguest123 => {
    console.log(`Dear ${newguest123}, it would be an honor for me if you accept my invitation to dine at our home this weekend.`);
});
////Using the same modified Array Guest List of Exercise 15
let guestListof16 = ["Sir Zia", "Sir Shahid Hussain", "Sir Daniyal", "Sir Abbas Hussain", "Sir Anas", "Sir Ameen"];
// 17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//Using the same modified Array Guest List of Exercise 15
let guestListof17 = ["Sir Zia", "Sir Shahid Hussain", "Sir Daniyal", "Sir Abbas Hussain", "Sir Anas", "Sir Ameen"];
//printing a statement informing guests about finding a bigger dinning table
console.log("I am afraid, we can't have you all for Dinner as we have a limited space so now we can entertain two guests only!");
// //Removing guests from your list one at a time until only two names remain in your list.
// //Using pop method
while (guestListof17.length > 2) {
    let removedGuests = guestListof17.pop();
    if (removedGuests !== undefined) {
        console.log(`I am afraid we can't invite you "${removedGuests}" to dinner this weekend. So, please accept my apologies.`);
    }
}
// Printing a message to the two people still on the list
guestListof17.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to the dinner this weekend.`);
});
// Removing the last two names from the list
guestListof17.pop();
guestListof17.pop();
// Printing the list to make sure it is empty
console.log(guestListof17);


//Exercise 1: Install Node.js, TypeScript and VS Code on your computer.

//Alhumdulillah Done!

// TypeScript:Version 5.0.2
// Node.js: v20.11.1
// VS Code:  Visual Studio Code 1.87.2
// git:git version 2.43.0.windows.1



//Exercise 2:Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

//Storing a name in Variable and printing  message

let personName:string = "Jannat"
console.log(`Assalam O Alaikum! ${personName}, Could you please come to my home to study the topic of Variables with me?`);



//Exercise 3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//Storing a name in Variable 

let personName1:string = "kaneez fatima"

// 1- Printing the name in Lower Case

console.log("Lower Case:", personName1.toLocaleLowerCase());


// 2-Printing the name in Upper Case

console.log("Upper Case:", personName1.toLocaleUpperCase());


//3-Printing the name "Zehra Noor" in Title Case

let personName2:string = "zara"

let personName3:string = "noor"


console.log("Title Case:", personName2.charAt(0).toLocaleUpperCase()  + personName2.slice(1).toLocaleLowerCase()+ " " + personName3.charAt(0).toLocaleUpperCase() + personName3.slice(1).toLocaleLowerCase());


//Exercise 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”



//Storing a Quotation with author's name 

let author:string ="Charles Dickens"
let quote: string = "My advice is, never do to-morrow what you can do today. Procrastination is the thief of time. Collar him!(David Copperfield)"


// printing the message

console.log(` ${author} wrote: "${quote}"`);



//Exercise 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.


//Storing a Quotation with the famous person’s name in a variable called famous_person

let famous_person:string ="René Descartes"

let philosophicalquote:string = "cogito, ergo sum (Latin): I think, therefore I am"
 

// Printing the message


console.log(` ${famous_person}, in "Discourse on the Method" (1637), wrote "first principle" of his philosophy,  "${philosophicalquote}".`);



//Exercise 6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


//Storing a name with some whitespace characters at the beginning and end of it

let nameWithWhiteSpace: string = "\t\n Jannat \t\n"

//Printing the name

console.log("Name With White Space:" , nameWithWhiteSpace);




//Stripping Name after striping the white space

let strippingName: string = nameWithWhiteSpace.trim();

//Printing the name

console.log("Stripping Name:" , strippingName);



//Exercise 7:Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// Writing Add, Subtract, Multiply and Division Operators so that each result in the number 8 and,
// printing all of these operators


//1-Addition

let addnum1: number = 4
let addnum2: number = 4

let addition:number = 4 + 4

console.log("Addition:", addition);


//2-Subtraction

let subtractnum1: number = 20
let subtractnum2: number = 12

let subtraction:number = 20 - 12

console.log("Subtraction:", subtraction);


//3-Mulyiplication

let multiplynum1: number = 8
let multiplynum2: number = 1

let multiplication:number = 8 * 1

console.log("Multiplication:", multiplication);


// 4-Division

let dividenum1: number = 40
let dividenum2: number = 5

let division:number = 40 / 5


console.log("Division:", division);


//Exercise 8:You should create four lines that look like this:console.log(5 + 3); Your output should simply be four lines with the number 8 appearing once on each line.


// creating four lines that look like this:console.log(5 + 3),
// Printing to get the output number 8 appearing once on each line.

console.log(4 + 4);
console.log(20 - 12 );
console.log(8 * 1);
console.log(40 / 5);


//Exercise 9:Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favouriteNumber:number = 1

let message:string = `My favoutite number: ${"1"} `


console.log(message);
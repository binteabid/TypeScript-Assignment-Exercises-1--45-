"use strict";
// 36.	T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// EXERCISE 36
//Writing a function called make_shirt()
//Method 1: Using Basic Function:
function make_shirt(size, message) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}
//Calling the function:
make_shirt("Small", "Truth is beauty!");
//Method 2: Using Function with Interface for Parameters:
// interface Shirt {
//     size: string;
//     message: string;
// }
// function make_shirt(shirt: Shirt): void {
//     console.log(`Making a ${shirt.size} t-shirt with the message "${shirt.message}" printed on it.`);
// }
// // Calling the function
// make_shirt({ size: 'Small', message: 'Truth is beauty!' });
// //Method 3: Using Function with Function Type:
// type MakeShirt = (size: string, message: string) => void;
// let make_shirt: MakeShirt = (size, message) => {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it` );
// };
// // Calling the function
// make_shirt("Small", "Truth is beauty!");
// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// EXERCISE 37
//Modifying, Exercise 36, the make_shirt() function to create a default message: 
// Method 1: Using Basic Function with Default Parameters
function modifymake_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}
// Calling the function for creating Large Shirt with default message
modifymake_shirt(); // Large shirt with default message
// Calling the function for creating Medium Shirt with default message
modifymake_shirt('Medium'); // Medium shirt with default message
// Calling the function for creating Small Shirt with custom message
modifymake_shirt('Small', 'Keep doing the hard work!'); // Small shirt with custom message
//  Method 2: Using Function with Interface for Parameters and Default Values:
// interface Shirt {
//     size?: string;
//     message?: string;
// }
// function modifymake_shirt({ size = 'Large', message = 'I love TypeScript' }: Shirt = {}): void {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
// }
// // Calling the function for creating Large Shirt with default message
// modifymake_shirt(); // Large shirt with default message
// // Calling the function for creating Medium Shirt with default message
// modifymake_shirt({ size: 'Medium' }); // Medium shirt with default message
// // Calling the function for creating Small Shirt with Custom message
// modifymake_shirt({ size: 'Small', message: 'Keep doing the hard work!' }); // Small shirt withCustom message
// Method 3: Using Function with Function Type and Default Values:
// type MakeShirt = (size?: string, message?: string) => void;
// const modifymake_shirt: MakeShirt = (size = 'Large', message = 'I love TypeScript') => {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
// };
// // Calling the function for creating Large Shirt with default message
// modifymake_shirt(); // Large shirt with default message
// // Calling the function for creating Medium Shirt with default message
// modifymake_shirt('Medium'); // Medium shirt with default message
// // Calling the function for creating Small Shirt with custom message
// modifymake_shirt('Small', 'Keep doing the hard work!'); // Small shirt with custom message
// 38.	Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// EXERCISE 38
//Method 1:Writing a function Using Simple Function with a Default Parameter:
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city("Karachi"); // Default country
describe_city("Islamabad"); // Default country
describe_city("Istanbul", "Turkey"); // Different country
// Method 2:Writing a function Using Arrow Function with Default Parameter:
// const describe_city = (city: string, country: string = "Pakistan"): void => {
//     console.log(`${city} is in ${country}.`);
// }
// // Calling the function for three different cities
// describe_city("Karachi"); // Default country
// describe_city("Islamabad");  // Default country
// describe_city("Istanbul", "Turkey"); // Different country
// Method 3: Writing a function  Using an Interface for the City Object:
// interface City {
//     name: string;
//     country?: string; // Optional property
// }
// function describe_city(city: City): void {
//     const country = city.country || "Pakistan";
//     console.log(`${city.name} is in ${country}.`);
// }
// // Calling the function for three different cities
// describe_city({ name: "Karachi" }); // Default country
// describe_city({ name: "Islamabad" });  // Default country
// describe_city({ name: "Istanbul", country: "Turkey" }); // Different country
// 39.	City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// EXERCISE 39
//1. Simple Function
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// // Calling the function with three city-country pairs
// console.log(city_country("Karachi", "Pakistan"));
// console.log(city_country("Istanbul", "Turkey"));
// console.log(city_country("London", "UK"));
// 2. Using an Interface for the City-Country Pair
// interface CityCountry {
//     city: string;
//     country: string;
// }
// function city_country(cityCountry: CityCountry): string {
//     return `${cityCountry.city}, ${cityCountry.country}`;
// }
// // Calling the function with three city-country pairs
// console.log(city_country({ city: "Karachi", country: "Pakistan" }));
// console.log(city_country({ city: "Istanbul", country: "Turkey" }));
// console.log(city_country({ city: "London", country: "UK" }));
//3. Arrow Function
let city_country = (city, country) => {
    return `${city}, ${country}`;
};
// Calling the function with three city-country pairs
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("London", "UK"));
// 40.	Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// EXERCISE 40
// 1. Simple Function with Optional Parameter
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     const album: { artist: string, title: string, tracks?: number } = {
//         artist: artist,
//         title: title
//     };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// // Making three albums
// console.log(make_album("Galaxy", "Truth is Beauty"));
// console.log(make_album("Life", "Lyrical Ballads"));
// console.log(make_album("Soul", "Eternity", 10));
// 2. Using an Interface for the Album Object
// interface Album {
//     artist: string;
//     title: string;
//     tracks?: number;
// }
// function make_album(album: Album): Album {
//     return album;
// }
// // Making three albums
// console.log(make_album({ artist: "Galaxy", title: "Truth is Beauty" }));
// console.log(make_album({ artist: "Life", title: "Lyrical Ballads" }));
// console.log(make_album({ artist: "Soul", title: "Eternity", tracks: 10 }));
// 3. Arrow Function with Optional Parameter
const make_album = (artist, title, tracks) => {
    const album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
};
// Making three albums
console.log(make_album("Galaxy", "Truth is Beauty"));
console.log(make_album("Life", "Lyrical Ballads"));
console.log(make_album("Soul", "Eternity", 10));

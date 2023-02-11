// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();

// The .includes() method is called on the string "Hello World"
// The argument "Hello" is passed; .includes() has the job of checking if certain values are included in the string. This returns a boolean value. 
// the return value is true
"Hello World".includes("Hello");

// The .endsWith() method is called on the string "Hello World"
// The argument "Hello" is passed. .endsWith() has the job of checking if the string ends with specified string. This returns a boolean value. 
// the return value is false
"Hello World".endsWith("Hello");

// The .endsWith() method is called on the string "Hello World"
// The argument "Hello" is passed. .endsWith() has the job of checking if the string ends with specified string. This returns a boolean value. 
// the return value is true
"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

// The toUpperCase() method is called on the currentMood variable, which stores the string "excited".
// The toUpperCase() method does not pass an argument. This method will return the called upon string and convert the string to uppercase.
// In this example, the return value will return the string "EXCITED".
// The console.log() statement prints the return value of the toUpperCase() method ("EXCITED") to the console.
var currentMood = "excited";
console.log(currentMood.toUpperCase());

// The repeat() method is called on the currentMood variable, which stores the string "energized ".
// The repeat() method passes the argument (5). This method will return and construct a new string of repeated specified number of copies and concatenate them together. 
// In this example, the return value will return "energized" 5 times. 
// The console.log() statement prints the string "I currently feel" and adds "energized " concatenated together. 
var currentMood = "energized ";
console.log(`I currently feel ${currentMood.repeat(5)}.`);



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The push() method is called on the score variable, which stores the array [89, 77, 98, 55, 85, 92].
// The push() method passes the argument (67, 78); This will add the new elements to the end of the array and return the new length of the array. 
// In this example, the console.log() statement will print the new array length, which is 8.
// I used the second console.log() statement check if the two new elements were pushed to the score array. This returned, [89, 77, 98, 55, 85, 92, 67, 78]
var score = [89, 77, 98, 55, 85, 92];
console.log(score.push(67, 78));
console.log(score);

// The concat() method is called on the firstNames variable, which stores the array ['Murphy', 'Tim', 'Sandra'].
// The concat() method passes the lastNames argument, which is an array which stores the array ['Quinn', 'Adam', 'Cahill'].
// The concat() method will merge the two arrays.
// In this example, the console.log() statement will return a new array, [ 'Murphy', 'Tim', 'Sandra', 'Quinn', 'Adam', 'Cahill' ]
// This will not alter the orignial arrays, only return a new array.
var firstNames = ['Murphy', 'Tim', 'Sandra'];
var lastNames = ['Quinn', 'Adam', 'Cahill'];
console.log(firstNames.concat(lastNames));
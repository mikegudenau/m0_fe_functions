// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName() { 
// Moved the console.log to the second next line, indented, semi colon at the end.
// This is proper formatting. The code block goes in between the curly brackets. 
// These are the instructions.
  console.log("Hello, what is your name?"); 
}

askForName(); // added semi-colon for propper formatting and end statement. 


// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third; // indent lines and add semi colon. Ensures proper formatting
  return sum; // indent, proper fomatting
} // moved this curly bracket to the inside to ensure formattting best practices. 

console.log(addThreeNums(1, 2, 3)); // add console.log so that it prints to the console. 
console.log(addThreeNums(4, 2, 7)); // add console.log so that it prints to the console. 


// // EX 3:
function makeFreshPesto() { // func is not a valid way to declare a new function. Must use function.
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
} // move the curly brackets down to the bottom. this ends the code block (instructions)

makeFreshPesto();


// //  EX 4:
// changed the function name to begin with a verb "get". this decsribes what the function does. 
// moved the first curly bracket to after the parameter
function getAverage(num1, num2) { 
  var sum = num1 + num2; // indent line. formatting best practice.
  var avg = sum / 2;
  console.log(`The average of ${num1} and ${num2} is ${avg}.`); // I used console.log to produce a statement in the console.
  return getAverage;
} // move the curly brackets down to the bottom. this ends the code block (instructions)

getAverage(5, 5);
getAverage(12, 4);
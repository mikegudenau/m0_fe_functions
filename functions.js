// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return 'Howdy parter!';
}

var newGeneral = greeting();
var newGeneral2 = greeting();

console.log(newGeneral);
console.log(newGeneral2);


// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
    return `You've been awarded the eagle medallion, ${name}. Congratulations!`;
}

var newString = customGreeting('Mike');
var newString2 = customGreeting('Andre');

console.log(newString);
console.log(newString2);

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last) {
    return `Your full name, ${first} ${middle} ${last} is beautiful!`;
}

var nameString = greetPerson('Anthony', 'Partick', 'Owens');
var nameString2 = greetPerson('Megan', 'Jarita', 'Quinn');

console.log(nameString);
console.log(nameString2);


// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(number) {
    var sqrt = Math.sqrt((number));
    return sqrt;
}

var sqrt1 = square(100);
var sqrt2 = square(49);


console.log(`The square root of 100 is ${sqrt1}.`);
console.log(`The square root of 49 is ${sqrt2}.`);


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(num, item) {
    if (num >= 4) {
        console.log(`${item} is stocked`);
    } else if (num === 0) {
        console.log(`${item} - OUT of stock!`);
    } else {
        console.log(`${item} - running LOW`);
    }
}

checkStock(4, "Coffee");
// // => "Coffee is stocked"

checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// // => "Salsa - running LOW"
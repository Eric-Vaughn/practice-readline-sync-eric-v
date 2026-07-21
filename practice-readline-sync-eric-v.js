const readline = require('readline-sync');

// Get contestant's name
let name = readline.question("Before we begin, what's you name? ");

// Intro
console.log("\nHello and welcome " + name + "!");
console.log("This is the Commandline Quiz!");
console.log("Today's topic: Values, Data Types, and Operations!");
console.log("Can you get all 5 questions right?");
console.log("Let's begin!");

// Questions
console.log("\nQuestion 1: ");
let userAnswer1 = readline.question("What data type is a variable when a value is NEVER assigned to it? ");
console.log("You said: " + userAnswer1);

console.log("\nQuestion 2: ");
let userAnswer2 = readline.question("Will 'null' implicitly convert to 'true' or 'false'? ");
console.log("You said: " + userAnswer2);

console.log("\nQuestion 3: ");
let userAnswer3 = readline.question("Where can you NOT put a number in a variable name? ");
console.log("You said: " + userAnswer3);

console.log("\nQuestion 4: ");
let userAnswer4 = readline.question("Why shouldn't you use 'var' to name a variable anymore? ");
console.log("You said: " + userAnswer4);

console.log("\nQuestion 5: ");
let userAnswer5 = readline.questionInt("What number is THE ONLY NUMBER that maps to falsy? ");
console.log("You said: " + userAnswer5);

console.log("\nHow'd you do " + name + "? Thanks for playing!");
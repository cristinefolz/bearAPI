// Import new file
// './' says itis looking for a file in the same level directory
var Calculator = require('./calculator');

console.log(Calculator);

// Create a new instance of Calculator
var myCalculator = new Calculator ();

console.log(myCalculator);

// test the sum function of Calculator
var calcSum = myCalculator.sum(3,6);
console.log(calcSum);

// test the subtract function of Calculator
var calcSub = myCalculator.subtract(9,16);
console.log(calcSub);
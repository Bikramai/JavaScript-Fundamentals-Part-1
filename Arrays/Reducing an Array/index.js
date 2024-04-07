// How to Reduce the elements of an arrays in javascript?



// Let's say we want to calculate the sum of all these numbers in this array.
// This will be similar to calculating total cost of all the items in a shopping cart. 
// so each numbers here should represent the price of an item in a shopping cart.


// Solution:-
// 1. Declare a variable called sum and we initialize it to 0.
// 2. loop over the array, get each element for each number and add it to sum
// 3. write an expression.



const numbers = [1, -1, 2, 3, 4];


// sum method and old way of writing code
let sum = 0;
for (let n in numbers)
    sum += n;   

console.log(sum);


// There is cleaner and more elegant way to writer the same code using the reduce method in arrays.

// using the reduce method in arrays

// with initializing 0 
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 2 => a = 5
numbers.reduce((accumlator, currentValue) => {
    return accumlator + currentValue;
}, 0)

console.log(sum);


// with out initializing 0
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
numbers.reduce((accumlator, currentValue) => accumlator + currentValue)

console.log(sum);

// Note:- so with this single line of code, we reduce the numbers array 
// and this is how our reduction algorithm works. 
// we simply get the current value  and add it to our accumulator. 

// Rest Operator:- 
// In modern JavaScript, if you want to have a function with a varying 
// number of parameters we can use reso operator.
// Add the parameter and prefix with three dots(...args) this is 
// what we call rest operator.

// spread operator with array are differnt than rest operator.
// with the spread operator we can spread an array which basically means
// take in it's individual elements.



function sum(...args) {
    console.log(args);
    return args.reduce((a, b) => a + b); //reduce method
}

console.log(sum(1, 2, 3, 4, 5, 5, 6, 10));


function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 1));


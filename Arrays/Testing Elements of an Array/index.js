// How to testing the elements of an arrays in javascript?

// every and some methods are new in javascript, some older browsers donot support this.

// every() -if every element in a given array matches the given criteria, and sone checks to see
const numbers = [ 3, 4,  1, 2 ];

const allPositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive);


//some() -if we have at least one element that matches the given criteria.
// if we have million number in array, if the first number matches this criteria,
const numbers2 = [ 3, 4,  -1, 2 ];

const atLeastOnePostive = numbers.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePostive);


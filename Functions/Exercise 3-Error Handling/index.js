// Question:-
// Create a function called countOccurances, this function takes an array and searchElement.
// and return the number of times that search element has occurred in this array. 


// Here Now, this function has a tiny problem. Here we assuming that the first argument
// is a valid array. What happens if we call this function with a boolean?
// we get error, uncaught type error,array.reduce is not a function. 
// Coz here we're calling array.reduce and boolean don't have this reduce method.
// same happens if we null or undefined, here we need to modify this function, 
// and add error handling. so this is what we want to do for this exercise.

// Hints:
// if the first argument is not an array, tjhrow an exception, then wrap ->const count = countOccurences(null, 1);
// console.log(count); two lines,with a try catch block, we can also wrap these entire
// three linesaltogether in a try catch clock, it doesn't really matter, one of these 
// line is going to throw an exception, that is the second line,

// Solution:-
// 1. In this function, first we need to validate the first argument.
// ->Array.isArray method, so we can pass this first argument array, 
//   -and if this is not a valid array, we want throw an exception.
// 2. throw new error invalid array. We can add any error messages here.

try {
    const numbers = [1, 2, 3, 4, 1];
    const count = countOccurences(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
    }, 0)
}


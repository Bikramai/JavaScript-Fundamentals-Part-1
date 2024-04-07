// Popular interview question called FizzBuzz algorithm.

// We have a function called FizzBuzz, 
// we give it an input and return NaN, and returns a string.
// If the number is divisible by 3, we get fizz,
// If the number is divisible by 5, we get buzz,
// If the number that we're passing is divisible by 3 and 5, like 15, we get FizzBuzz
// If the number is not divisible by either by 3 or 5, we get the same number,
// Get the message not a number


const output = fizzbuzz(15)
console.log(output)


function fizzbuzz(input){
    if (typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

return input;

}

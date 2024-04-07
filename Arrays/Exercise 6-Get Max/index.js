// Question:-
// Create a function called getMax, we give it an array and it returns the largest number in that array. 
// if we give it an empty array, it returns undefined coz we don't have anything in array.

// Hints:
// start with simple implementation, once that implementation is working, then to challenge yourself,
// implement this function using the reduce method in arrays.

// Solution:-
// 1. Create function -> getMax that takes array.
// 2. if statement ->if array.length equals 0, you're going to return undefined.
// 3. declare a variable, call let max and set it to first element in this array.
// 4. for loop -> for let i, assign 1, i less than array.length, increment i. 
//                -and run this loop as long as i is less than the length of the array. increment i,
// 5. if array of i is greater than max, 
// 6. then we're going to set max to current value(array[i]).
// 7. Finally after this loop, we return max.

const numbers = [1, 2, 3, 4, 5];

const max = getMax([1, 2, 3, 4, 5, 5, 6]);

console.log(max);

// using simple method
function getMax(array) {
    if (array.length === 0) return undefined

    // let max = array[0];

    // for (let i = 1; i < array.length; i++)
    // if (array[i] > max)
    // max = array[i];

    // return max;

    return array.reduce((a, b) => (a > b) ? a : b); // Using the reduce method

}


// Note: that anytime you have an array of values and you want to 
// get a single value as a result of iterating that array, think of the reduce method.
// In this case, we're finding the largest value in this array, so we're reducing this array into a single value.


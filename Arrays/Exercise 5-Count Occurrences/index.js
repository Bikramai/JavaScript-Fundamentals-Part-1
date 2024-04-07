// Question:-
// Create a function called countOccurances, this function takes an array and searchElement.
// and return the number of times that search element has occurred in this array. 


// Solution:-
const numbers = [1, 2, 3, 4, 1];

const count = countOccurences(numbers, 1);

console.log(count);


// 1. create function -> countOccurrences(array, searchElement)
// 2. Declare count variable, initialize to 0.
// 3. for loop -> for let element of array.
// 4. if this element equal the search element.
// 5. we simply imcrement count.
// 6. finally, we return count.
// this is most basic implementation.

// function countOccurances(array, searchElement) {
//     let count = 0;
//         for (let element of array)
//         if (element === array)
//         count++;
//     return count;

// }

// Now let's see how we can use the reduce method to achieve the same thing in less code.
// 1. use array.reduce() method ->here we have to pass callback function accumulator, and current.
//    And this goes to code block.
function countOccurences(array, searchElement) {
    return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
    }, 0)
}


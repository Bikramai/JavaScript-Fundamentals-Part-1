// write a function called arrayFromRange. This function should take two parameters min and max.




// Solution:- 
// 1. Define a function called arrayFromRange, with min and max parameters.
// 2. create an empty array -> let call output and set it to an empty array.
// 3. for loop -> to generate numbers between min and max.
//             -> for(let i = min, as long as i is less than or equal to max, increment i ).
// 4. push this i into our array -> output.push(i).
// 5. finally, we return output.

const numbers = arrayFromRange(1, 10);

console.log(numbers);

function arrayFromRange(min, max) {
    const output = [];
        for (let i = min; i <= max; i++)
        output.push(i)
    return output;
}

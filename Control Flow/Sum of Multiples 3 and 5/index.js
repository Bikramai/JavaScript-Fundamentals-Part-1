// Create a function called sum, wegive it a limit.
// This function will return the sum of all 
// the multiples 3 and 5 from 0 up to this limit.


// examples:-
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

// so including this number that is passed as a limit. 
// Now if yoe add these numbers together, the result will be 33, 
// that is the job of the function.


// Solution:-
// 1. declar variable -> sum = 0
// 1. function -> sum
// 2. for loop
// -let i equal to 0, as long as i is less than or equal to limit, we want increment i,
// -Now we want to check to see fi i is a multiple of 3 or 5.

console.log(sum(10));

function sum(limit){
    let sum = 0;
    for (let i = 0; i <= limit;  i++)
        if (i % 3 === 0 || i % 5 === 0)
        sum += i;

    return sum;
}

// Note:- Lines that are highly related should be together, and they should be
// seperate feom other lines.
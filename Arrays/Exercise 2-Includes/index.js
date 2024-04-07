// write a function like the includes method. So imagine we don't have this method in arrays,
// your jobis to implement this method yourself.

// let define numbers in array
// 7. call the includes function, pass our numbers array, as the first argument and 1 as second argument.


// Solution:-
// 1. create a function called includes that takes an array and a searchElement.
// 2. for of loop -> (let element of array).
// 3. if element equals the searchElement, we're going to return true, 
//    -so we don't need to search rest of this array, we immediately returned true. 
//    -Ohterwise we get to this point that means we didn't find this element in the array, 
// 4. So, we return false.

// 6. call the includes function, pass our numbers array, as the first argument and 1 as second argument.

const numbers = [1, 2, 3, 4, 5];

console.log(includes(numbers, -1))


function includes(array, searchElement) {
    for (let element of array)
    if (element === searchElement)
        return true;
    return false;
}




// Create a function called sum that takes a varying number of arguments, and return their sum.

// Hint:
// we can pass 1 argumentor 2, 3, or more. sum(1, 2, 3, 4, 5) => 15
// here we should get 15

// 1. Challenge yourself to modify the sum function to be able to accept an array
//    and return the same result.
// 2. Now as part of this challenge, you need to detect if the argument is passed in an array.
// hints-use array.isArray method. Here, if you pass an array object, we get true,
//       if we pass anything else like a regular object, we get false.


// Solution:-
// 1. Create a function called sum, Now to have varying number of parameters,
//    we use the rest operator. Now we can pass as many arguments as we want,
//    and this spread operator will convert them all to an array.
// 2. use reduce.method ->items.reduce, we pass an arrow function a and b, 
//    goes to a + b, and finally we return the result.
// 3. Let's call this function, so console.log, of sum of 1, 2, 3, 4, 5, we get 15.


// Now next, let's work on the challenge.
// 1. if we pass console.log(sum([1, 2, 3, 4, 5])) in array, we get the array itself.
//    let's see why this happening, 
// 2. In the sum function let's console.log items - here we see items is an array of arrays,
//    Note here we have an array, and the first element in with in this array is this array
//    of numbers.Coz rest operator converts whatever we pass here into an array.
//    so coz we are passing an array of 5 numbers. This rest operator will put this array 
//    inside of another array, and that's why we don't get the sum of these arguments.
//    How can we solve this issue? Well we need to check to see if this items array has a
//    single element, and the first element is an array itself. so we can do something like this.
// 3. check to see ->Now, delete console.log(items), and check to see, if items.length equals 1. And we want to see if the first items is an array, 
//                 -so array.isArray, we pass items of 0.
//    -if tht's the case, we need to flatten this structure. Instead of having an array of arrays,
//     we want to have just an array of numbers. How do we do that?
// 4. Use the spread operator ->we reset the items to a new array, and use spread operator to spread 
//    items of 0, which is another array. 

console.log(sum(1, 2, 3, 4, 5))

function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

    return items.reduce((a, b) => a + b);
}
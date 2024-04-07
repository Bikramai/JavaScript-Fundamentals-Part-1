// How to find elements in Array in JavaScript?
// Finding elements really depends on if you're storing primitive or reference types in an array.

//Let's start with primitive coz they are easier.

// Solution:-
// 1. let set an array of numbers,  with 4 elements. 1, 2, 3, 4.
// 2. Here we have method called indexOf, we pass the element we are looking for,
//    and if that element exists in the array, this method will return the indec of this element in the array.
//    if it doesn't exist, it will return -1. pass the character a, and see.

const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf('a'));

console.log(numbers.indexOf('1'));
console.log(numbers.lastIndexOf(1));


// So basically to see if a given element exist in an array or not 
console.log(numbers.indexOf(1) !== -1); //is not -1, Old version

console.log(numbers.includes(1)); // new method and prefer way for achieving the same thing.
//this simply return true if the given element is exist in an array.

//Note:- that all these methods have a second parameter which is optional. 
// And that is the starting index. For example, you can see the index of 1 is o.
// However, I can pass the second argument here, that second argument is called fromIndex.
// And that's the index from which the search will begin. So I can pass 2 here, 
// so that is 0,1,2, our search will begin here, let's see what we get. So we get 3 which 
// is the index of the second 1 in the array.

console.log(numbers.indexOf(1, 2));
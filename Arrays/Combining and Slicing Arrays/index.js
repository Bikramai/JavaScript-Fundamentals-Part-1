// How to combine or slice an array to two parts in javascript?
// There are few different solutions.

const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8, 9, 10]

// combine method
const combined = first.concat(second);
console.log(combined)

// slice method
// there are multiple ways to use this method.


// 1st way -is to pass zero based index for start and end.
// here we went to combined array, started from index 2 and finished after index 4.
// so we extracted 3 and 4.
const slice = combined.slice(2, 4);

console.log(combined);
console.log(slice);


// 2nd way -to use this slice method, we can exclude end index and we get all the elements.
const slice2 = combined.slice(1);

console.log(combined);
console.log(slice2);


// 3th way - to exclude the starting index.
// with this we get the copy of original array
const slice3 = combined.slice();

console.log(combined);
console.log(slice3);


// Recap:- 1. if you want to combine two or more -use concat method
//         2. if you want to slice an array -use slice method
// one thing we need to understant this method -if you dealing with primitive values, 
// this primitive will be copied into the target array.
// But if you have object values -object themselves are not copied, only the references are copied.
// That means elements in the both input and output arrays will point to the same object.
// let see here, 
const first1 = [{ id: 1 }]; //so now here we have references types
const second2 = [5, 6, 7]


const combined1 = first.concat(second2);
console.log(combined1)
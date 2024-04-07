// How to remove elements in array in javascript?

const numbers = [1, 2, 3, 4];

//End - use the pop element to remove last element
const last = numbers.pop();
console.log(numbers);
console.log(last);

//Beginning - use the shift method to remove the first element.
const first = numbers.shift();
console.log(first);

// Middle - use the splice method to remove an element somewhere in the middle of an array.
// If you want to remove delete multiple element type greater than one, how many you want to delete,
// starting from index 2.
numbers.splice(2, 2);
console.log(numbers)
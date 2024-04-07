// How to use the spread operator to combine two arrays in javascript?


const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8, 9, 10]


// const combined = first.concat(second); // spread method
const combined = [...first, 'a', ...second, 'b']; //spread operator method
console.log(combined)


// const slice = combined.slice(2, 4); // slice method
const copy = [...combined]; //spread slice operator method

console.log(combined);
console.log(copy);



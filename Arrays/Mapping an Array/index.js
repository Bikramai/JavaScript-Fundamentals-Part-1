// How to Mapping the elements of an arrays in javascript?

// Map Method:- we can use the map method to map each element in an array,
// into something else. like string and object etc.

const numbers = [1, -1, 2, 3, 4];

// chaining method - we're calling 1 method, that method returns some result,
// now we're immediately calling the map method on that result.
// Now, whaen chaining multiple methods, by convention we put each mehtod
// call on a separate line, and this makes our code cleaner.
// finally, we store the result in the items.
const items = numbers
    .filter(n => n >= 0)
    .map(n =>  ({ value: n })) // note that map method is returning new array,
    // filter one more time, we get an object, and maybe we want to get objects.
    // call map method and may be map each object.
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

    // so this is the power of chaining these methods.

console.log(items);

// we have noticed that both the filter and map method return a new array,
// They don't modify the original array, this methods are chainable which 
// means we can call them one after another in a chain, so in this case,
// this filtered constant is only used here. We have't used this anywhere
// else in the code. so we dont have to explicitly store the result of this 
// statement inside 
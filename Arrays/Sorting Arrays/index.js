// How to sort elements an arrays in javascript?

// sort method - sort method is easy to use when we have numbers and strings in an array.
const numbers = [ 3, 4,  1, 2 ];
numbers.sort();
console.log(numbers);

// reverse method
numbers.reverse();
console.log(numbers)


// But when we have objects like course objects, it doesn't work by default,
// we have to do some extra work. here is the solution

// 1. let define array, called courses, add two xourse objects
// 2. if statement


const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'JavaScript'},
];

// let's sort by name of courses, here JavaScript have to come before Node.js
courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

});

console.log(courses);


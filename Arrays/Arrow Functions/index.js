
// Predicate Function
// const course = courses.find(function(course){
//     return course.name === 'a';
// });

// console.log(course);

// const course1 = courses.findIndex(function(course){
//     return course.name === 'xyz';
// });

// console.log(course1);

// In ES6 there is a shorter and cleaner way to write the same code using arrow functions.
// Whenever you want to pass a function, as a callback function or as an argument for a 
// different method, you can use the arrow function syntax.

const courses =[
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course = courses.find(course => course.name === 'a');
console.log(course);

const course1 = courses.findIndex((course) => course.name === 'xyz');
console.log(course1)

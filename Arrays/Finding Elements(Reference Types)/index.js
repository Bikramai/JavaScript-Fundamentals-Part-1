// How to find elements in reference types in javascript?
// so finding primitive is different from finding reference types.


// Solution:
// 1. Declare a new array called courses, and in this array we're going to have a couple of courses objects.
//    Here, first, second one with two properties, id is 1 and name is 'a', id is 2, and name is 'b'.
//
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

console.log(courses.includes({id: 1, name: 'a'}));
// here, we get false, the reason for this is coz these two objects.
// that is the objcet that you are passing to the includes method, and 
// the object that we have in the courses array, these are two different objects.
// they have two different references, they're in two differen locations and memory.
// And in the last section, we learned that objectsare reference types so 
// when we check them for their equality, the references are checked. 

// In this case, there are two different references, that's why we get false.
// so if you have an array with reference types, we need to use the find method.


// Predicate Function
const course = courses.find(function(course){
    return course.name === 'a';
});

console.log(course);

const course1 = courses.findIndex(function(course){
    return course.name === 'xyz';
});

console.log(course1);

// Here's our find method, it returns the first element that matches this criteria.
// we have similar method called findindex, it works exactly the same but instead 
// of returning the actual object, like the sourse object, it will return it's index.


// Question:-
// let's deaclare constant called movies, set this in an array objects.
// In this array we're going to have 4 movie objects, in each movie we're going to have 3 properties.

// Hints:
const movies = [
    { title: 'a', year: 2024, rating: 4.5 },
    { title: 'b', year: 2024, rating: 4.7 },
    { title: 'c', year: 2024, rating: 3 },
    { title: 'd', year: 2020, rating: 4.5 },
]

// write code to get all the movies 2024, with rating greater than 4. 
// sort them by their rating
// descending order. movies that have a higher rating should come first.
// Pick their title 
// display on console

// Result:
// 'b'
// 'a'


// Solution:-
// 1. filter movies by the year and rating -> movies dot filter, pass an arrow function, so m as in short for
//    movies goes to m.year equals 2024 && m.rating should be greater than or equal to 4.
//    As we learn earlier this method are chainable, coz filter return s a new array, so we can immediately apply
// 2. short method on the array. -bydefault this short method onlu works for numbers and strings, and object we 
//    need to supply a comparison function.
// 3. reverse()method
// 4. map method


const titles = movies 
    .filter(m => m.year === 2024 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles)
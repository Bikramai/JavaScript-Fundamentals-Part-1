// Create a function called showProperties. We pass an object as parameter.
// And this function should display all the properties of this object 
// that are of type string.


// Solution:-
// 1. Define an object -> movie
// 2. function -> showProperties
// 3. for loop -> to iterate over the properties of this object.
// 4. get the value of this property -> we use bracket notation.
// 5. check the type of that value we use -> typeof operator
// 6. And then we put this in an -> if statement.
// 7. if the type of object of key equals string, then we simply display key as 
//   well as object of key.


const movie = {
    title: 'a',
    releaseYear : 2024,
    rating: 4.7,
    director: 'b'
};

showProperties(movie);

function showProperties(obj){
    for (let key in obj)
     if (typeof obj[key]=== 'string')
     console.log(key, obj[key]);
}


// Note:- 
// Something I need to emphasize here, you might be wondering why i didn't
// use curly braces here. Coz we are dealing with single line statement.




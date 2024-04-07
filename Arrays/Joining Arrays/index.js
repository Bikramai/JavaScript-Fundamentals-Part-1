// How to join elements an arrays in javascript?

// Join method
const numbers = [1, 2, 3, 4];
const joined = numbers.join(','); // note the ? that means the optional and return string.
console.log(joined);

// Another useful method that goes hand and hand with join is the split method,
// but this method is not part of arrays, it's part of strings,
// but let's see how it works.
// split method
const message = 'This is my message';
const parts = message.split(' ');
console.log(parts);


// join method -> this technique is particularly useful in building a URL slug.
const combined = parts.join('-');
console.log(combined);




// Note:- Let me show you the example how the join method workd in url slug.
// let open the url page of tackoverflow.com or any browser. 
// read the title of the question creating array in JavaScript. this is what the 
// user posted as we can see we have white space in between each word, but we cannot
// have a white space in url's so if you look at url, if we at url's in browser 
// it converted to a url slug. So all the white spaces are replaced with a hyphen. 



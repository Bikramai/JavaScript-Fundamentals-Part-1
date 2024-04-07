// Create a function called countTruthy with takes an array 
// and returns a number of of truthy elements in this array.
// Now what are the these truthy or false values, let me quickly refresh your memory.
// Sometime when we have an if statement, we might pass a boolean true or false 
// as a condition here, for example we might have a constant called isActive,
// we set this to true, and when we use this constant as the condition here, 
// we get Hello message on the console. Because this is a boolean true. 
// But sometimes what we have in our if statement is not necessarily a boolean value,
// It could be a string, number, object, so javascript number engine tries to 
// convert that value to something that is like a boolean but is not a boolean.
// Here's an example, let's say i have a constant, name,  i set this to a string, Bikram.
// Now if we pass name here, obviously name is a string, it's not a boolean true or false, 
// so the JavaScript engine tries tointerpret this as truthy or falsey.
// So when we run this code you can see wi still see the hello message, because
// we are dealing with a string of characters. So this is what we call truthy value.
// It's not the boolean true, it's truthy. 
// In contrast, if we had an empty string, JavaScript engine would save this as falsey.
// Again, it's not the boolean false.It's falsey.
// now when we run this code, we no longer see the hello message. so that's all about 
// truthy and falsey values. 
// Now let's quickly review the list of falsey values in JavaScript.

// Complete list of Falsy values
// undefined
// null
// ''
// false
// 0
// NaN

//Questions
// Create a function called countTruthy that gets an array, 
// and returns the number of truthy values in this array.

// Solution:- 
// 1. function -> countTruthy
// 2. declare a variable let count = 0
// 3. for loop
// 4. if else statement

const array = [0, null, undefined, '', 2, 3];
console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if(value)
         count++;
    return count;
}


// we simply pass the value, that value might ve a boolean, 
// or a non boolean, if its not a boolean, the JavaScript 
// engine tries to interpret it as truthy or falsey,
// so if the result is truthy, then the count will be incremented earlier than that.
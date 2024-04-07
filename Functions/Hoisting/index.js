// What is Hoisting in Javascript?
// Hoisting :- 
// Hoisting is the process of moving function declarations to the top of file.
// And this is done automatically by the JavaScript engine that is executing 
// this code. So, that's the reason we can called function that are defined 
// using the function declaration syntax before their definition. 


// Function Declaration
walk();

function walk() {
    console.log('walk');
}


// Function Expression
run();

const run = function() {
    console.log('run');
};

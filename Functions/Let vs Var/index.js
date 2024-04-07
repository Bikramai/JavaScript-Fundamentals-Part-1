
function start() {
    for (var i = 0; i < 5; i++) {
    if (true) {
    // var color = 'red'; // first problem
    let color = 'red'; // second problem
        }
    }

    console.log(color);
}

// var => function-scoped
// ES6 (ES2015): let, const => block-scope
start();

// Note that when you declare a variable with var. It's scope, is not limited to the block
// in which it's defined. It's limited to the function in which it's defined, and this is 
// not how most or all programming languages work. it's one of those weird things in 
// JavaScript that we have had for a long time.
// Before ES6, var was the only way to declare variables in constants.
// Starting from ES6, also called ES2015, now we have two new keywords let and const, 
// to define different variables and constants. These two keywords create block scope
// variables, but var creates function scoped variables.

// issues with var:
// 1. when we use var it will accessible to everywhere in global.
// 2. with global variables.


// 1. let's declare two variables one with var color, we set it to red.
// 2. let age and set it to 30. Now when we use var, outside of a function,
//    this creares a global variable and attaches that global variable to the 
//    window object in the browser.
// 3. so in browsers we have this window object, which is a complex object with 
//    lots of properties and methods. When you want to build frontedn applications
//    you're going to work with this window object al lot.
// 4. what matters here is this var keywoed attaches this color variable to the window object.
// 5. so if you type window.color our color variavle is here. look our variable we defined
//    outside the function is here.

// 6. In contrast when we use the let keyword to define a global variable, that globel 
//    variable is not attached to the window object.
// 7. if we type window.age, we get undefined.
// 8. why is it bad to attach a window to a variable objece?
//    Well, because window object is something central, there is only one instance of the window object,
//    and let's say you're using a third party library. If that third party library also has a
//    variable with the same name, that variable can override your variable. So you should avoid adding 
//    avoid adding stuff to the window object. Otherwise you're going to create all sorts of issues in 
//    your program. 

var color = 'yellow';
let age = 30;


// Takewaya: avoid using the var keyword, because it creates variables that are 
// function scope, not block scope.

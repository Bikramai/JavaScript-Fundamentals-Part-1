// Scope:-
// a scope of a variable or a constant, determines where the variable or constant is accessible.
// when we declare variables or constants with let or const, their scope is limited to the block
// in which they are defined. so the message is accessible in that block, but it's not accessible
// outside of that block. 



// you might be wondering why do we need this code block here? Well, 
// this code can be part of a function. 
// So here we can have a function called start. And now we have a constant in this function.
// so the scope of this constat is limited to the block in which it's defined, we cannot access 
// the constant outside of the start function. The same is true when we declare a varible 
// or a constant in an if block. So, let's add an if blick here, some condition, 


// Global Scope:- means the constant is accessible everywhere.
const color = 'red';


// Local Scope:- constants or variables are only accessible with in the function.
// local variable are cocal constants in a function, take precedence over global variable
// or constants. Now in general you should avoid defining global variables or constants, 
// that is considered bad practice. 

// let me give you a metaphor. Imagine this is a tooth brush, and each function is a person.
// You don't want to have a tooth brush that is shared with multiple people. Each person should
// have their own tooth brush. so you should avoid defining global variables or constants coz 
// they're accessible everywhere, globally, and each function can accidentally change their value, 
// and this will lead to all kind of bugs and issue in our programs. 
function start() {
    const message = 'Hi';
    const color = 'blue'; 
    console.log(color);

    if (true) {
        const another = 'bye';
    }

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}

start();


function stop(){
    const message = 'bye';
}

start();
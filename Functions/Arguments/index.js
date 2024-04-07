function sum(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(sum(1, 2))
console.log(sum(1))
console.log(sum())
console.log(sum(1, 3, 4, 5, 6, 7, 7))


// but in JavaScript it doesn't matter that if the function has 2 parameters, 
// we can pass only 1 argument.

// when we have 1 number + udefined, the result is not a number, this is not a valid
// arithmetic operation. same happens if we don't pass any arguments. 
// but if we pass more then that value like 5 arguments. And that's perfectly valid
// javascript code. when we save this, we still get 3, because only the first 2 arguments
// are used. But what if you want to have a varying number of parameters in a function?
// what if you want to have the flexibility to pass as many arguments as we want, and
// get their sum. well, every function in JavaScript has a special object called arguments.
// you can see that it kind of looks like an array, but it's not an array, 
// it's an object. but the keys we have in this object are indexes of the arguments passed
// to this function.so first argument is 1, second argument is 2, and so on.

function sum1() {
    let total = 0;
    for (let value of arguments)
    total += value;
    return total
    
}

console.log(sum1(1, 2, 3, 4, 5, 5, 6, 10));
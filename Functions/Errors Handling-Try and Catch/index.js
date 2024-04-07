// Error Handling:- Typically, in situations, we should do error handling at the 
// beginning of a function or a method, this is what we call defensive programming.
// so we want to make sure that the values coming in are valid, they're in the right 
// shape, so we can execute our logic.
// null didnot take effect.
// But sometimes we want to report an error in our application. that's where we need to throw
// an exception. Throwing an exception is a technical jargon that you might here in a lot of 
// programming languages.

// Let's see how that works in JavaScript.

const person = {
    firstName: 'Bikram',
    lastName: 'Phurumbo',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string') return; // error handling
        //construction function and have pascal to create new error message
            throw new Error('Value is not a string.'); 
            
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = ''; // try with true and null and check out what types of error you get in console.
}
catch (e) {
    alert(e);
}

console.log(person);

// Basically when we throw an exception, the lines after the throw statement are not executed.
// Will jump out of the method and control will move to the catch block.
// And then catch the exception, and do something with it. so this is the basic of error handling.
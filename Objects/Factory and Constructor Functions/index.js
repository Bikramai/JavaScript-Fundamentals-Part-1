// Writ two different functions one is factory function and other is a constructor function,
// Initialize address object.

// Object literal syntax
// const address = {
//     street: 'a',
//     city: 'b',
//     zipcode: 'c'
// }

//Solution:-

// let address = createAddress('a', 'b', 'c');

// console.log(address)

// Factory Function: - use camel notation
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}


// Constructor Function:-
// -constructor functions have a different naming convention,
// -We use Pascal notation.

const address = new Address('a', 'b', 'c')

console.log(address)

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode
}

// Note:- the purpose of this exercise was to help to get fimiliar with the syntax for creating
// factory and constructor functions.

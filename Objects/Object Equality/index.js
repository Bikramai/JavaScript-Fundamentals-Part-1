// Create two functions one is called areEqual, and areSame. so we pass two address objects, 
// address1, address2, and we check to see if these two objects are equal.
// They're referencing the same object.

//-As we know before, objcets are reference types, 
//-so we can have two objects with the exact same properties, 
//-but these objects are in different memory locations,

//-when we use the equality operator(===)we're essentially checking to see 
//-if these objects have th same reference.
//-noe, to properly check to see if two objects are equal,
//-we need to check their properties, we need to make sure that all their
//-properties are equal.



// Constructor Function:-
// -constructor functions have a different naming convention,
// -We use Pascal notation.

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));


// Constructor Function - This function we need to check individual properties
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode
}

function areEqual(address1, address2) {
    return address1.street === address2.street && 
        address1.city === address2.city && 
        address1.zipCode === address2.zipCode;
}

function areSame(address2) {
    return address1 === address2; // strict equality operator.
    // It means if they are referencing the same object, it will return true.
    // Otherwise it will return false.
}


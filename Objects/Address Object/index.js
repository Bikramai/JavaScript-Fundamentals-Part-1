// Create an address object with three properties -street, city, and zipcode.
// Create a function called showAddress that takes an address object and 
// displays all the properties of this object along with their value.

// Hints:
// street
// city
// zipcode
// showAddress(address)


// Solution:-
// 1. Create an address object, we can use the let or constant keyword.
// 2. Use object literal syntax to initialize this object, so we have the proporties.
// 3. Create function -> showAddress, that pass/takes address object
// 4. for in loop -> to enumerate the properties of this object.




const address = {
    street : 'a',
    city: 'b',
    zipcode: 'c'
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]) //bracket notation for the value of a given key
}

showAddress(address);
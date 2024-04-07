// we can set the default value for function parameters.
// there is just one caveat here, once you give a parametr a default value, 
// we should also give all the other parameters after that a default value.

function interest(principal, rate = 3.5, years = 5) {
    // rate = rate || 3.5
    // years = years || 5;

    return principal * rate / 100 * years;
}

// console.log(interest(10000, 3.5, 5));
console.log(interest(10000));
// How to Iterate an arrays in javascript?


const numbers = [1, 2, 3, 4];

for (let number of numbers)
    console.log(number);

numbers.forEach(function(number) {
    console.log(number);
});


numbers.forEach((number, index) => console.log(number, index));


// Here we have this numbers array, and a function called except that takes an array and excluded and another array and
// in this array we can add the values we want to be excluded from the original array.
// So this function returns a new array, without the values that we have passed here.
// so if you run this program, we get a new array, with these three values, 2, 3, 4 coz we excluded 1. 
// Note that it doesn't matter how many 1's we have here couple more 1's and we still get the same result.
// Or we can add multiple values here, so let's we want to exclude 1 and 2, so as result we get 3 and 4.


// Solution:-
// 1. Create a function called except that takes an array and excluded.
// 2. we need to declare an array called output and initialize it to an empty array, 
//    -this is what we're going to return from this function.
// 3. for loop -> for (let element of array) -iterate over this original array, and for each element we have to see
//             -if that elements is in this other array. if it's not  then we'll add that element
//             -into this new array. 
// 4. if excluded array includes this element. -so basically we are  checking to see if the current element is in excluded array.
//                                             -if it's not!, so we apply the not operator,then we will add this element into output array.
// 5. output.push(element). 
// 6. finally, we return output.


const numbers = [1, 2, 3, 4, 5];

const output = except(numbers, [1, 2]);


console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
        output.push(element);
    return output;
}





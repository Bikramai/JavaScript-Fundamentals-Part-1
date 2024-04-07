// How to emptying an array in javascript?
// There are few different solutions.

let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution #1 :
// 1. we can simply reassign to a new array.
// 2. Now in this case, coz we have declared this array using const we cannot do this,
//    so we have to change const to let.
// 3. let log on the console.

// Now our array is empty. However, Note that this old array is still in the memory,
// so if there are no other references to this object, eventually it will be removed by the  
// garbage collector. So this means if we have another variable called another, 
// and this is also pointing to the same object, this original array will not be garbage collected.
// So, when we reassign the numbers variable, now numbers is pointing to a new object in memory.
// but another is still pointing to the old object.

// let's log another. we can see another is still pointing to this array, to the original array,
// but if we look at the nunbers, numbers is now piinting to a new object. 

// numbers = [];

console.log(numbers);
console.log(another);

// Notes:- So this solution works if you do not have other references to the original array.
// if you do have multiple references to the original array, then you need 
// to use one of the other solutions.

// Solution #2:- use .length method and this will truncate the array/remove all elements

// My personal preference is to set the length of the array to 0.
// Overall I go to solution #1 or either solution #
numbers.length = 0;

console.log(numbers);
console.log(another);


// Solution #3:- use a splice method
numbers.splice(0, numbers.length);

console.log(numbers);
console.log(another);


// finally last Solution #4:- by using pop method with keep calling loop as long as element in the array.
// not recommend to do coz if you're dealing with a large array, or dealing with million object in the array,
// there's going to be a performance cost. we are essentially calling this pop method a million times.
// unless you work for Google, but in terms clean coding, we can see this approach is
// pretty noisy,compare that to the solution#1
// This is very simple, elegant, the only issue it has is it 
// doesn't work if you have multiple references to the array.


while (numbers.length > 0)   
numbers.pop();

console.log(numbers);
console.log(another);

// Write a function called show numbers, that takes a parameter called limit.
// so we pass a number here, like 15, and when we call this function, 
// we should call all the numbers from 0 to the number we supplied as the limit.
// Next to each number if that number is even we should display the even number, 
// otherwise we should display odd.

// solution :-
// 1. Function -> shownumbers
// 2. For Loop
// 3. if else statement

showNumbers(15)

function showNumbers(limit){
    // Simple way
    for (let i = 0; i <= limit; i++){
        if(i % 2 === 0)console.log(i, 'EVEN');
        else console.log(i, 'ODD')
        
    // Best way
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message);
    }
}




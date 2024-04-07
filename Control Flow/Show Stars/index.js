// This exercise is very popular to Junior Programmers.
// Create a function showStars, with a parameter called rows.
// When we call this functjion and pass 5, we get 5 rows and each row we have a star.
// also called nested loop


// Solution:-
// 1. function -> showStars
// 2. for loop -> let row = 1, as long as row is less than or equal to the number of rows, we want to increment row.
//    -Now each row, depending on the number of row, we need to display one or more stars.
// 3. let declare variable called pattern, set it to  an empty string.
// 4. Here, we need another - for loop
//    -let call this i, set it to 0, as long as i is less than row, increment i.
// 5. add a star to the pattern, so plus equals star(*)string.

//    explaination of code:-
//    -So if you're on row 5, this loop will execute 5 times, coz we've started from 0, and we run this while i is 
//    -less than row, so this will execute 5 times, and each time we'll append one star to our empty string.
//    -So we'll end up with 5 stars. And finally, when we are done. 

// 6. print console.log of pattern.


showStars(5);

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
            pattern += '*'
        console.log(pattern);
    }
}
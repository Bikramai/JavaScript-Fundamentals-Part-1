// Create a function called calculateGrade.
// Calculate the grade of a student. Here are the marks of a student in different subjects.
// we pass this array with this function, calculate grade, what this function does, 
// is first it calculates the average grade.


// Solution:
// 1. function -> calculateGrade.
// 2. calculate the average mark -> declare variable - let sum = 0.
// 3. use for of loop -> to iterate this array of marks.
// 4. calculate the sum of all these marks.



const marks = [ 80, 80, 50 ];

// Average = 70

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));


function calculateGrade(marks){
    // let sum = 0;
    // for (let mark of marks)
    //     sum += marks;
    // let average = sum / marks.length;

    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

// this is generic function we use in different suitation 
function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}

// Note:- Simplicity is the ultimate sophistication. -Leonardo Da Vinci.
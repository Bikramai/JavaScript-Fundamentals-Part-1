// Create a function showPrimes, that takes a limit upto 20, 
// and shows all the prime numbers up to this limit.

// Incase you don't knw what's a prime number, let me give you a brief explaination.
// In mathematics, numbers can be prime, or composite.
// -Prime (whose factors are only 1 and itself)
// -it cannot be divided evenly inot another number.
// -eg: 12 = 1, 2, 3, 4, 6, 12, -Can be divided enenly by its factors.
//  -These are the factors of 12. so when we divided 12 by these numbers, 
//  -we won't get any remainder. The remainder will be 0.

// -Composite
// -12 is the composite number, coz it has many factors, 
// -a prime number in contrash has only 2 factors, it's 1 and itself.
// -11 = 1, 11
//  -eg: the factors of 11 are 1 and 11 itself.
// -13 = 1, 13
//  -eg: the same is true 13 are 1 and 13 itself. 
//  -It can only be divided evenly by 1 and 13.


//Solution:-
// 1. Function -> showPrimes
// 2. for loop -> let number set to 2, as long as number is less than or equal to limit, increment number.
// 3. for each number we need to check if prime or not -> we need another
//    -for loop -> that starts from 2 all the way to the current number. That is number.
//    -With this nested loop, we can see if number has a factor other than 1 ans itself.
// 4. Definne another for loop -> let set factor to 2, as long as factor is less than this number, factor++.
// 5. if statement -if the number can be evenly divided by it's factor, ->if number modulos factor equals 0, 
//    -that means this number has a factor other than 1 and itself.

//    -Explanation:-
//    -that why i havenot included 1 in the loop, coz ofcourse! every number can be divided by 1, 
//    -for the same reason I have not included the number itself in this loop coz again we know that each number 
//    -can be divided by itself evenly. so in our inner loop, we want to see if we have a factor other than
//    -1 and the number itself. So if we do, that means this number is not a prime number.

// 6. Declare a variable, call it isPrime, -> set isPrime to false, we can assume that this number is a prime number, 
//    -but if this condition is true, than we need to set isPrime to false. Also, if we get to this point,
//    -there is really no need to continue this loop, coz this is just wasting our computers processing power.
//    -we put the break point to jump put of inner loop.

// 7. if(isPrime) it is true ->if(isPrime)console.log(number).




showPrimes(30)


function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {

        let isPrime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isPrime = false;
                break;
            }

        }
        if (isPrime) console.log(number);
    }
        
}


// Convert this function to the single responsibility principle.
// We want to have small functions, each function responsible for a single task.
// Modify this code, extract a new function, make sure each function is small, 
// and responsible for a single task. 

// Solution:-
// 1. Check function -> so if you look at the line 54-61, 
//    -all we are doing here is checking to see if a number is prime or not.
// 2. This logic doesnot necessarily have to be part of our showPrimes function.
// 3. We can have a separate function, -> function, called isPrime, that takes a number, 
//    and simply tells us if this number is prime or not. 
// 4. Than we can use this function inside of showPrime's function, or somewhere else.
//    -so it's a reusable function, it's a reusable piece of code.
// 5. Extract line 54-61 and move to new function ->isPrime(number)
//    -we can make this code cleaner and more elegant. so if we get to this point.
// 6. Instead of break -> return false

//     -Explaination:-
//    -or otherword, there is no need to break and then return isPrime. 
//    -You can do a short cut here,
//    -we simply return false, 
//    -that means we don't need to set isPrime to false,
//    -we don't even need to declare isPrime.
//    -we run this loop, we try to find a factor for this number, 
//    -if we find a factor we immediately return false.
//    -Otherwise, we get to this point that means we didn't find any fators for this number 
//  7. so we return true.
//     -Also, we can get rid of all these curly braces, coz our if statement has a single statement.
//     -and our if statement also has a single statement.      


function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) 
        if (isPrime(number)) console.log(number);
}


function isPrime(number) {
    
    for (let factor = 2; factor < number; factor++) 
        if (number % factor === 0) 
            return false;
        
    return true;
}


// we havve two very simple functions. if you give this function to the dumbest person in the world
// they will understant it. Also we don't have nested loops, generally speaking nested loops are a bit hard to understand.
// So whatever you have a nested loop, that's probable an indication that you can extract the logic in the inner loop
// and put it somewhere else in a different function.





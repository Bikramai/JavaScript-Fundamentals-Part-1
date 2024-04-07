// Question:-
// we have this function called move, and we use that to move an element in an array. 
// so this is how it works we give it an array the index of the element we want to move and an offset.
// So in this case, if want to move the first element in this array that is 1. Now I'll pass 0 as the offset,
// so with this nothing is going to change, we're going to get the same array.
// However, if we pass 1 as the offset, see what happens here. So 1 moves 1 position to the right.
// if we pass two as the offset, 1, ends up here, if we pass 3, it ends up being at the end of the array,
// if we pass anything more than the length of the array, that is 4, We get this error, invalid offset.
// Now to display errors like this. We should use another method called console.error. 
// So you seem to pass this string, and that eill end up as a red message on the console.
// and also note that this offset can be a negative number. so let's say we want to move this second element
// 1 position to the left. so we set index to 1, and offset to -1. so 2 moves to the beginning of the array, 
// if we pass -2 as the offset, because it can't jump out of the array, once again, we are going to get this error,
// invalid offset. Also note that in all these examples the original array is unaffected, so we get a new array 
// with items reordered.




// Solution:-
// 1. we want to do is copy this array, coz we don't want to modify it. so that's where we use the
//    spread operator. 
// 2. define a constant, called output. Set it to a new array, and then we are going to spread the original array,
//    -so this will be a clone of the original array. 
//    -as part of moving an element, first, we need to remove it from the array, and then we need to place at the 
//    -right position.
// 3. we use the output.splice(index, 1) [0] method ->to remove an element from an array, so we go to the given index and delete 1 item.
//                              -Now look at the return value of this method. it returns an array. so the items that 
//                              -are removed will be returned as an array.In this case, we're removing 1 item 
//                              -so we can assess the firat element in that array, and that woulf return the element
//                              -that we just deleted. so let's store that in a separate constant. the reason we are 
//                              -storing it here is cpz next we need to add thisback to the array.
// 4. once again, we use output.splice(index + offset, 0, element)method ->now where we going to place this. ->we want to go index plus offset, we don't
                            //  -delete any items here, so we pass 0, and finally element that we want to place in the array.
// 5. finally, we return output.

// explation:- let's test the code we have written so far-
// if we move the first element 1 position we get the right result, beautiful, if you move it 2 positions to the right, it ends up
// here, if you pass 3,it ends up being at the end of the array. If you pass 4,we don't get the reeor that we told we should produce,
// but the output is still the same. Now to solce this issue we need to come back here and do some and do some basic validation before
// running this algorithm for moving an item. 
// 1. we define a constant called position, that is the new position that's going to be index + offset, exactly the same value
//    we have used below while we store output.splice(index + offset) method. so we can express this expression with position,
// 2. now we have position, we can check to see ->if position is greater than or equal to array.length or position is a negative number.
//    -then, we shoule display ther error,
//    -so in this case our array has 4 elements, if you pass 4 or a greater value, we should see the error on the console.
//    -so here we add the code block, console.
// 3. Here we add code block,console. ->console.error('Invalid offset.')
// 4. finally we return. -so the rest of the function is not excuted. 
//    Theoption would be to tske an else block here. But that means we have to put this code inside the block, thereis going 
//    to be a bit of indentation, this is really unnecessary, coz if we return here, none of the code here will be executed.


const numbers = [1, 2, 3, 4, 5];

const output = move(numbers, [1, 3]);


console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0){
        console.error('Invalid offset.');
    }


    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}





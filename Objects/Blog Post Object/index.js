// Create a blog post object with these properties
// title,
// body, 
// author,
// views, -which represents the number of times this post has been viewed.
// comments, - Each comment should have a couple properties.
//      (author, body)
// isLive, -either true or false
// In this condition, we should always use object literal syntax to create 
// and initialize a blog post.
// Give each property some value, the actual value doesn't really matter.

//Solution:-
// 1. let's create a post object, using the object literal syntax,
// 2. we set the title to a, body to b, author to c, - all three properties are string,
//    view to number, set that to 10, comments, should be array coz we can have multiple
//    comments, so set that to an arry/[], -each comment should have two properties-(author, body),
//      -here again, we use object literal syntax to initialize a comment object.
//    finally, isLive set that tto true.


let post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 10,
    comments: [
        { author: 'a', body: 'b'},
        { author: 'c', body: 'd'}
    ],
    isLive: true
};

console.log(post);



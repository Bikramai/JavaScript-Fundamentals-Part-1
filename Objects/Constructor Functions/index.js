// Use a constructor function to create a Post object, pass/takes title, body, author.
// Here is the scenario. Imagine we're building a blogging engine,
// the user is drafting a post, but they have not published it yet, 
// What do you think that constructor function should look like?



// Solution:-
//1. Create Constructor function -> Post(title, body, author)

let post = new Post('a', 'b', 'c');

console.log(post);

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}




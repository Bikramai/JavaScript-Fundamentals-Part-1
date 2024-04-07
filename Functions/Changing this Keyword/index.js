// 1.rule -method -> obj

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function() {
    console.log(this);
};

video.stop();


// 2. rule -function -> global (window, globel)
// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

function playVideo() {
    console.log(this);
};

playVideo();

// what if this is a constructor function?
// we call the constructor functions using the new operator.

function Video(title) {
    this.title = title;
    console.log(this);
};

const v = new Video('b')// {}

// when we use the new operator this new operator creates a new empty object,
// sets this in this constructor function to point to this empty object.

// Recap:- 
// When dealing with a regular function, this(this.title = title;)by default references the global object,
// but if you call a function, uasing the new operator, which is the case for constructor functions, 
// this will fefernce a new empty object. 

// Now last example:-

const video1 = {
    title: 'b',
    tags: ['a', 'b', 'c', 'd'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    }
};

video1.showTags();

// but waht if we want to display the title of the video next to each tag?
// -to solve this problem type this at the end of the }, this) but not all
// -give you the ability to pass the this argument.

// so we have few different solution for that is changing this.

function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: 'Bikram'}, 1, 2); //call method
playVideo.apply({ name: 'Bikram'}, [1, 2]); //apply method
playVideo.bind({ name: 'Bikram'})(); //bind method

playVideo();

// using the bind method is second way to solve the video1 solution.
const video2 = {
    title: 'b',
    tags: ['a', 'b', 'c', 'd'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }.bind(this));
    }
};

video2.showTags();

// But there is new one and better solution to solve video2.
// Starting from ECMA script 6, we have arrow function.
// The good thing about the arrow functions is that they inherit the value.

// by using arrow function
const video3 = {
    title: 'b',
    tags: ['a', 'b', 'c', 'd'],
    showTags() {
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        });
    }
};

video3.showTags();

// Quick Recap:-
// we learned about 3 ways to change the value of this keyword.
// Solution 1 -use the  self approach
// Solution 2 -use the  bind method
// Solution 3 -use the  self approach -old way and little bit noisy but still see it in a lot of js app.
// Solution 4 -use the arrow function -Modern approach, when dealing with callbacks.
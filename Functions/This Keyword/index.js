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
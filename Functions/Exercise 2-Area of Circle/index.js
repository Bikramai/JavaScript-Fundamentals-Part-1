// Create a circle object using the object literal syntax.

// Hints:
// This object should have a radius property that we can read or write to,
// for example, we can set 
// circle.radius = 2;
// circle.area = 20



// Solution:
// 1. let's declare a circle object, give it a radius initially 1, 
// 2. Now to create a read only property, we need a getter.
//    ->so we use get keyword, area is the name of our property, 
//    -but actually it's implemented as a method. 
//    ->we need to return math.PI times this.radius times this.radius.
// 3. console.log of circle.area

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area)
// Here on yelp.com we have price range buttoms. 
// so we've got inexpensive, moderate, pricey, and so on. if we want to implement
// this concept, using objects, what properties do you think those object should have,
// that's the focus of this exercise.

// Hint:
// Create an array of objects each boject is what we call price range object.
// It's one of these objects here. Now here we have 4 price range objects, 
// in this exercise we can create only 3 price range objects. Think about 
// the properties that each object should have.


// Solutions:-
// 1. Create an array called priceRanges.
// 2. In this array we're going to have three objects, each object should have 4 properties, 
//    -one is the label that we display to the user, like a dollar sign.
//    -second property is a tooltip
// 3. we might have another array here,restautants. In this array we're going to have 
//    -restaurant object. -averagePerPerson.


let priceRanges = [
    { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restauants = [
    { averagePerPerson: 5 }
]
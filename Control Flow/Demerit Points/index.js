// Implement the function check speed, this function takes a parameter that's the speed of a car.
// In this program, I'm assuming that speed limit is 70km an hour. so if the car is driving 
// under the speed limit, we get Ok message. 
// If somebody is driving exactly at the 70 speed limit, we're still good, and get still message.
// For every 5km above the speed limit, we get 1 point. 
// So, if we drive at 75km an hour, we get 1 point here. But what if we drive 72km an hour?
// We still good. So for every 5km, above the speed limit, we give the driver 1 point. 
// As part of calculation the point here, we will have to use one of the built in javascript that is Math.floor.
// Back to our cheekspeed function, what if you passed 80 here? we should get 2 points.
// what if we drive at 180km an hour? Our license is suspended. 
// So, if a driver gets more than 12 points, then their license should be suspended.
// We display the number of points

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended
// return -> points

checkSpeed(140);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok')
        return;

    }
   
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('License suspended');
    else
        console.log('Points', points);
    
}





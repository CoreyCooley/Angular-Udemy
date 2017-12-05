"use strict";
exports.__esModule = true;
function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
DoSomething();
function DoSomething() {
    var number = 1;
    var count = 2;
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
var doLog = function (message) {
    console.log(message);
};
doLog("Corey Arrow Funtion");
// Import Point Class
var point_1 = require("./point");
//let point: Point = new Point();
var point = new point_1.Point(1, 4);
point.draw();
point.x = 10;
point.draw();
/*
let drawPoint = (point: Point)=>  {
    // ...
}

let getDistance = (pointA: Point, pointB: Point) => {
    // ...
}


drawPoint({
    x:1,
    y: 2
})
*/ 

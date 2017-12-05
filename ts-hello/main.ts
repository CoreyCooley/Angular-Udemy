function log(message)
{
    console.log(message);
}

var message = 'Hello World';

log(message);
DoSomething();


function DoSomething()
{
    var number = 1;
    let count  = 2;

    for(let i = 0;  i < 5; i++)
    {
        console.log(i);
    }

    console.log('Finally: ' + i);
}

let doLog = (message) => {
    console.log(message);
}

doLog("Corey Arrow Funtion");

// Interface
interface IPoint{
    x: number,
    y: number,
    draw: () => void // function signature
}

// Import Point Class
import {Point} from './point';

//let point: Point = new Point();
let point = new Point(1, 4);
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
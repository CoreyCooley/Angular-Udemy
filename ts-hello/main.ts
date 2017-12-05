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

interface Point{
    x: number,
    y: number
}

let drawPoint = (point: Point)=>  {
    console.log(point.x + ' ' + point.y);
}

drawPoint({
    x:1,
    y: 2
})
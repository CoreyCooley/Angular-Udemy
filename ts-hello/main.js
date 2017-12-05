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
var drawPoint = function (point) {
    console.log(point.x + ' ' + point.y);
};
drawPoint({
    x: 1,
    y: 2
});

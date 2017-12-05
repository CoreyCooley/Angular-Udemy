// Class
export class Point{
    private _x: number;
    private _y: number;

    constructor(x?: number, y?: number){
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.');
        this._x = value;
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
}
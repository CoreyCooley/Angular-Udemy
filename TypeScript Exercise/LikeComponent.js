"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Facebook "Like"
var LikeComponent = /** @class */ (function () {
    function LikeComponent(votes, isSelected) {
        this._likesCount = votes;
        this._isSelected = isSelected;
    }
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.onClick = function () {
        this._likesCount += (this._isSelected) ? -1 : +1;
        this._isSelected = !this._isSelected;
        console.log('Votes: ' + this._likesCount + ' Toggled: ' + this._isSelected);
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;

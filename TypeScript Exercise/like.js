"use strict";
exports.__esModule = true;
// Facebook "Like"
var Like = /** @class */ (function () {
    function Like(votes) {
        this._votes = votes;
    }
    Object.defineProperty(Like.prototype, "Votes", {
        get: function () {
            return this._votes;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('votes cannot be less than 0.');
            this._votes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "Status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.click = function () {
        if (this._status)
            this._votes--;
        else
            this._votes++;
        this._status = !this._status;
        console.log('Votes: ' + this._votes + ' Toggled: ' + this._status);
    };
    return Like;
}());
exports.Like = Like;

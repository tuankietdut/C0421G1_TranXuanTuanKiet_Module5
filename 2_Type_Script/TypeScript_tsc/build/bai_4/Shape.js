"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(numberX, numberY) {
        this._numberX = numberX;
        this._numberY = numberY;
    }
    Object.defineProperty(Shape.prototype, "numberX", {
        get: function () {
            return this._numberX;
        },
        set: function (value) {
            this._numberX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "numberY", {
        get: function () {
            return this._numberY;
        },
        set: function (value) {
            this._numberY = value;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
exports.Shape = Shape;

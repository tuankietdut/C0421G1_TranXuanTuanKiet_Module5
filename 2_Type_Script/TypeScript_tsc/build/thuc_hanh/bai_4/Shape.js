"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(numberX, numberY) {
        this._numberX = numberX;
        this._numberY = numberY;
    }
    Shape.prototype.getNumberX = function () {
        return this._numberX;
    };
    Shape.prototype.setNumberX = function (value) {
        this._numberX = value;
    };
    Shape.prototype.getNumberY = function () {
        return this._numberY;
    };
    Shape.prototype.setNumberY = function (value) {
        this._numberY = value;
    };
    Shape.prototype.toString = function () {
        return "Length + width: " + this._numberX + "||" + this._numberY;
    };
    return Shape;
}());
exports.Shape = Shape;

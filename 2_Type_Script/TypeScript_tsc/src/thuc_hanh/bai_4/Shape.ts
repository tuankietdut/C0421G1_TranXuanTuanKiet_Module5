export class Shape {

    private _numberX: number;
    private _numberY: number;


    constructor(numberX: number, numberY: number) {
        this._numberX = numberX;
        this._numberY = numberY;
    }


    getNumberX(): number {
        return this._numberX;
    }

    setNumberX(value: number) {
        this._numberX = value;
    }

    getNumberY(): number {
        return this._numberY;
    }

    setNumberY(value: number) {
        this._numberY = value;
    }

    toString(): string{
        return "Length + width: " + this._numberX + "||" + this._numberY;
    }

}
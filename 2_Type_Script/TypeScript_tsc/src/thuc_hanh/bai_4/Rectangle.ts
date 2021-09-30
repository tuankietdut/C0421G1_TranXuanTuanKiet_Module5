import {Shape} from "./Shape";
import {IArea} from "./IArea";

export class Rectangle extends Shape implements IArea{


    constructor(numberX: number, numberY: number) {
        super(numberX, numberY);
    }

    calculatorArea(): number {
        return super.getNumberX() * super.getNumberY();
    }

}
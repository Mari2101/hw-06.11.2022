import { Utils } from './utils.js';
export class Rectangle {
    height;
    width;
    timeStamp;
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.timeStamp = Utils.currentDateString();
        //this.timeStamp = new Date().toDateString()
    }
    //get/getter: computed property - תכונה מחושבת
    get area() {
        return this.height * this.width;
    }
    //method:
    calcArea() {
        return this.height * this.width;
    }
    toString() {
        //return JSON.stringify(this)
        return `Rectangle: height=${this.height}, width=${this.width}, area=${this.area}`;
    }
}

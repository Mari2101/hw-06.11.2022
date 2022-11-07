import { Utils } from './utils.js';

//type for object literals
export interface RectangleType {
  height: number;
  width: number;
  timeStamp: string;
}

export class Rectangle {
  height: number;
  width: number;
  timeStamp: string;
  constructor(height: number, width: number) {
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





import p5 from "p5";
import { distance_between_point } from "../utility/distance";

export class Circle {
  _x: number;
  _y: number;
  _radius: number;
  _bend: number;
  constructor(x: number, y: number, radius: number, bend: number) {
    this._bend = bend;
    this._x = x;
    this._y = y;
    this._radius = radius;
  }

  show(p5: p5) {
    p5.stroke(255);
    p5.noFill()
    p5.circle(this._x, this._y, this._radius * 2);
  }
  dis(c: this) {
    return distance_between_point(this._x, c._x, this._y, c._y);
  }
}

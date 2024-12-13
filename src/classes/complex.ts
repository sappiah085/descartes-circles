export class Complex {
  _a: number;
  _b: number;
  constructor(a: number, b: number) {
    this._a = a;
    this._b = b;
  }

  add(a: number, b: number) {
    return new Complex(this._a + a, this._b + b);
  }
  scale(a: number) {
    return new Complex(this._a * a, this._b * a);
  }
  mul(a: number, b: number) {
    return new Complex(this._a * a - this._b * b, this._a * b + this._b * a);
  }
  sqrt() {
    let m = Math.sqrt(Math.sqrt(this._a ** 2 + this._b ** 2));
    let a = Math.atan2(this._b, this._a);
    return new Complex(m * Math.cos(a / 2), m * Math.sin(a / 2));
  }
}

import { Circle } from "../classes/circle";
import { Complex } from "../classes/complex";
import { fourth_radius } from "../utility/fourth_radius";

export function apollonian(circles: Circle[]) {
  let c1 = circles[0];
  let c2 = circles[1];
  let c3 = circles[2];
  const [f, s] = fourth_radius(circles);
  let z1k1 = new Complex(c1._x, c1._y).scale(c1._bend);
  let z2k2 = new Complex(c2._x, c2._y).scale(c2._bend);
  let z3k3 = new Complex(c3._x, c3._y).scale(c3._bend);
  let k1k2z1z2 = z1k1.mul(c2._x, c2._y).scale(c2._bend);
  let k2k3z2z3 = z2k2.mul(c3._x, c3._y).scale(c3._bend);
  let k1k3z1z3 = z1k1.mul(c3._x, c3._y).scale(c3._bend);
  let sum_sqrt = k1k2z1z2
    .add(k2k3z2z3._a, k2k3z2z3._b)
    .add(k1k3z1z3._a, k1k3z1z3._b)
    .sqrt()
    .scale(-2);
  let sum_f = z1k1.add(z2k2._a, z2k2._b).add(z3k3._a, z3k3._b);
  let sum_pos = sum_sqrt.scale(-1).add(sum_f._a, sum_f._b);
  let coordinate_negative_f = sum_sqrt.add(sum_f._a, sum_f._b).scale(1 / f);
  let coordinate_negative_s = sum_sqrt.add(sum_f._a, sum_f._b).scale(1 / s);
  let coordinate_pos_f = sum_pos.scale(1 / f);
  let sum_pos_s = sum_sqrt
    .scale(-1)
    .add(sum_f._a, sum_f._b)
    .scale(1 / s);
  return [
    { x: coordinate_negative_f._a, y: coordinate_negative_f._b, d: f },
    { x: coordinate_pos_f._a, y: coordinate_pos_f._b, d: f },
    { x: sum_pos_s._a, y: sum_pos_s._b, d: s },
    { x: coordinate_negative_s._a, y: coordinate_negative_s._b, d: s },
  ];
}

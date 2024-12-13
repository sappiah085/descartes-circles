import { Circle } from "../classes/circle";

export function fourth_radius(circles: Circle[]) {
  let k1 = circles[0]._bend;
  let k2 = circles[1]._bend;
  let k3 = circles[2]._bend;
  let first_part = k1 + k2 + k3;
  let second_part = 2 * Math.sqrt(k1 * k2 + k2 * k3 + k3 * k1);
  return [first_part + second_part, first_part - second_part];
}

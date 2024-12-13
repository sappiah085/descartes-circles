import p5 from "p5";
import { circles } from "./setup";
import { variables } from "../common/variables";
import { Circle } from "../classes/circle";
import { apollonian } from "./apollonian";
import { distance_between_point } from "../utility/distance";

let toExplore = circles;
let newExplore = [] as Circle[][];
export const draw = (p5: p5) => {
  circles.forEach((c) => c.show(p5));
  if (newExplore.length > 0) toExplore = newExplore.shift() as Circle[];
  let [f1, f2, s1, s2] = apollonian(toExplore);
  let c1 = new Circle(f1.x, f1.y, Math.abs(1 / f1.d), f1.d);
  let c2 = new Circle(f2.x, f2.y, Math.abs(1 / f2.d), f2.d);
  let c3 = new Circle(s1.x, s1.y, Math.abs(1 / s1.d), s1.d);
  let c4 = new Circle(s2.x, s2.y, Math.abs(1 / s2.d), s2.d);

  [c1, c2, c3, c4].forEach((circle) => {
    if (circle._radius > 2 && isTangent(circle, toExplore[0])) {
      circles.push(circle);
      let t1 = [toExplore[0], toExplore[1], circle];
      let t2 = [toExplore[0], toExplore[2], circle];
      let t3 = [toExplore[1], toExplore[2], circle];
      newExplore.push(t1, t2, t3);
    }
  });
};

function isTangent(c1: Circle, c2: Circle) {
  let d = c1.dis(c2);
  let r1 = c1._radius;
  let r2 = c2._radius;
  let a = Math.abs(d - (r1 + r2)) < 0.3;
  let b = Math.abs(d - Math.abs(r1 - r2)) < 0.3;
  return a || b;
}

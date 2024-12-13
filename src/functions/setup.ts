import p5 from "p5";
import { variables } from "../common/variables";
import { Circle } from "../classes/circle";
export let circles: Circle[] = [];
export function setup(p5: p5): void {
  p5.createCanvas(variables.w_grid, variables.h_grid);
  p5.background(0);
  circles.push(
    new Circle(variables.w_grid / 2, variables.h_grid / 2, 400, -1 / 400)
  );
  circles.push(
    new Circle(variables.w_grid / 2 - 200, variables.h_grid / 2, 200, 1 / 200)
  );
  circles.push(
    new Circle(variables.w_grid / 2 + 200, variables.h_grid / 2, 200, 1 / 200)
  );
}

import { Point } from "./Point";

export interface Movable {
    position: Point;
    velocity: Point;
    update(deltaTime: number): void;
}
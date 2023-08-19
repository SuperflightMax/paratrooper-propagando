// Helicopter.ts
import { Point } from "./Point";
import { GameObject } from "./GameObject";
import { HELICOPTER_SPEED } from "./Properties";
import {Movable} from "./Movable";

export class Helicopter extends GameObject  {

    cargo: Movable[];
    constructor(x: number, y: number, vx: number, vy) 
    {        super(x, y, direction);
        this.cargo = [];
    }

    addCargo(item: Movable) {
        this.cargo.push(item);
    }

    removeCargo(item: Movable) {
        const index = this.cargo.indexOf(item);
        if (index > -1) {
            this.cargo.splice(index, 1);
        }
    }
}
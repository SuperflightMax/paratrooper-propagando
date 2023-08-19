// Helicopter.ts

import { GameObject } from "./GameObject";
import {Movable} from "./Movable";


export class Helicopter extends GameObject  
{
    cargo: Movable[];

    constructor() 
    {
        super();
        this.cargo = [];
    }

    addCargo(item: Movable) 
    {
        this.cargo.push(item);
    }

    removeCargo(item: Movable) {
        const index = this.cargo.indexOf(item);
        if (index > -1) {
            this.cargo.splice(index, 1);
        }
    }
}
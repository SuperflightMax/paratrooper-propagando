// Paratrooper.ts
import { Point } from "./Point";
import { GameObject } from "./GameObject";
import { CFG } from "./Props";


export class Paratrooper extends GameObject  
{
    fall() 
    {
        this.velocity.y = CFG.PARATROOPER_FALL_SPEED;
    }
}
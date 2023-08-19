// Paratrooper.ts
import { Point } from "./Point";
import { GameObject } from "./GameObject";


export class Paratrooper extends GameObject  
{
    fall() 
    {
        this.velocity.y = CFG.PARATROOPER_FALL_SPEED;
    }
}
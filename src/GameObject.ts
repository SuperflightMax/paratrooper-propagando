import { Movable } from "./Movable";
import { Point } from "./Point";
import { Rectangle } from "./Rectangle";

export abstract class GameObject implements Movable
{

    position: Point = new Point(0,0);
    velocity: Point = new Point(0,0);

    constructor() 
    {
        
    }

    update(deltaTime: number) 
    {
        this.position.x += this.velocity.x * deltaTime;
        this.position.y += this.velocity.y * deltaTime;
    }

    getBounds():Rectangle
    {
        return new Rectangle(this.position.x, this.position.y, 20, 20);
    }
}
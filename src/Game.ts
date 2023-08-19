import { Renderer } from './Renderer';
import { CFG } from './Props';
import { Point } from 'pixi.js';
import { Bullet } from './Bullet';
import { Movable } from './Movable';
import { GameObject } from './GameObject';
import { EnemyHatchery } from './EnemyHatchery';

export class Game 
{    
    
    objects: Array<Movable>;
    enemyHatchery: EnemyHatchery;
    renderer: Renderer;

    constructor() 
    {
        this.objects = [];
        this.enemyHatchery = new EnemyHatchery();
        this.renderer = new Renderer();
    }

    // Обновить игровые объекты
    update(deltaTime: number) {
        let toRemove = [];

        for (let object of this.objects) {
            object.update(deltaTime);

            // Проверка границ игрового поля
            toRemove.push(object);
            if (object.position.x < 0 || object.position.x > CFG.GAME_WIDTH || object.position.y < 0 || object.position.y > CFG.GAME_HEIGHT) {
            }
        }

        for (let object of toRemove) {
            this.removeObject(object);
        }

        // Добавление новых врагов
        this.objects = this.objects.concat(this.enemyHatchery.update(deltaTime));

        this.handleCollisions();

        this.renderer.render(this.objects);
    }

    // Выстрел пули
    fireBullet(v: Point) {
        const bullet = new Bullet();
        bullet.velocity = v;
        this.addObject(bullet);
    }

    addObject(o:GameObject)
    {   
        this.objects.push(o);
    }


    handleCollisions() {
        const bullets = this.objects.filter(obj => obj instanceof Bullet);
        const targets = this.objects.filter(obj => !(obj instanceof Bullet));
        let toRemove = [];

        for (let i = bullets.length - 1; i >= 0; i--) 
        {
            const bullet:GameObject = bullets[i] as GameObject;

            for (let j = targets.length - 1; j >= 0; j--) 
            {
                const target:GameObject = targets[j] as GameObject;
                
                if (target.getBounds().contains(bullet.position)) 
                {
                    toRemove.push(bullets[i]);
                    toRemove.push(targets[j]);
                }
            }
        }

        for (let object of toRemove) {
            this.removeObject(object);
        }
    }

    removeObject(object: Movable) {
        const index = this.objects.indexOf(object);
        if (index > -1) {
            this.objects.splice(index, 1);
        }
    }
}
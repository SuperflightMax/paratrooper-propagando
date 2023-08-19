import { Helicopter } from "./Helicopter";
import { Movable } from "./Movable";
import { Paratrooper } from "./Paratrooper";
import { CFG } from "./Props";

export class EnemyHatchery {
    timer: number = 0; // Время до следующей попытки создания

    update(deltaTime: number): Array<Movable> {
        this.timer -= deltaTime;
        let newEnemies: Array<Movable> = [];

        if (this.timer <= 0) {
            this.timer = 1; // Задать время до следующей попытки создания
            if (Math.random() < CFG.HELICOPTER_PROBABILITY) {
                const helicopter = new Helicopter();
                helicopter.position.y = CFG.HELICOPTER_Y;
                helicopter.position.x = 0;
                helicopter.velocity.x = CFG.HELICOPTER_SPEED;
                if (Math.random() > 0.5) { helicopter.position.x = CFG.GAME_WIDTH; helicopter.velocity.x *=-1}
                newEnemies.push(helicopter);

                // Добавить парашютиста в вертолет с заданной вероятностью
                if (Math.random() < CFG.PARATROOPER_PROBABILITY) helicopter.addCargo(new Paratrooper());
                
            }
        }

        return newEnemies;
    }
}

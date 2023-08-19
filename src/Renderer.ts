// Renderer.ts
import { Application, Sprite, Loader } from 'pixi.js';
import { Movable } from './Movable';
import { Point } from './Point';

export class Renderer {
    static MOUSE_X: number = 0;
    static MOUSE_Y: number = 0;

    app: Application;
    sprites: { [key: string]: Sprite } = {};

    constructor() {
        this.app = new Application({tsc
            width: GameProperties.GAME_WIDTH,
            height: GameProperties.GAME_HEIGHT,
        });

        document.body.appendChild(this.app.view);

        Loader.shared
            .add('bullet', 'images/bullet.png')
            .add('helicopter', 'images/helicopter.png')
            .add('paratrooper', 'images/paratrooper.png')
            .load();

        // Обновить статические координаты мыши в обработчике движения мыши
        this.app.view.addEventListener('mousemove', (event) => {
            Renderer.MOUSE_X = event.clientX - this.app.view.getBoundingClientRect().left;
            Renderer.MOUSE_Y = event.clientY - this.app.view.getBoundingClientRect().top;
        });
    }

    render(objects: Movable[]) {
        // Очистить предыдущие спрайты
        for (let id in this.sprites) {
            this.app.stage.removeChild(this.sprites[id]);
            delete this.sprites[id];
        }

        // Добавить и обновить спрайты для текущих объектов
        for (let object of objects) {
            let sprite = this.sprites[object.id];

            // Если спрайта для данного объекта еще не существует, создаем его
            if (!sprite) {
                sprite = new Sprite(Loader.shared.resources[object.type].texture);
                sprite.anchor.set(0.5); // Положение спрайта устанавливается относительно его центра
                this.sprites[object.id] = sprite;
                this.app.stage.addChild(sprite);
            }

            // Обновить положение спрайта
            sprite.x = object.position.x;
            sprite.y = object.position.y;
        }
    }
}
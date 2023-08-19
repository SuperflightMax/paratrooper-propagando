import { Game } from "./Game";
import { Renderer } from "./Renderer";

// Создаем новый экземпляр игры и рендерера
const game = new Game();
const renderer = new Renderer();

// Запускаем цикл игры
function gameLoop(deltaTime: number) {
    game.update(deltaTime);
    renderer.render(game.objects);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

import { Point } from "./Point";



export class Props 
{
      BULLET_SPEED = 10; // скорость пули в пикселях/секунду
      HELICOPTER_SPEED = 2; // скорость вертолёта в пикселях/секунду
      PARATROOPER_SPEED = 1; // скорость парашютиста в пикселях/секунду
      PARATROOPER_FALL_SPEED = 5; // скорость парашютиста при падении в пикселях/секунду
      HELICOPTER_PROBABILITY = 0.25; // Вероятность появления вертолета
      HELICOPTER_Y = 50; 
      PARATROOPER_PROBABILITY = 0.5; // Вероятность появления парашютиста в вертолете
      
      GAME_WIDTH = 500; // 
      GAME_HEIGHT = 500; // 
    
}

export const CFG:Props = new Props();
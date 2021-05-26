//import * as PIXI from "./pixi.mjs";
import * as PixiRain from "./pixirain.js"


document.body.appendChild(PixiRain.app.view);

//PixiRain.app.ticker.add(delta => PixiRain.gameLoop(delta))
PixiRain.createSpriteArray(2048);
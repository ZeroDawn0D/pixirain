import {createSpriteArray, startRain, app} from "./pixirain.js"


document.body.appendChild(app.view);
let number = 4096;
let colour = 0x555555;
let rainH = 32;
let rainW = 1;
let dAngle = 60;
let velocity = 15;
createSpriteArray(number, colour, rainH, rainW, dAngle, velocity);
startRain();



//n = 2048, colour = 0x00ffff,  height = 16, width = 1, dAngle = 0, velocity = 2
import {createSpriteArray, startRain, app, createBackground} from "./pixirain.js"
import {setupUI} from "./ui.js";

//document.body.appendChild(app.view);
let bgColour = 0x555555;
createBackground(bgColour);

let number = 4096;
let colour = 0xffffff;
let rainH = 32;
let rainW = 1;
let dAngle = 30;
let velocity = 15;
setupUI(app);
createSpriteArray(number, colour, rainH, rainW, dAngle, velocity);

startRain();



//n = 2048, colour = 0x00ffff,  height = 16, width = 1, dAngle = 0, velocity = 2
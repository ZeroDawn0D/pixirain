import * as RAIN from "./rain.js"
import * as UI from "./ui.js";

//document.body.appendChild(app.view);
let bgColour = 0x000000;
let number = 4096;
let colour = 0xffffff;
let rainH = 32;
let rainW = 1;
let dAngle = 30;
let velocity = 15;
let alpha = 0.2;


RAIN.createBackground(bgColour);
UI.setupUI(RAIN.app);
RAIN.createSpriteArray(number, colour, rainH, rainW, dAngle, velocity, alpha);
RAIN.startRain();



//n = 2048, colour = 0x00ffff,  height = 16, width = 1, dAngle = 0, velocity = 2
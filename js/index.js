import * as RAIN from "./rain.js"
import * as UI from "./ui.js";








console.log(RAIN);

//document.body.appendChild(app.view);

//let rainObj = new Rain(NUMBER, COLOUR, RAINH, RAINW, DANGLE, VELOCITY, ALPHA);


RAIN.createBackground(UI.rainObj.bgColour);
UI.setupUI(RAIN.app);
UI.inputHandler(RAIN);
//RAIN.createSpriteArray(number, colour, rainH, rainW, dAngle, velocity, alpha);
RAIN.createSpriteArray(UI.rainObj);
RAIN.startRain();



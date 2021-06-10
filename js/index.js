import * as RAIN from "./rain.js"
import * as UI from "./ui.js";

RAIN.createBackground(UI.rainObj.bgColour);

UI.inputHandler(RAIN);
let rainContainer = RAIN.createSpriteArrayINIT(UI.rainObj);
UI.setupUI(RAIN.app, rainContainer);
RAIN.startRain();
//RAIN.pixelart();


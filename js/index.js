import * as RAIN from "./rain.js"
import * as UI from "./ui.js";

RAIN.createBackground(UI.rainObj.bgColour);
UI.setupUI(RAIN.app);
UI.inputHandler(RAIN);
RAIN.createSpriteArray(UI.rainObj);
RAIN.startRain();


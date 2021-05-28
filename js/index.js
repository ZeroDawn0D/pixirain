import * as RAIN from "./rain.js"
import * as UI from "./ui.js";

//document.body.appendChild(app.view);
const BGCOLOUR = 0x253255;
const NUMBER = 4096;
const COLOUR = 0xffffff;
const RAINH = 32;
const RAINW = 1;
const DANGLE = 30;
const VELOCITY = 15;
const ALPHA = 0.2;

let bgColour = BGCOLOUR;


class Rain{
  constructor(number, colour, rainH,rainW,dAngle, velocity, alpha)
  {
  	this.number = number;
  	this.colour = colour;
  	this.rainH = rainH;
  	this.rainW = rainW;
  	this.dAngle = dAngle;
  	this.velocity = velocity;
  	this.alpha = alpha;
  }
  
}

let rainObj = new Rain(NUMBER, COLOUR, RAINH, RAINW, DANGLE, VELOCITY, ALPHA);
const RAINOBJ = new Rain(NUMBER, COLOUR, RAINH, RAINW, DANGLE, VELOCITY, ALPHA);
RAIN.createBackground(bgColour);
UI.setupUI(RAIN.app);
//RAIN.createSpriteArray(number, colour, rainH, rainW, dAngle, velocity, alpha);
RAIN.createSpriteArray(rainObj);
RAIN.startRain();



//n = 2048, colour = 0x00ffff,  height = 16, width = 1, dAngle = 0, velocity = 2
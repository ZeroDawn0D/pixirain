export function createSpriteArray(n = 2048, colour = 0x00ffff, height = 16, width = 1, dAngle = 0, velocity = 2, alpha = 0.2){
  //console.log(dAngle);
  let rAngle = degToRad(dAngle);
  let leftLim = 0;
  let rightLim = wiw;
  if(rAngle >= 0){
    rightLim += wih * Math.tan(rAngle);
  }
  else{
  	leftLim += wih * Math.tan(rAngle);
  }
  for(let i = 0; i < n; i++)
  {
    spriteArray.push(createRainSprite(
      colour,
      getRandomInt(leftLim,rightLim), 
      getRandomInt(-wih,0), 
      height, 
      width, 
      rAngle,
      velocity,
      alpha)
    );
    
    //spriteArray[i].y = getRandomInt(-100,0)
    app.stage.addChild(spriteArray[i]);
  }
}




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
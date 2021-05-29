import * as PIXI from "./pixi.mjs";
//degree/radian conversions
const degToRad = (deg) => deg*Math.PI/180;
const radToDeg = (rad) => rad*180/Math.PI;

let wiw = window.innerWidth;
let wih = window.innerHeight;


// random integer in [min,max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// angle wrt +ve y axis, negative of speed to reverse direction into upward
// +ve Vy -> down, +ve Vx -> right
function updateVelocity(sprite, rAngle = 0, velocity = 2){
  sprite.v = velocity * getRandomInt(80,120)/100;
  sprite.vx = -sprite.v * Math.sin(rAngle);
  sprite.vy = sprite.v * Math.cos(rAngle);
}

//updates x,y of a sprite based on vx and vy;
function updatePosition(sprite){
  sprite.x += sprite.vx;
  sprite.y += sprite.vy;


}

function createRainSprite(colour, x, y, height, width, rAngle, velocity, alpha){
	let sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
	sprite.x = x;
	sprite.y = y;
	sprite.height = height;
	sprite.width = width;
	sprite.alpha = alpha;
	sprite.tint = colour;
	sprite.anchor.x = sprite.anchor.y = 0.5;

	sprite.v = sprite.vx = sprite.vy = 0;
	sprite.rotation = rAngle;
	//console.log(velocity);
	updateVelocity(sprite, rAngle, velocity);
	
	//console.log(sprite);

	return sprite;

}

//create sprite array of size n
let spriteArray;
let rainContainer = new PIXI.Container();

export function createSpriteArray(rainObj){
  spriteArray = [];
  let n = rainObj.number;
  let rAngle = degToRad(rainObj.dAngle);
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
      rainObj.colour,
      getRandomInt(leftLim,rightLim), 
      getRandomInt(-wih,0), 
      rainObj.rainH, 
      rainObj.rainW, 
      rAngle,
      rainObj.velocity,
      rainObj.alpha)
    );
    //console.log(spriteArray[i]);
    rainContainer.addChild(spriteArray[i]);
  }

  app.stage.addChild(rainContainer);
}

export function deleteSpriteArray(){
  rainContainer.removeChildren();
}


function gameLoop(delta) {
	for(let i = 0; i < spriteArray.length; i++){
	  updatePosition(spriteArray[i])
	  if(spriteArray[i].y > app.renderer.height +  10){
	  	let rAngle = spriteArray[i].rotation;
	  	let leftLim = 0;
        let rightLim = wiw;
        if(rAngle >= 0){
          rightLim += wih * Math.tan(rAngle);
        }
        else{
  	      leftLim += wih * Math.tan(rAngle);
        }

	  	spriteArray[i].y = getRandomInt(-wih,0);
      spriteArray[i].x = getRandomInt(leftLim,rightLim);
	  }
	}
}


export let app;

export function createBackground(bgColour){
  app = new PIXI.Application({
    width: wiw, 
    height: wih,
    backgroundColor: bgColour,
    antialias: true
  });

  document.getElementById("rain").appendChild(app.view);
}



//adds gameLoop() to app.ticker()
export function startRain(){
  app.renderer.view.style.position = "absolute";
  app.renderer.view.style.display = "block";
  app.renderer.autoResize = true;
  //delete PIXI.Renderer.__plugins.interaction;
  
  app.ticker.add(delta => gameLoop(delta))
}
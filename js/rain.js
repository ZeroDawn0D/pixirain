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
	
	sprite.tint = colour;
	sprite.anchor.x = sprite.anchor.y = 0.5;

	sprite.v = sprite.vx = sprite.vy = 0;
	sprite.rotation = rAngle;
	//console.log(radToDeg(sprite.rotation));
	updateVelocity(sprite, rAngle, velocity);
	sprite.alpha = alpha;
	

	return sprite;

}

//create sprite array of size n
let spriteArray = new Array();
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

  document.body.appendChild(app.view);
}



//adds gameLoop() to app.ticker()
export function startRain(){
  app.renderer.view.style.position = "absolute";
  app.renderer.view.style.display = "block";
  app.renderer.autoResize = true;
  //delete PIXI.Renderer.__plugins.interaction;
  
  app.ticker.add(delta => gameLoop(delta))
}
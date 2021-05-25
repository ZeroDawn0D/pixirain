import * as PIXI from "./pixi.mjs";

//degree/radian conversions
const degToRad = (deg) => deg*Math.PI/180;
const radToDeg = (rad) => rad*180/Math.PI;

// random integer in [min,max]
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// angle wrt +ve y axis, negative of speed to reverse direction into upward
// +ve Vy -> down, +ve Vx -> right
function updateVelocity(sprite, angle = 0, velocity = 5){
  sprite.v = velocity * getRandomInt(10,20)/10;
  sprite.vx = -sprite.v * Math.sin(angle);
  sprite.vy = sprite.v * Math.cos(angle);
}

//updates x,y of a sprite based on vx and vy;
function updatePosition(sprite){
  sprite.x += sprite.vx;
  sprite.y += sprite.vy;

  console.log(sprite.x, sprite.y);
}

function createRainSprite(colour = 0xffffff,x = 0, y = -5, height = 16, width = 1){
	let sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
	sprite.x = x;
	sprite.y = y;
	sprite.height = height;
	sprite.width = width;
	
	sprite.tint = colour;
	sprite.anchor.x = sprite.anchor.y = 0.5;

	sprite.v = sprite.vx = sprite.vy = 0;

	updateVelocity(sprite);

	return sprite;
}

//create sprite array of size n
let spriteArray = new Array();
function createSpriteArray(n){
  for(let i = 0; i < n; i++)
  {
    spriteArray.push(createRainSprite());
    spriteArray[i].y = getRandomInt(-100,0)
    spriteArray[i].x = getRandomInt(0,2000);
    app.stage.addChild(spriteArray[i]);
  }
}

function gameLoop(delta) {
	for(let i = 0; i < spriteArray.length; i++){
	  updatePosition(spriteArray[i])
	  if(spriteArray[i].y > app.renderer.height +  10){
	  	spriteArray[i].y = getRandomInt(-100,0);
        spriteArray[i].x = getRandomInt(0,2000);
	  }
	}
}

function onMenuIconLoaded(){
  
}

let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "HTML Canvas"
}
console.log("Using " + type);


let app = new PIXI.Application({
  width: window.innerWidth, 
  height: window.innerHeight,
  backgroundColor: 0x000000
});
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
document.body.appendChild(app.view);

app.ticker.add(delta => gameLoop(delta))
createSpriteArray(2048);
import * as PIXI from "./pixi.mjs";
//degree/radian conversions
export const degToRad = (deg) => deg*Math.PI/180;
export const radToDeg = (rad) => rad*180/Math.PI;

// random integer in [min,max]
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// angle wrt +ve y axis, negative of speed to reverse direction into upward
// +ve Vy -> down, +ve Vx -> right
export function updateVelocity(sprite, angle = 0, velocity = 2){
  sprite.v = velocity * getRandomInt(5,20)/10;
  sprite.vx = -sprite.v * Math.sin(angle);
  sprite.vy = sprite.v * Math.cos(angle);
}

//updates x,y of a sprite based on vx and vy;
export function updatePosition(sprite){
  sprite.x += sprite.vx;
  sprite.y += sprite.vy;

  console.log(sprite.x, sprite.y);
}

export function createRainSprite(colour = 0x00ffff,x = 0, y = -5, height = 16, width = 1){
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
export let spriteArray = new Array();
export function createSpriteArray(n){
  for(let i = 0; i < n; i++)
  {
    spriteArray.push(createRainSprite());
    spriteArray[i].y = getRandomInt(-100,0)
    spriteArray[i].x = getRandomInt(0,2000);
    app.stage.addChild(spriteArray[i]);
  }
}

export function gameLoop(delta) {
	for(let i = 0; i < spriteArray.length; i++){
	  updatePosition(spriteArray[i])
	  if(spriteArray[i].y > app.renderer.height +  10){
	  	spriteArray[i].y = getRandomInt(-100,0);
        spriteArray[i].x = getRandomInt(0,2000);
	  }
	}
}

export function onMenuIconLoaded(){
  
}

export let app = new PIXI.Application({
  width: window.innerWidth, 
  height: window.innerHeight,
  backgroundColor: 0x000000
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.ticker.add(delta => gameLoop(delta))

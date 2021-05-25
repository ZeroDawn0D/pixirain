import * as PIXI from "./pixi.mjs";

const degToRad = (deg) => deg*Math.PI/180;
const radToDeg = (rad) => rad*180/Math.PI;

 // angle wrt +ve y axis, negative of speed to reverse direction into upward
 // +ve Vy -> down, +ve Vx -> right
function updateVelocity(sprite, angle, velocity){
  sprite.v = velocity;
  sprite.vx = -sprite2.v * Math.sin(angle);
  sprite.vy = sprite2.v * Math.cos(angle);
}
function updatePosition(sprite){
  
}

function createRainSprite(colour = 0xffffff,x = 0, y = 0, heigth = 16, width = 2);
{
	sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
	sprite.x = x;
	sprite.y = y;
	sprite.height = height;
	sprite.width = width;
	
	sprite.tint = colour;
	sprite.anchor.x = sprite.anchor.y = 0.5;

}

function gameLoop(delta) {

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
  backgroundColor: 0x000000;
});
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
document.body.appendChild(app.view);

app.ticker.add(delta => gameLoop(delta))
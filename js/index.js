import * as PIXI from "./pixi.mjs";


let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)

//Create a Pixi Application
let app = new PIXI.Application({
  width: window.innerWidth, 
  height: window.innerHeight,
  backgroundColor: 0x00ffff
});
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;

let whiteTexture = PIXI.Texture.WHITE;

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

app.loader.add("../files/circle.png")
  .load(onTextureLoad);

function onTextureLoad() {
  let sprite = new PIXI.Sprite(
    app.loader.resources["../files/circle.png"].texture
  );
  sprite.height = sprite.width = 128;
  sprite.anchor.x = sprite.anchor.y = 0.5;
  app.stage.addChild(sprite);
  app.ticker.add(delta => gameLoop(delta))
}




let sprite2 = new PIXI.Sprite(whiteTexture);
sprite2.x = sprite2.y = 600;
//app.stage.addChild(sprite2);
sprite2.v = 0;
sprite2.vx = 0 ;
sprite2.vy = 0 ;


 // angle wrt +ve y axis, negative of speed to reverse direction into upward
 // +ve y -> down, +ve x -> right
function updateSpeed(sprite, angle, velocity){
  sprite.v = velocity;
  sprite.vx = -sprite2.v * Math.sin(angle);
  sprite.vy = sprite2.v * Math.cos(angle);
  console.log("Vx: " + sprite.vx);
  console.log("Vy: " + sprite.vy);
}
updateSpeed(sprite2, 0, 2);
let sprite3 = new PIXI.Sprite(whiteTexture);

sprite3.x = sprite2.x + 50;
sprite3.y = sprite2.y;
updateSpeed(sprite3, 0, 2);
app.stage.addChild(sprite2);
app.stage.addChild(sprite3);

function gameLoop(delta) {
  sprite2.x += sprite2.vx * delta;
  sprite2.y += sprite2.vy * delta;

  sprite3.x += sprite3.vx;
  sprite3.y += sprite3.vy;
}
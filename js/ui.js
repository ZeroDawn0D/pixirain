import * as PIXI from "./pixi.mjs";

let app;

export function setupUI(appInput){
  app = appInput;
  app.loader
  .add("../files/menupix.png")
  .load(onMenuIconLoad);
  
}


let menuIconSprite;
function onMenuIconLoad(){
  menuIconSprite = new PIXI.Sprite(app.loader.resources["../files/menupix.png"].texture);
  menuIconSprite.tint = 0x555555;
  menuIconSprite.interactive = true;
  menuIconSprite.buttonMode = true;
  app.stage.addChild(menuIconSprite);

  menuIconSprite
    //.on('', onMenuHover)
    .on('pointerdown', cl);
  //app.ticker.add(delta => gameLoop(delta))
  
}

function onMenuHover()
{
  console.log("hover");
  menuIconSprite.tint = 0x00aaaa;
}

function gameLoop(delta){
	
}

function cl()
{
	console.log("ckiuck")
}
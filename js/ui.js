import * as PIXI from "./pixi.mjs";

let app;

export function setupUI(appInput){
  app = appInput;
  app.loader
  .add("../files/menupix.png")
  .load(onMenuIconLoad);
}



function onMenuIconLoad(){
  console.log("menu icon loaded")
  let menuIconSprite = new PIXI.Sprite(app.loader.resources["../files/menupix.png"].texture);
  menuIconSprite.tint = 0x555555;
  //menuIconSprite.height = menuIconSprite.width = 8;
  app.stage.addChild(menuIconSprite);
}
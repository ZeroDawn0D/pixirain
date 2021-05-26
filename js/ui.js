import * as PIXI from "./pixi.mjs";

let app;

export function setupUI(appInput){
  app = appInput;
  app.loader
  .add("../files/menu.png")
  .load(onMenuIconLoad);
}



function onMenuIconLoad(){
  let menuIconSprite = new PIXI.Sprite(app.loader.resources["../files/menu.png"].texture);
  
  app.stage.addChild(menuIconSprite);
}
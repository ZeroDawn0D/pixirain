import * as PIXI from "./pixi.mjs";

let app;

export function setupUI(appInput){
  app = appInput;
  app.loader
  .add("../files/menupix.png")
  .load(onMenuIconLoad);
  
}


let menuIconSprite;
let displayMenu = false;
function onMenuIconLoad(){
  menuIconSprite = new PIXI.Sprite(app.loader.resources["../files/menupix.png"].texture);
  menuIconSprite.tint = 0x555555;
  menuIconSprite.anchor.x = 1;
  menuIconSprite.x = window.innerWidth;
  menuIconSprite.interactive = true;
  menuIconSprite.buttonMode = true;
  app.stage.addChild(menuIconSprite);

  menuIconSprite
    .on('pointerup', onUnclickMenu)
    .on('pointerdown', onClickMenu);
  //app.ticker.add(delta => gameLoop(delta))

  document.getElementById("menu").style.height = window.innerHeight;
  document.getElementById("menu").style.width = window.innerWidth * 0.50;
  
}

function onClickMenu()
{
  console.log("click");
  this.tint = 0xaaaaaa;

  displayMenu = !displayMenu;

  if(displayMenu)
  {
  	document.getElementById("menu").style.display = "block";
  }
  else
  {
    document.getElementById("menu").style.display = "none";
  }
}

function onUnclickMenu()
{
  this.tint = 0x555555;
}

function gameLoop(delta){
	
}
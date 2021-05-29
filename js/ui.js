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

  document.getElementById("menu").style.height = window.innerHeight;
  document.getElementById("menu").style.width = window.innerWidth * 0.75;
  
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







const BGCOLOUR = 0x253255;
const NUMBER = 4096;
const COLOUR = 0xffffff;
const RAINH = 32;
const RAINW = 1;
const DANGLE = 30;
const VELOCITY = 15;
const ALPHA = 0.2;


class Rain{
  constructor(bgColour, number, colour, rainH,rainW,dAngle, velocity, alpha)
  {
    this.bgColour = BGCOLOUR;
    this.number = number;
    this.colour = colour;
    this.rainH = rainH;
    this.rainW = rainW;
    this.dAngle = dAngle;
    this.velocity = velocity;
    this.alpha = alpha;
  }
  
}

export let rainObj = new Rain(BGCOLOUR, NUMBER, COLOUR, RAINH, RAINW, DANGLE, VELOCITY, ALPHA);
const RAINOBJ = new Rain(BGCOLOUR, NUMBER, COLOUR, RAINH, RAINW, DANGLE, VELOCITY, ALPHA);

export function inputHandler(){
  //alpha input
  document.getElementById("rain-alpha-range").onchange = () =>{
    document.getElementById("rain-alpha-number").value = document.getElementById("rain-alpha-range").value;  
    rainObj.alpha = document.getElementById("rain-alpha-range").value;
  }
  document.getElementById("rain-alpha-number").onchange = () =>{
    document.getElementById("rain-alpha-range").value = document.getElementById("rain-alpha-number").value;
    rainObj.alpha = document.getElementById("rain-alpha-range").value;
  }

  //num input
  document.getElementById("rain-num-range").onchange = () =>{
    document.getElementById("rain-num-number").value = document.getElementById("rain-num-range").value;
    rainObj.number = document.getElementById("rain-num-range").value;
  }
  document.getElementById("rain-num-number").onchange = () =>{
    document.getElementById("rain-num-range").value = document.getElementById("rain-num-number").value;
    
  }


  //angle input
  document.getElementById("rain-angle-range").onchange = () =>{
    document.getElementById("rain-angle-number").value = document.getElementById("rain-angle-range").value;
  }
  document.getElementById("rain-angle-number").onchange = () => {
    document.getElementById("rain-angle-range").value = document.getElementById("rain-angle-number").value;
  }

  //velocity input
  document.getElementById("velocity-range").onchange = () =>{
    document.getElementById("velocity-number").value = document.getElementById("velocity-range").value;
  }
  document.getElementById("velocity-number").onchange = () => {
    document.getElementById("velocity-range").value = document.getElementById("velocity-number").value;
  }
}
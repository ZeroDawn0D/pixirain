import * as PIXI from "./pixi.min.mjs";
import * as AUDIO from "./audio.js";
let app;
let rainContainer;
let background;

export function setupUI(appInput, rainC){
  rainContainer = rainC;

  displaySound = true;
  document.getElementById("sound").style.display = "block";

  app = appInput;

  app.loader
  .add("../files/soundpix.png")
  .add("../files/menupix.png")
  .add("../files/scenepix.png")
  .add("../files/mountain.png")
  .add("../files/city.png")
  .load(onLoad);

  AUDIO.setupSounds();
}





let displayMenu = false;
let displaySound = false;
let displayScene = false;

function addIconsToContainer(){
  let iconContainer = new PIXI.Container();
  let menuIconSprite;
  let soundIconSprite;
  let sceneIconSprite;

  soundIconSprite = new PIXI.Sprite(app.loader.resources["../files/soundpix.png"].texture);
  soundIconSprite.tint = 0x555555;
  soundIconSprite.anchor.x = 1;
  soundIconSprite.x = window.innerWidth;
  soundIconSprite.interactive = true;
  soundIconSprite.buttonMode = true;
  iconContainer.addChild(soundIconSprite);
  soundIconSprite
    .on('pointerup', onUnclick)
    .on('pointerdown', onClickSound);

  menuIconSprite = new PIXI.Sprite(app.loader.resources["../files/menupix.png"].texture);
  menuIconSprite.tint = 0x555555;
  menuIconSprite.anchor.x = 1;
  menuIconSprite.x = window.innerWidth;
  menuIconSprite.y = 64;
  menuIconSprite.interactive = true;
  menuIconSprite.buttonMode = true;
  iconContainer.addChild(menuIconSprite);

  menuIconSprite
    .on('pointerup', onUnclick)
    .on('pointerdown', onClickMenu);

  sceneIconSprite = new PIXI.Sprite(app.loader.resources["../files/scenepix.png"].texture);
  sceneIconSprite.tint = 0x555555;
  sceneIconSprite.anchor.x = 1;
  sceneIconSprite.x = window.innerWidth;
  sceneIconSprite.y = 128;
  sceneIconSprite.interactive = true;
  sceneIconSprite.buttonMode = true;
  iconContainer.addChild(sceneIconSprite);
  sceneIconSprite
    .on('pointerup', onUnclick)
    .on('pointerdown', onClickScene);

  app.stage.addChild(iconContainer);
}

function addBG(){
  bgSprite = new PIXI.Sprite(app.loader.resources["../files/mountain.png"].texture);
  bgSprite.width = window.innerWidth;
  bgSprite.height = window.innerHeight;
  bgSprite.anchor.x = 0;
  bgSprite.anchor.y = 0;
  bgSprite.alpha = 0;
  background = bgSprite;
  app.stage.addChild(bgSprite);
}

let bgSprite;
function onLoad(){
  addBG();
  addIconsToContainer();
  app.stage.addChild(rainContainer);
  document.getElementById("menu").style.height = window.innerHeight;
  document.getElementById("menu").style.width = window.innerWidth * 0.75;
  document.getElementById("sound").style.height = window.innerHeight;
  document.getElementById("sound").style.width = window.innerWidth * 0.75;
  document.getElementById("scene").style.height = window.innerHeight;
  document.getElementById("scene").style.width = window.innerWidth * 0.75;

}


function onClickScene(){
  this.tint = 0xaaaaaa;

  displaySound = false;
  document.getElementById("sound").style.display = "none";
  displayMenu = false;
  document.getElementById("menu").style.display = "none";


  displayScene = !displayScene;

  if(displayScene)
  {
    document.getElementById("scene").style.display = "block";
  }
  else
  {
    document.getElementById("scene").style.display = "none";
  }

}



function onUnclick(){
  this.tint = 0x555555;
}

function onClickSound()
{
  this.tint = 0xaaaaaa;

  displayMenu = false;
  document.getElementById("menu").style.display = "none";
  displayScene = false;
  document.getElementById("scene").style.display = "none";



  displaySound = !displaySound;
  if(displaySound)
  {
    document.getElementById("sound").style.display = "block";
  }
  else
  {
    document.getElementById("sound").style.display = "none";
  }

}

function onClickMenu()
{
  this.tint = 0xaaaaaa;

  displaySound = false;
  document.getElementById("sound").style.display = "none";
  displayScene = false;
  document.getElementById("scene").style.display = "none";


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

function changeBG(q){
  if(q==="default"){
    background.alpha = 0;
  }
  if(q==="mountain"){
    background.alpha = 1;
    background.texture = app.loader.resources["../files/mountain.png"].texture
  }
  if(q==="city"){
    background.alpha = 1;
    background.texture = app.loader.resources["../files/city.png"].texture;
  }
}

function changeSceneColour(colour1, colour2, colour3){
  background.tint = colour1;
}


const BGCOLOUR = 0x000000;
const NUMBER = 4096;
const COLOUR = 0xffffff;
const RAINH = 32;
const RAINW = 1;
const DANGLE = 0;
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
//const RAINOBJ = new Rain(BGCOLOUR, NUMBER, COLOUR, RAINH, RAINW, DANGLE, VELOCITY, ALPHA);

export function inputHandler(RAIN){
  //alpha input
  document.getElementById("rain-alpha-range").onchange = () =>{
    document.getElementById("rain-alpha-number").value = document.getElementById("rain-alpha-range").value;  
    rainObj.alpha = parseFloat(document.getElementById("rain-alpha-range").value);
  }
  document.getElementById("rain-alpha-number").onchange = () =>{
    document.getElementById("rain-alpha-range").value = document.getElementById("rain-alpha-number").value;
    rainObj.alpha = parseFloat(document.getElementById("rain-alpha-range").value);
  }

  //num input
  document.getElementById("rain-num-range").onchange = () =>{
    document.getElementById("rain-num-number").value = document.getElementById("rain-num-range").value;
    rainObj.number = parseInt(document.getElementById("rain-num-range").value);
  }
  document.getElementById("rain-num-number").onchange = () =>{
    document.getElementById("rain-num-range").value = document.getElementById("rain-num-number").value;
    rainObj.number = parseInt(document.getElementById("rain-num-range").value);
  }


  //angle input
  document.getElementById("rain-angle-range").onchange = () =>{
    document.getElementById("rain-angle-number").value = document.getElementById("rain-angle-range").value;
    rainObj.dAngle = parseInt(document.getElementById("rain-angle-range").value);
  }
  document.getElementById("rain-angle-number").onchange = () => {
    document.getElementById("rain-angle-range").value = document.getElementById("rain-angle-number").value;
    rainObj.dAngle = parseInt(document.getElementById("rain-angle-range").value);
  }

  //velocity input
  document.getElementById("velocity-range").onchange = () =>{
    document.getElementById("velocity-number").value = document.getElementById("velocity-range").value;
   rainObj.velocity = parseInt(document.getElementById("velocity-range").value);
  }
  document.getElementById("velocity-number").onchange = () => {
    document.getElementById("velocity-range").value = document.getElementById("velocity-number").value;
    rainObj.velocity = parseInt(document.getElementById("velocity-range").value);
  }

  //colour input

  document.getElementById("colour-input").onchange = () =>{
    rainObj.colour = parseInt(document.getElementById("colour-input").value.replace('#', '0x'));
  
  }

  //bgcolour input
  document.getElementById("bgcolour-input").onchange = () =>{
    rainObj.bgColour = parseInt(document.getElementById("bgcolour-input").value.replace('#', '0x'));
  }

  document.getElementById("generate").onclick = () => {
    RAIN.deleteSpriteArray();
    RAIN.createSpriteArray(rainObj);

    app.renderer.backgroundColor = rainObj.bgColour;
    app.renderer.render(app.stage);
  }

  document.getElementById("defaults").onclick = () => {
    document.getElementById("rain-alpha-number").value = ALPHA;
    document.getElementById("rain-alpha-number").onchange();

    document.getElementById("rain-num-number").value = NUMBER;
    document.getElementById("rain-num-number").onchange();

    document.getElementById("rain-angle-number").value = DANGLE;
    document.getElementById("rain-angle-number").onchange();

    document.getElementById("velocity-number").value = VELOCITY;
    document.getElementById("velocity-number").onchange();

    document.getElementById("colour-input").value = PIXI.utils.hex2string(COLOUR);
    document.getElementById("colour-input").onchange();

    document.getElementById("bgcolour-input").value = PIXI.utils.hex2string(BGCOLOUR);
    document.getElementById("bgcolour-input").onchange();
  }


  document.getElementById("rain-sound-checkbox").onchange = () =>{
    if(document.getElementById("rain-sound-checkbox").checked){
      AUDIO.playRainSound();
    }
    else{
      AUDIO.pauseRainSound();
    }
  }

  document.getElementById("thunder-sound-checkbox").onchange = () =>{
    if(document.getElementById("thunder-sound-checkbox").checked){
      AUDIO.playThunderSound();
      AUDIO.playThunder();
    }
    else{
      AUDIO.pauseThunder();
    }
  }

  document.getElementById("rain-volume-range").onchange = () =>{
    AUDIO.setRainVolume(parseInt((document.getElementById("rain-volume-range").value)));

  }

  document.getElementById("thunder-volume-range").onchange = () =>{
    AUDIO.setThunderVolume(parseInt((document.getElementById("thunder-volume-range").value)));
  }

  document.getElementById("default-scene").onchange = () =>{
    changeBG("default");
  };
  document.getElementById("mountain-scene").onchange = () =>{
    changeBG("mountain");
  };
  document.getElementById("city-scene").onchange = () =>{
    changeBG("city");
  };

  document.getElementById("colour-input-1").onchange = () =>{
    changeSceneColour(parseInt(document.getElementById("colour-input-1").value.replace('#', '0x')))
  }
}


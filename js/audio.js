//import {Howl} from "./howler.js";
let rainMediumSound;
let thunderSound;
let rainID;
let thunderVol= 0.5;
let thunderInterval;
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
export function setupSounds(){
  rainMediumSound = new Howl({
    src: ['http://raw.githubusercontent.com/ZeroDawn0D/pixirain/master/files/RainfallMedium.mp3'],
    loop: true,
    volume: 0.5
  });

  thunderSound = new Howl({
    src: ['http://raw.githubusercontent.com/ZeroDawn0D/pixirain/master/files/thunder.mp3'],
    volume: 0.5
  });
}



export function playRainSound(){
  rainID = rainMediumSound.play();
}

export function pauseRainSound(){
  rainMediumSound.pause(rainID);
}


export function playThunderSound(){
  thunderSound.volume(thunderVol);
  thunderSound.play();
}


export function setRainVolume(vol){

  rainMediumSound.volume(vol/100);
}

export function setThunderVolume(vol){
  thunderVol = vol/100;
  thunderSound.volume(thunderVol);
}

export function playThunder(){
  thunderInterval = setInterval(playThunderSound, 40 * 1000);
}

export function pauseThunder(){
  clearInterval(thunderInterval);
}
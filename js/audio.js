//import {Howl} from "./howler.js";
export function playRainSound(){
  let rainMediumSound = new Howl({
    src: ['../files/RainfallMedium.mp3'],
    loop: true,
    volume: 0.5
  });
  rainMediumSound.play();
}  
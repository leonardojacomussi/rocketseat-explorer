import Controls from "./controls.js";
import Timer from "./timer.js";
import Events from "./events.js";
import Sounds from "./sounds.js";
import {
  minutesDisplay, secondsDisplay, btnPlay,
  btnPause, btnStop, btnSet, btnSoundOn, btnSoundOff
} from "./elements.js";

let minutes = Number(minutesDisplay.textContent);

const controls = Controls({
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  btnSoundOn,
  btnSoundOff
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  minutes,
  controls
});

timer.reset();

const sound = Sounds();

Events({
  controls, timer, sound, minutes
});
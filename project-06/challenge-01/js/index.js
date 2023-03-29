import { minutesDisplay, secondsDisplay } from "./elements.js";
import Events from "./events.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js"

let minutes = Number(minutesDisplay.textContent);

const timer = Timer({
  minutes,
  minutesDisplay,
  secondsDisplay
});

timer.reset();

const sounds = Sounds();

Events({
  timer, sounds, minutes
})


import Sounds from "./sounds.js";
import { notNumber } from "./utils.js";

const sound = Sounds();

export default function Timer ({
  controls,
  minutes,
  minutesDisplay,
  secondsDisplay
}) {
  let timerTimeOut;
  
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  };

  function hold () {
    if (timerTimeOut) clearTimeout(timerTimeOut);
  };
  
  function reset () {
    hold();
    let storageMinutes = localStorage.getItem("minutes");
    storageMinutes = notNumber(storageMinutes) ? minutes : Number(storageMinutes);
    updateDisplay(storageMinutes, 0);
  };
  
  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
  
      if (minutes <= 0 && seconds <= 0) {
        updateDisplay(minutes, 0);
        controls.reset();
        reset();
        sound.timeEnd()
        return
      };
  
      if (seconds <= 0) {
        seconds = 60
        --minutes
        updateDisplay(minutes, seconds);
      };
  
      --seconds
      updateDisplay(minutes, seconds);
      countDown();
    }, 1000);
  };

  return {
    updateDisplay,
    countDown,
    reset,
    hold
  };
};
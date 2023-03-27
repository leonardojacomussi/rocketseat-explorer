export default function Timer ({
  minutes,
  minutesDisplay,
  secondsDisplay
}) {
  let timerTimeOut;
  let isRunning = false;
  
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  };

  function hold () {
    if (timerTimeOut) clearTimeout(timerTimeOut);
  };
  
  function reset () {
    hold();
    updateDisplay(minutes, 0);
  };
  
  function countDown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
  
      if (minutes <= 0 && seconds <= 0) {
        updateDisplay(minutes, 0);
        reset();
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
    isRunning,
    countDown,
    reset,
    hold
  };
};
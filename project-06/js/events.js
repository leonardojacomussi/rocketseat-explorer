import {
  btnPlay, btnPause, btnStop, btnSet, btnSoundOn, btnSoundOff
} from "./elements.js";

export default function ({
  controls, timer, sound, minutes
}) {
  btnPlay.onclick = handlePlay;
  btnPause.onclick = handlePause;
  btnStop.onclick = handleStop;
  btnSet.onclick = handleSet;
  btnSoundOn.onclick = handleSoundOn;
  btnSoundOff.onclick = handleSoundOff;

  function handlePlay() {
    controls.play();
    timer.countDown();
    sound.pressButton();
  };

  function handlePause() {
    controls.pause();
    timer.hold();
    sound.pressButton();
  };

  function handleStop() {
    controls.reset();
    timer.reset();
    sound.pressButton();
  };

  function handleSoundOn() {
    controls.soundOn();
    sound.bgAudio.pause();
  };
  
  function handleSoundOff() {
    controls.soundOff();
    sound.bgAudio.play();
  };

  function handleSet() {
    const newMinutes = controls.getMinutes();

    if (newMinutes) {
      minutes = newMinutes;
      timer.updateDisplay(minutes, 0);
    };
  };
};
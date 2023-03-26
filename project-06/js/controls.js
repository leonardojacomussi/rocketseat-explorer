import { notNumber } from "./utils.js";

export default function Controls({
  btnPlay, btnPause, btnStop, btnSet, btnSoundOn, btnSoundOff
}) {
  function play() {
    btnPlay.classList.add("hide");
    btnSet.classList.add("hide");
    btnPause.classList.remove("hide");
    btnStop.classList.remove("hide");
  };

  function pause() {
    btnPause.classList.add("hide");
    btnPlay.classList.remove("hide");
  };

  function stop() {
    reset();
  };

  function reset() {
    btnStop.classList.add("hide");
    btnPause.classList.add("hide");
    btnSet.classList.remove("hide");
    btnPlay.classList.remove("hide");
  };

  function getMinutes() {
    const minutes = prompt("Digite a quantidade de minutos entre 1 e 60: ");
    const minutesIsNotANumber = notNumber(minutes);
    if (minutesIsNotANumber || Number(minutes) < 1 || Number(minutes) > 60) {
      alert("Digite um apenas números entre 1 e 60");
      return false;
    };
    return Number(minutes);
  };

  function soundOn() {
    btnSoundOn.classList.add("hide");
    btnSoundOff.classList.remove("hide");
  };

  function soundOff() {
    btnSoundOff.classList.add("hide");
    btnSoundOn.classList.remove("hide");
  };

  return {
    play,
    pause,
    stop,
    reset,
    soundOn,
    soundOff,
    getMinutes,
  };

};
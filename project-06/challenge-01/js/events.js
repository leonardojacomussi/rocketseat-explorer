import {
  btnPlay,
  btnStop,
  btnAdd,
  btnDecount,
  btnNature,
  btnRain,
  btnCoffeeshop,
  btnFireplace,
  minutesDisplay

} from "./elements.js";
import { notNumber } from "./utils.js";

export default function ({
  timer, sounds, minutes
}) {
  btnPlay.onclick = handleBtnPLay;
  btnStop.onclick = handleBtnStop;
  btnAdd.onclick = handleBtnAdd;
  btnDecount.onclick = handleBtnDecount;

  btnNature.onclick = handleBtnNature;
  btnRain.onclick = handleBtnRain;
  btnCoffeeshop.onclick = handleBtnCoffeeshop;
  btnFireplace.onclick = handleBtnFireplace;

  function handleBtnPLay() {
    if (timer.isRunning) {
      return
    } else {
      timer.countDown();
      timer.isRunning = true;
    };
  };

  function handleBtnStop() {
    timer.isRunning = false;
    timer.reset();
  };

  function handleBtnAdd() {
    let storageMinutes = localStorage.getItem("minutes");
    storageMinutes = notNumber(storageMinutes) ? minutes : Number(storageMinutes);
    if (storageMinutes + 5 <= 60) {
      storageMinutes = storageMinutes + 5
      minutesDisplay.textContent = String(storageMinutes).padStart(2, "0");
      localStorage.setItem("minutes", String(storageMinutes));
    } else {
      alert("Escolha um número entre 5 e 60.");
    };
  };

  function handleBtnDecount() {
    let storageMinutes = localStorage.getItem("minutes");
    storageMinutes = notNumber(storageMinutes) ? minutes : Number(storageMinutes);
    if (storageMinutes - 5 >= 5) {
      storageMinutes = storageMinutes - 5
      minutesDisplay.textContent = String(storageMinutes).padStart(2, "0");
      localStorage.setItem("minutes", String(storageMinutes));
    } else {
      alert("Escolha um número entre 5 e 60.");
    };
  };

  function handleBtnNature() {
    sounds.toggleNature();
    btnNature.classList.toggle("selected");
    btnRain.classList.remove("selected");
    btnCoffeeshop.classList.remove("selected");
    btnFireplace.classList.remove("selected");
  };

  function handleBtnRain() {
    sounds.toggleRain();
    btnRain.classList.toggle("selected");
    btnCoffeeshop.classList.remove("selected");
    btnFireplace.classList.remove("selected");
    btnNature.classList.remove("selected");
  };

  function handleBtnCoffeeshop() {
    sounds.toggleCoffeeshop();
    btnCoffeeshop.classList.toggle("selected");
    btnRain.classList.remove("selected");
    btnFireplace.classList.remove("selected");
    btnNature.classList.remove("selected");
  };

  function handleBtnFireplace() {
    sounds.toggleFireplace();
    btnFireplace.classList.toggle("selected");
    btnNature.classList.remove("selected");
    btnRain.classList.remove("selected");
    btnCoffeeshop.classList.remove("selected");
  };
};
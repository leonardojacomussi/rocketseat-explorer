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
    if (minutes + 5 <= 60) {
      minutes = minutes + 5
      minutesDisplay.textContent = String(minutes).padStart(2, "0");
    } else {
      alert("Escolha um número entre 5 e 60.");
    };
  };

  function handleBtnDecount() {
    if (minutes - 5 >= 5) {
      minutes = minutes - 5
      minutesDisplay.textContent = String(minutes).padStart(2, "0");
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
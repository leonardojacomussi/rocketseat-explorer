import {
  btnPlay,
  btnStop,
  btnAdd,
  btnDecount,
  btnNature,
  btnNatureVolume,
  btnRain,
  btnRainVolume,
  btnCoffeeshop,
  btnCoffeeshopVolume,
  btnFireplace,
  btnFireplaceVolume,
  minutesDisplay,
  btnThemeSelector

} from "./elements.js";
import { notNumber } from "./utils.js";
import { handleDarkTheme, handleLightTheme, currentTheme } from "./theme.js";



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

  btnNatureVolume.oninput = handleBtnNatureVolume;
  btnRainVolume.oninput = handleBtnRainVolume;
  btnCoffeeshopVolume.oninput = handleBtnCoffeeshopVolume;
  btnFireplaceVolume.oninput = handleBtnFireplaceVolume;

  btnThemeSelector.onclick = handleTheme;

  window.addEventListener("load", () => {
    if (currentTheme === "light") {
      handleLightTheme();
    } else {
      handleDarkTheme();
    };
  })

  function handleTheme() {
    if (currentTheme === "light") {
      handleDarkTheme();
    } else {
      handleLightTheme();
    };
  };

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
    resetVolumes();
    sounds.toggleNature();
    btnNature.parentNode.classList.toggle("selected");
    btnRain.parentNode.classList.remove("selected");
    btnCoffeeshop.parentNode.classList.remove("selected");
    btnFireplace.parentNode.classList.remove("selected");
  };

  function handleBtnNatureVolume(event) {
    const volume = event.target.value / 100;
    sounds.toggleNatureVolume(volume);
  };

  function handleBtnRain() {
    resetVolumes();
    sounds.toggleRain();
    btnRain.parentNode.classList.toggle("selected");
    btnCoffeeshop.parentNode.classList.remove("selected");
    btnFireplace.parentNode.classList.remove("selected");
    btnNature.parentNode.classList.remove("selected");
  };

  function handleBtnRainVolume(event) {
    const volume = event.target.value / 100;
    sounds.toggleRainVolume(volume);
  };

  function handleBtnCoffeeshop() {
    resetVolumes();
    sounds.toggleCoffeeshop();
    btnCoffeeshop.parentNode.classList.toggle("selected");
    btnRain.parentNode.classList.remove("selected");
    btnFireplace.parentNode.classList.remove("selected");
    btnNature.parentNode.classList.remove("selected");
  };

  function handleBtnCoffeeshopVolume(event) {
    const volume = event.target.value / 100;
    sounds.toggleCoffeeshopVolume(volume);
  };

  function handleBtnFireplace() {
    resetVolumes();
    sounds.toggleFireplace();
    btnFireplace.parentNode.classList.toggle("selected");
    btnNature.parentNode.classList.remove("selected");
    btnRain.parentNode.classList.remove("selected");
    btnCoffeeshop.parentNode.classList.remove("selected");
  };

  function handleBtnFireplaceVolume(event) {
    const volume = event.target.value / 100;
    sounds.toggleFireplaceVolume(volume);
  };

  function resetVolumes() {
    sounds.resetVolumes();
    btnRainVolume.value = 50;
    btnNatureVolume.value = 50;
    btnFireplaceVolume.value = 50;
    btnCoffeeshopVolume.value = 50;
  };
};
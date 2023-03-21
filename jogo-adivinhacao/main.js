// Variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;

// Events
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", checkPressEnterOnBtnReset);

// Funções
function handleTryClick(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");
  const value = inputNumber.value != "" ? Number(inputNumber.value) : -1;
  if (value >= 0 && value <=10) {
    if (value == randomNumber) {
      toogleScreen();
      screen2.querySelector("h2").innerText = `Acertou em ${xAttemps} tentativas! 🎉`;
    }
    inputNumber.value = "";
    xAttemps++
  } else {
    alert(`Erro 😞.
Digite um número válido entre 0 e 10.`)
  };
};

function handleResetClick(event) {
  event.preventDefault();
  toogleScreen();
  xAttemps = 1;
  randomNumber = Math.round(Math.random() * 10);
};

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};

function checkPressEnterOnBtnReset(event) {
  if (event.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick(event);
  };
};
import Modal from "./modal.js";
import AlertError from "./alert-error.js";
import { IMC, notNumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = handleFormSubmit;
inputWeight.oninput = handleChangeInput;
inputHeight.oninput = handleChangeInput;
window.addEventListener("keydown", handleKeydown)

function handleChangeInput () {
  AlertError.close();
};

function handleFormSubmit (event) {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const weightOrHightIsNotANumber= notNumber(weight) || notNumber(height);

  if (weightOrHightIsNotANumber) {
    AlertError.open();
    return
  };
  
  AlertError.close();
  const result = IMC(weight, height);
  displayResultMessage(result);  
};

function handleKeydown(event) {
  if (event.key === "Escape") {
    Modal.close();
  };
};

function displayResultMessage (result) {
  const message = `Seu IMC é de ${result}`;
  Modal.open(message);
};
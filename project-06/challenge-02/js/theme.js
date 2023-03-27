import { btnLightTheme, btnDarkTheme } from "./elements.js";

let currentTheme = getCurrenteTheme();

function getCurrenteTheme () {
  const currentTheme = localStorage.getItem("currentTheme") || "light";
  return currentTheme;
};

const setCurrenteTheme = (newTheme) => {
  currentTheme = newTheme
  localStorage.setItem("currentTheme", newTheme);
};

const handleDarkTheme = () => {
  setCurrenteTheme("dark");
  currentTheme = "dark";
  btnLightTheme.classList.toggle("hide");
  btnDarkTheme.classList.toggle("hide");
  document.documentElement.style.setProperty("--primary", "#FFFFFF");
  document.documentElement.style.setProperty("--bg-color", "#121214");
  document.documentElement.style.setProperty("--bg-button", "#29292E");
  document.documentElement.style.setProperty("--bg-selected", "#0A3442");
  document.documentElement.style.setProperty("--fill-icon", "#FFFFFF");
  document.documentElement.style.setProperty("--bg-volume-control", "#FFFFFF");
};

const handleLightTheme = () => {
  setCurrenteTheme("light");
  currentTheme = "light";
  btnLightTheme.classList.toggle("hide");
  btnDarkTheme.classList.toggle("hide");
  document.documentElement.style.setProperty("--primary", "#323238");
  document.documentElement.style.setProperty("--bg-color", "#FFFFFF");
  document.documentElement.style.setProperty("--bg-button", "#E1E1E6");
  document.documentElement.style.setProperty("--bg-selected", "#02799D");
  document.documentElement.style.setProperty("--fill-icon", "#0A3442");
  document.documentElement.style.setProperty("--bg-volume-control", "#FFFFFF");
};

export {
  currentTheme,
  handleDarkTheme, 
  handleLightTheme,
};
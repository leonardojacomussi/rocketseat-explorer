import { app, linkHome, linkUniverse, linkExploration } from "./elements.js";

export function handleHome() {
  app.classList.add("home");
  app.classList.remove("universe");
  app.classList.remove("exploration");
  linkHome.classList.add("current");
  linkUniverse.classList.remove("current");
  linkExploration.classList.remove("current");
  document.body.style.backgroundImage = "url('./images/bg-home.png')";
};

export function handleUniverse() {
  app.classList.remove("home");
  app.classList.add("universe");
  app.classList.remove("exploration");
  linkHome.classList.remove("current");
  linkUniverse.classList.add("current");
  linkExploration.classList.remove("current");
  document.body.style.backgroundImage = "url('./images/bg-universe.png')";
};

export function handleExploration() {
  app.classList.remove("home");
  app.classList.remove("universe");
  app.classList.add("exploration");
  linkHome.classList.remove("current");
  linkUniverse.classList.remove("current");
  linkExploration.classList.add("current");
  document.body.style.backgroundImage = "url('./images/bg-exploration.png')";
};
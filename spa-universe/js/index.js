import { Router } from "./router.js";
import { linkHomeLogo, linkHome, linkUniverse, linkExploration } from "./elements.js"

const router = new Router();
const { href } = window.location;

if (href.includes("github.io")) {
  linkHome.setAttribute("href", `/rocketseat-explorer${linkHome.getAttribute("href")}`);
  linkHomeLogo.setAttribute("href", `/rocketseat-explorer${linkHomeLogo.getAttribute("href")}`);
  linkUniverse.setAttribute("href", `/rocketseat-explorer${linkUniverse.getAttribute("href")}`);
  linkExploration.setAttribute("href", `/rocketseat-explorer${linkExploration.getAttribute("href")}`);
  console.log("ref", linkHomeLogo.getAttribute("href"))
}

router.add(linkHome.getAttribute("href"), `./pages/home.html`);
router.add(linkUniverse.getAttribute("href"), `./pages/universe.html`);
router.add(linkExploration.getAttribute("href"), `./pages/exploration.html`);

// router.handle();

window.route = () => router.route();
window.onpopstate = () => router.handle();
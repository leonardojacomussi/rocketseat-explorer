import { Router } from "./router.js";

const router = new Router();

router.add("/spa-universe/", "/spa-universe/pages/home.html");
router.add("/spa-universe/universe", "/spa-universe/pages/universe.html");
router.add("/spa-universe/exploration", "/spa-universe/pages/exploration.html");

router.handle();

window.route = () => router.route();
window.onpopstate = () => router.handle();
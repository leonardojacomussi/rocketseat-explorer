import { Router } from "./router.js";

const router = new Router();

router.add("/project-07/", "/project-07/pages/home.html");
router.add("/project-07/about", "/project-07/pages/about.html");
router.add("/project-07/contact", "/project-07/pages/contact.html");
router.add("/project-07/404", "/project-07/pages/404.html");

router.handle();

window.route = () => router.route();
window.onpopstate = () => router.handle();
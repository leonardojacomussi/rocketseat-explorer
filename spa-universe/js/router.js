import { handleHome, handleUniverse, handleExploration } from "./events.js";
export class Router {
  routes = {};

  add(routeName, page){
    this.routes[routeName] = page;
  };

  route(event) {
    event = event || window.event;
    if (event) event.preventDefault();
    window.history.pushState({}, "", event.target.href)
    this.handle();
  };

  handle() {
    const { pathname, href } = window.location;
    const route = href.includes("github.io") ? `/rocketseat-explorer/${this.routes[pathname]}` : this.routes[pathname];
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        if (route.includes("home.html")) handleHome();
        if (route.includes("exploration.html")) handleExploration();
        if (route.includes("universe.html")) handleUniverse();
        document.getElementById("app").innerHTML = html;
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
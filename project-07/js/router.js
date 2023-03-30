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
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes["/project-07/404"];
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
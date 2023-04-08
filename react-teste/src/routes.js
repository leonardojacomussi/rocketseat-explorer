import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

function AppRouter() {
  return (
    <Router basename={"https://leonardojacomussi.github.io/rocketseat-explorer/react-teste"}>
      <Route exact path={`/`} component={App} />
    </Router>
  );
}

export default AppRouter;
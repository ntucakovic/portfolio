import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const AppRouter = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route render={() => (
        <Redirect to="/" />
      )} />
    </Switch>
  </main>
);

export default AppRouter;

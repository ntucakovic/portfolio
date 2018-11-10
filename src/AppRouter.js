import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

const AppRouter = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/index.html" component={Home} />
    </Switch>
  </main>
);

export default AppRouter;
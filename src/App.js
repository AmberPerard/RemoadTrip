import React from "react";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./consts";

import Introduction from "./components/Introduction.js";
import Stream from "./components/Stream.js";
import Finish from "./components/Finish.js";

const App = () => {
  return (
    <Switch>
      <Route path={ROUTES.finish}>
        <Finish />
      </Route>
      <Route path={ROUTES.stream}>
        <Stream />
      </Route>
      <Route exact strict path={ROUTES.home}>
        <Introduction />
      </Route>
    </Switch>
  );
};

export default App;

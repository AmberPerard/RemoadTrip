import React from "react";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./consts";

import Introduction from "./components/Introduction.js";
import Stream from "./components/Stream.js";
import Finish from "./components/Finish.js";
import _Secondary_Landing from "./components/_Secondary_Landing.js";
import ExploreSteps from "./components/ExploreSteps.js";
import Formulas from "./components/Formulas.js";
import Footer from "./components/Footer.js";
import ShareSupport from "./components/ShareSupport.js";

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
        <_Secondary_Landing />
        <ExploreSteps />
        <Formulas />
        <ShareSupport />
        <Footer />
      </Route>
    </Switch>
  );
};

export default App;

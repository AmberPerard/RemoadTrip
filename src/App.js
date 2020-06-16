import React from "react";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./consts";

import Introduction from "./components/Introduction.js";
import Stream from "./components/Stream.js";
import Finish from "./components/Finish.js";
import Secondarylanding from "./components/Secondarylanding.js";
import Exploreandsteps from "./components/Exploreandsteps.js";
import Formulas from "./components/Formulas.js";
import Footer from "./components/Footer.js";

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
        <Secondarylanding />
        <Exploreandsteps />
        <Formulas />
        <Footer />
      </Route>
    </Switch>
  );
};

export default App;

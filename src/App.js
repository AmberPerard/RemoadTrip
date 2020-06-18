import React from "react";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./consts";

import Introduction from "./components/Introduction.js";
import Stream from "./components/Stream.js";
import Map from "./components/Map.js";
import Finish from "./components/Finish.js";
import SecondaryLanding from "./components/SecondaryLanding.js";
import ExploreSteps from "./components/ExploreSteps.js";
import Formulas from "./components/Formulas.js";
import Footer from "./components/Footer.js";
import ShareSupport from "./components/ShareSupport.js";
import Controller from "./components/Controller.js";
import CarDetail from "./components/CarDetail/CarDetail";

const App = () => {
  return (
    <Switch>
      <Route path={ROUTES.finish}>
        <Finish />
      </Route>
      <Route path={ROUTES.stream}>
        <Stream />
      </Route>
      <Route path={ROUTES.map}>
        <Map />
      </Route>
      <Route path={ROUTES.controller}>
        <Controller />
      </Route>
      <Route path={ROUTES.cardetails}>
        <CarDetail />
      </Route>
      <Route exact strict path={ROUTES.home}>
        <Introduction />
        <SecondaryLanding />
        <ExploreSteps />
        <Formulas />
        <ShareSupport />
        <Footer />
      </Route>
    </Switch>
  );
};

export default App;

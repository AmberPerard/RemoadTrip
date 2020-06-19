import React from "react";

import { Switch, Route } from "react-router-dom";
import { ROUTES } from "./consts";

import Introduction from "./components/Introduction/Introduction.js";
import Stream from "./components/Stream/Stream.js";
import Map from "./components/Map/Map.js";
import Finish from "./components/Finish/Finish.js";
import SecondaryLanding from "./components/SecondaryLanding/SecondaryLanding.js";
import ExploreSteps from "./components/ExploreSteps/ExploreSteps.js";
import Formulas from "./components/Formulas/Formulas.js";
import Footer from "./components/Footer/Footer.js";
import ShareSupport from "./components/ShareSupport/ShareSupport.js";
import Controller from "./components/Controller/Controller.js";
import CarDetail from "./components/CarDetail/CarDetail.js";

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
      <Route path={ROUTES.cardetails.path}>
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

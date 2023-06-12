
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import R6 from "views/examples/R6.js";
import MLBB from "views/examples/MLBB.js";
import LOL from "views/examples/LOL.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/equipos"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/sobrenosotros"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/r6"
        render={(props) => <R6 {...props} />}
      />
      <Route
        path="/mlbb"
        render={(props) => <MLBB {...props} />}
      />
      <Route
        path="/lol"
        render={(props) => <LOL {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>
);

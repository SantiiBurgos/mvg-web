/*!
=========================================================
* BLK Design System React - v1.2.1
=========================================================
* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
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
      <Route path="inicio" render={(props) => <Index {...props} />} />
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
      <Redirect from="/" to="inicio" />
    </Switch>
  </BrowserRouter>
);
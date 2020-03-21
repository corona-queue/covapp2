import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import TestWizardPage from "views/TestWizardPage/TestWizardPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/test" component={TestWizardPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

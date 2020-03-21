import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import StartPage from "views/StartPage/StartPage.js";
import QuestionnairePage from "views/QuestionnairePage/QuestionnairePage.js";
import TestResultsPage from "views/TestResultsPage/TestResultsPage.js";
import EndPage from "views/EndPage/EndPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/end" component={EndPage} />
      <Route path="/test" component={QuestionnairePage} />
      <Route path="/results" component={TestResultsPage} />
      <Route path="/" component={StartPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

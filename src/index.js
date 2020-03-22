import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import StartPage from "views/StartPage/StartPage.js";
import QuestionnairePage from "views/QuestionnairePage/QuestionnairePage.js";
import ResultPage from "views/ResultPage/ResultPage.js";
import CallcenterPage from "views/CallcenterPage/CallcenterPage.js";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollMemory />
    <Switch>
      <Route path="/result" component={ResultPage} />
      <Route path="/callcenter" component={CallcenterPage} />
      <Route path="/test" component={QuestionnairePage} />
      <Route path="/" component={StartPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

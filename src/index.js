import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import "assets/css/responsiveFontsize.css";

// pages for this product
import StartPage from "views/StartPage/StartPage.js";
import QuestionnairePage from "views/QuestionnairePage/QuestionnairePage.js";
import TicketPage from "views/TicketPage/TicketPage.js";
import LabsPage from "views/LabsPage/LabsPage.js";
import CallcenterPage from "views/CallcenterPage/CallcenterPage.js";
import Warning from "./Warning";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollMemory />
    <Switch>
      <Route path="/callcenter" component={CallcenterPage} />
      <Route path="/labs" component={LabsPage} />
      <Route path="/ticket" component={TicketPage} />
      <Route path="/test" component={QuestionnairePage} />
      <Route path="/" component={StartPage} />
    </Switch>
    <Warning />
  </Router>,
  document.getElementById("root")
);

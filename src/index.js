import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { syncHistoryWithStore } from "mobx-react-router";
import ScrollMemory from "react-router-scroll-memory";
import routerStore from "stores/router.js";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import StartPage from "views/StartPage/StartPage.js";
import QuestionnairePage from "views/QuestionnairePage/QuestionnairePage.js";
import ResultPage from "views/ResultPage/ResultPage.js";

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

class RedirectToFirstQuestion extends React.Component {
  componentDidMount() {
    history.push("/test/0");
  }
  render() {
    return null;
  }
}

ReactDOM.render(
  <Router history={history}>
    <ScrollMemory />
    <Switch>
      <Route path="/result" component={ResultPage} />
      <Route path="/test/:question" component={QuestionnairePage} />
      <Route path="/test" component={RedirectToFirstQuestion} />
      <Route path="/" component={StartPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

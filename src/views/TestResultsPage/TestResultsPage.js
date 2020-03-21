import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import {observer} from "mobx-react";

import QuestionTreeStoreContext from "../../stores/questions";

import styles from "assets/jss/material-kit-react/views/testWizardPage.js";


const useStyles = makeStyles(styles);

class BaseTestResultsPage extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.submitAnswers();
  }

  render() {
    const { store } = this.props;
    return (
        <div>
        {store.isSubmitting &&
            <p>Is loading...</p>
        }
        {!store.isSubmitting &&
            <p>Done!</p>
        }
        </div>
    )
  }
}


const TestResultsPage = observer(BaseTestResultsPage);

export default React.forwardRef((props, ref) => (
  <QuestionTreeStoreContext.Consumer>
    {store => <TestResultsPage {...props} store={store} ref={ref} />}
  </QuestionTreeStoreContext.Consumer>
));

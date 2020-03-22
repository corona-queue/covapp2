import React, { useContext, useEffect } from "react";
import { useObserver } from "mobx-react-lite";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import QuestionsStore from "stores/questions";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles({ ...styles });

export default props => {
  const classes = useStyles();
  const store = useContext(QuestionsStore);

  // Disable eslint to show missing store dependency
  /*eslint-disable react-hooks/exhaustive-deps*/
  useEffect(() => {
    store.loadResults();
  }, []);
  /*eslint-enable react-hooks/exhaustive-deps*/

  return useObserver(() => {
    const colors = {
      error: "red"
    };
    const texts = {
      loading: "Ergebnisse laden...",
      error: "Es ist ein Fehler aufgetreten"
    };
    const status = store.loadingResults
      ? "loading"
      : store.results === null
      ? "error"
      : "loaded";
    return (
      <div className={classNames(classes.small, classes.shrinkBottom)}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3 style={{ color: colors[status] || "auto" }}>
              {texts[status] || "TODO: Ergebnis darstellen"}
            </h3>
          </GridItem>
        </GridContainer>
      </div>
    );
  });
};

import React, { useContext, useEffect } from "react";
import { useObserver } from "mobx-react-lite";
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

  useEffect(() => {
    store.loadResults();
  }, {});

  return useObserver(() => (
    <div className={classes.small}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Ergebnisse</h2>
          {store.loadingResults ? (
            "Loading results..."
          ) : (
            <h5 className={classes.description}>
              {store.results === null ? (
                <p style={{ color: "red" }}>Es ist ein Fehler aufgetreten</p>
              ) : (
                "TODO: Ergebnis darstellen"
              )}
            </h5>
          )}
        </GridItem>
      </GridContainer>
    </div>
  ));
};

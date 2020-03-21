import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PageSetup from "../PageSetup";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles({ ...styles });

export default props => {
  const classes = useStyles();
  return (
    <div className={classes.small}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Ergebnisse</h2>
          <h5 className={classes.description}>TODO: Ergebnis</h5>
        </GridItem>
      </GridContainer>
    </div>
  );
};

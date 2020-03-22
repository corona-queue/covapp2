import React, { useContext } from "react";
import { useObserver } from "mobx-react-lite";
import classNames from "classnames";
import PageSetup from "views/PageSetup";
import { makeStyles } from "@material-ui/core/styles";
import QuestionsStore from "../../stores/questions";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import sectionStyles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles({ ...styles, ...sectionStyles });

const Ticket = props => {
  const store = useContext(QuestionsStore);
  const classes = useStyles();

  return useObserver(() => {
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Deine Anfrage wurde übermittelt</h2>
            <h5 className={classes.description}></h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  });
};

export default props => {
  const classes = useStyles();
  return (
    <PageSetup>
      <Ticket />
    </PageSetup>
  );
};

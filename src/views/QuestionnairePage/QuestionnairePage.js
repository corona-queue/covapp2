import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import PageSetup from "views/PageSetup";

import styles from "assets/jss/material-kit-react/views/questionnairePage.js";

import Questionnaire from "views/components/Questionnaire";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function QuestionnairePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <PageSetup hideBackground={true}>
        <div className={classes.raised}>
          <Questionnaire />
        </div>
      </PageSetup>
    </div>
  );
}

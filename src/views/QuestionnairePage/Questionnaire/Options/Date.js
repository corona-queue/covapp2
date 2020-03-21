import React from "react";
import Calendar from 'react-calendar-material';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import styles from "./styles.js";

const useStyles = makeStyles(styles);

const Date = ({ options, value, onSelectOption }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="space-around"
    >
      <Calendar
        accentColor={'blue'}
        orientation={'flex-col'}
        showHeader={false}
        onDatePicked={d => onSelectOption(null)}/>
    </Grid>
  );
};

export default Date;

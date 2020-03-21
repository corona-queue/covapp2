import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import styles from "./styles.js";

const useStyles = makeStyles(styles);

const Option = ({ value, onSelectOption }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="space-around"
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={value}
            onChange={date => onSelectOption(date)}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </Grid>
  );
};

export default Option;

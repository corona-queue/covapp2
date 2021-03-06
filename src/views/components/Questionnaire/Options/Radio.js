import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import HelpOutline from "@material-ui/icons/HelpOutline";

import RadioButtonChecked from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import styles from "./styles.js";

const useStyles = makeStyles(styles);

const Radio = ({ options, value, onSelectOption }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="space-around"
    >
      {options.map(({ text, id }, index) => {
        var Icon = {
          answer_yes: CheckCircleOutlineIcon,
          answer_no: HighlightOffIcon,
          answer_unknown: HelpOutline
        }[id];
        Icon =
          Icon ||
          (id === value ? RadioButtonChecked : RadioButtonUncheckedIcon);

        const selected = value === id;

        return (
          <Button
            key={id}
            className={classNames(classes.root, {
              [classes.selected]: selected
            })}
            onClick={() => onSelectOption(id)}
          >
            <span className={classes.wrapper}>
              <Icon fontSize="large" />
              {text}
            </span>
          </Button>
        );
      })}
    </Grid>
  );
};

export default Radio;

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles.js";
const useStyles = makeStyles(styles);

const Option = ({ text, id, onClick }) => {
  const classes = useStyles();

  return <div>{text}</div>;
};

export default Option;

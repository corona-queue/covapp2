import React, { useRef, useLayoutEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import Options from "../Options";

import styles from "./styles.js";
const useStyles = makeStyles(styles);

const Question = ({
  question: { text: headline, options, inputType, id },
  answer,
  currentAnswer
}) => {
  const classes = useStyles();
  const ref = useRef();

  useLayoutEffect(() => {
    if (!ref.current || currentAnswer) return;
    const yOffset = -150;
    const y =
      ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [ref.current, currentAnswer]);

  if (inputType !== "radio") {
    console.error("TODO implement question type");
    return null;
  }

  if (inputType !== "radio") {
    console.error("TODO implement question type");
    return null;
  }

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <form className={classes.form}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h4 ref={ref}>{headline}</h4>
            </CardHeader>
            <CardBody>
              <Options
                inputType={inputType}
                options={options}
                onSelectOption={optionIndex => onSelectOption(id, optionIndex)}
                value={currentAnswer}
              />
            </CardBody>
          </form>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default Question;

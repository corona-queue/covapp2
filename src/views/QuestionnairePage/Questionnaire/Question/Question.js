import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import Radio from "../Options/Radio";
import Date from "../Options/Date";

import styles from "./styles.js";
const useStyles = makeStyles(styles);

const Question = ({
  question: { text: headline, options, inputType, id },
  onSelectOption,
  currentAnswer
}) => {
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const inputComponents = {
    "date": Date,
    "radio": Radio,
    "default": Radio,
  }
  const InputComponent = inputComponents[inputType] || inputComponents["default"];

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={4}>
        <Card className={classes[cardAnimaton]}>
          <form className={classes.form}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h4>{headline}</h4>
            </CardHeader>
            <CardBody>
              <InputComponent
                options={options}
                onSelectOption={optionIndex => onSelectOption(optionIndex)}
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

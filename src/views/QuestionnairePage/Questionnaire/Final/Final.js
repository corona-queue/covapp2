import React, { useRef, useLayoutEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "./styles.js";
const useStyles = makeStyles(styles);

const Final = ({ onClick }) => {
  const classes = useStyles();
  const ref = useRef();
  const history = useHistory();

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <form className={classes.form}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h4 ref={ref}>Sie haben alle Fragen beantwortet</h4>
            </CardHeader>
            <CardBody>
              <Grid container justify="space-around">
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => history.push("/end")}
                >
                  Auswertung
                </Button>
              </Grid>
            </CardBody>
          </form>
        </Card>
      </GridItem>
    </GridContainer>
  );
};

export default Final;

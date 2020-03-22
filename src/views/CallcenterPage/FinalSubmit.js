import React, { useRef, useState, useContext } from "react";
import { useObserver } from "mobx-react-lite";
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

import QuestionsStore from "stores/questions";

import TicketRequestDialog from "views/components/TicketRequestDialog/TicketRequestDialog";

import styles from "./styles.js";
const useStyles = makeStyles(styles);

const FinalSubmit = ({ onClick }) => {
  const classes = useStyles();
  const ref = useRef();
  const history = useHistory();
  const questionStore = useContext(QuestionsStore);

  const [isDialogOpen, setDialogOpen] = useState(false);

  return useObserver(() => {
    const canSubmit = questionStore.finished;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <TicketRequestDialog open={isDialogOpen} />
          <Card>
            <form className={classes.form}>
              <CardBody>
                <Grid container justify="space-around">
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    disabled={!canSubmit}
                    onClick={() => {
                      setDialogOpen(true);
                    }}
                  >
                    Ticket erstellen
                  </Button>
                </Grid>
              </CardBody>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
  )});
};

export default FinalSubmit;

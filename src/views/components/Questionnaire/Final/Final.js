import React, { useRef, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

import Button from "components/CustomButtons/Button.js";
import PhoneCallback from "@material-ui/icons/PhoneCallback";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import TicketRequestDialog from "views/components/TicketRequestDialog/TicketRequestDialog";

import styles from "./styles.js";
const useStyles = makeStyles(styles);

const Final = ({ onClick }) => {
  const classes = useStyles();
  const ref = useRef();
  const history = useHistory();

  const [requestingTicket, requestTicket] = useState(false);

  return (
    <GridContainer justify="center">
      {requestingTicket && (
        <TicketRequestDialog
          {...requestingTicket}
          open={true}
          close={() => requestTicket(false)}
        />
      )}
      <GridItem xs={12} sm={12} md={9}>
        <Card>
          <form className={classes.form}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h3 ref={ref}>Vielen Dank für Ihre Antworten</h3>
            </CardHeader>
            <CardBody>
              <Grid container justify="space-around">
                <Button
                  type="button"
                  color="default"
                  onClick={() =>
                    requestTicket({
                      title: "Einen Rückruf mit der Gesundheitsbehörde vereinbaren",
                      text:
                        "Übermitteln Sie Ihre Antworten an die für Sie zuständige Gesundheitsbehörde. Geben Sie dazu bitte Ihre Kontaktinformationen an, damit Sie zurückgerufen werden können.",
                      id: 0,
                      afterSubmit: () => history.push("/ticket")
                    })
                  }
                >
                  <PhoneCallback /> Rückruf vereinbaren
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

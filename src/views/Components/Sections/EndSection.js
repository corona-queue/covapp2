import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import LocationOn from "@material-ui/icons/LocationOn";
import Call from "@material-ui/icons/Call";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

// TODO: "Loading icon, wenn "Kontakt aufnehmen" angeklickt
// > Text, wenn Anfrage eingegangen ist: "Deine Anfrage ist eingegangen. Aufgrund der hohen Anfrage kann es bis zu zwei Tagen dauern, dass du eine Rückmeldung erhälst."

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Wie geht es weiter?</h2>
          <h5 className={classes.description}>
            Du hast alle relevanten Informationen gesammelt, um deinen Fall
            einzuschätzen. Nun führen wir dich durch die nächsten Schritte.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.title}>
              Um dich testen zu lassen, musst du dich bei deinem Arzt oder dem
              Gesundheitsamt melden.
            </h5>
            <p className={classes.description}>
              Wir leiten deine Informationen an das zuständige Gesundheitsamt
              weiter, sie werden dich zurückrufen.
            </p>
            <Button type="button" color="success">
              <Call /> Kontakt mit Gesundheitsamt aufnehmen
            </Button>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.title}>Wer führt Tests durch?</h5>
            <p className={classes.description}>
              Wenn du von deinem Arzt oder offiziellen Stellen an kein
              bestimmtes Labor vermittelt wurdest, findest du hier eine Liste
              von Teststätten.
            </p>
            <p style={{ color: "red" }}>
              [LISTE VON LABOREN (mit Adresse und Öffnungszeiten)]
            </p>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.title}>
              Hier sind deine Daten zusammengefasst
            </h5>
            <p className={classes.description}>
              Wenn du zum Test an ein Labor vermittelt wurdest, kannst du deine
              Daten mitbringen und direkt mit dem folgenden QR Code auslesen
              lassen. Mach dir am besten einen Screenshot.
            </p>
            <p style={{ color: "red" }}>QR Code</p>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.title}>Du hast noch weitere Fragen?</h5>
            <p className={classes.description}>
              Nimm Kontakt mit einer allgemeinen Hotline auf, um weitere
              Informationen zu erhalten:
            </p>
            <p style={{ color: "red" }}>[TODO: Frage stellen in Input]</p>
            <Button type="button" color="success">
              <Call /> Kontakt mit Hotline aufnehmen
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Call from "@material-ui/icons/Call";
import Help from "@material-ui/icons/Help";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Wie es funktioniert</h2>
          <h5 className={classes.description}>
            Wir leiten dich durch mehrere Schritte; am Ende hast du alle
            Informationen, die du brauchst, um entspannt durch den Testprozess
            zu gehen.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Beantworte einen Fragebogen"
              description="Mit deinen Antworten hilfst du dabei, das Krankheitsrisiko einzuschätzen."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Vervollständige deine Informationen"
              description="Um den Test möglichst schnell durchführen zu können, werden weitere Daten benötigt."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Setze dich mit den zuständigen Stellen in Verbindung"
              description="Wir ermöglichen es dir, Kontakt mit den zuständigen Stellen aufzunehmen. Die eingegebenen Informationen werden direkt übermittelt."
              icon={Call}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Noch etas unklar?"
              description="Wir helfen dir die Informationen zu erhalten, die du brauchst."
              icon={Help}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} style={{ marginTop: "24px" }}>
            <Button type="button" color="success">
              Fragebogen starten
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

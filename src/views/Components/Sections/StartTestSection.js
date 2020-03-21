import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import LocationOn from "@material-ui/icons/LocationOn";
import Help from "@material-ui/icons/Help";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

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
            So wirst du durch den Test geleitet:
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Beantworte Fragen zu deiner Risikoeinschätzung"
              description="TODO."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Vervollständige deine Informationen"
              description="TODO."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Setze dich mit Test-Centern in deiner Nähe in Verbindung"
              description="TODO."
              icon={LocationOn}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <InfoArea
              title="Du hast noch Fragen? Hier findest du Informationen"
              description="TODO."
              icon={Help}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
        TODO: Button "Start Test"
      </div>
    </div>
  );
}

import React from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import PhoneCallback from "@material-ui/icons/PhoneCallback";
import Help from "@material-ui/icons/Help";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.section}>
		<GridContainer justify="center">
			<GridItem xs={12} sm={12} md={8}>
				<h2 className={classes.title}>Über Coronaqueue</h2>
				<h5 className={classes.description}>
					Schön, dass du hier bist!
					Unser Projekt ist im Rahmen des <a href="https://wirvsvirushackathon.org/" target="_blank">WirVsVirus</a>-Hackathons entstanden.<br/>
					Dies ist unsere Demo-Instanz, hier kannst du Coronaqueue ausprobieren.
				</h5>
				<h4 className={classes.description}>
					<b>Momentan suchen wir interessierte Anwender und Unterstützer für Coronaqueue!</b><br/>
					Weitere Informationen bekommst du über <a href="https://devpost.com/software/1_020_triaging-itsm" target="_blank">Devpost</a>,
					unseren <a href="https://www.youtube.com/watch?v=8T4jVh1FhDo" target="_blank">YouTube-Pitch</a>,
					oder über <a href="https://github.com/corona-queue" target="_blank">GitHub</a>.
				</h4>
			</GridItem>
		</GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Wie es funktioniert</h2>
          <h5 className={classes.description}>
            Wir helfen dir dabei, einen Testtermin zu vereinbaren.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={10} sm={10} md={4}>
            <InfoArea
              title="1. Beantworte einen Fragebogen"
              description="Mit deinen Antworten hilfst du dem Gesundheitsamt dabei, deine Situation einzuschätzen."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={10} sm={10} md={4}>
            <InfoArea
              title="2. Nutze unseren Rückruf-Service"
              description="Übermittle die Informationen aus dem Fragebogen an das zuständige Gesundheitsamt und lass dich zurückrufen."
              icon={PhoneCallback}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={10} sm={10} md={4}>
            <InfoArea
              title="3. Noch etwas unklar?"
              description="Wir helfen dir dabei, die Informationen zu erhalten, die du brauchst."
              icon={Help}
              iconColor="gray"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12} style={{ marginBottom: 24 }}>
            <Button
              type="button"
              style={{ marginTop: 20 }}
              color="rose"
              onClick={() => history.push("/test")}
            >
              Fragebogen starten
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

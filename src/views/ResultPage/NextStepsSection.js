import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import LocationOn from "@material-ui/icons/LocationOn";
import CalendarToday from "@material-ui/icons/CalendarToday";
import PhoneCallback from "@material-ui/icons/PhoneCallback";
import ExpandMore from "@material-ui/icons/ExpandMore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import ResultSection from "./ResultSection";

import ContactInformation from "views/components/ContactInformation/ContactInformation";
import TicketRequestDialog from "views/components/TicketRequestDialog/TicketRequestDialog";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import sectionStyles from "./styles";

import labs from "data/labs.js";
import QRCode from "qrcode.react";

const useStyles = makeStyles({ ...styles, ...sectionStyles });

export default function EndSection() {
  const classes = useStyles();

  const [requestingTicket, requestTicket] = useState(false);

  return (
    <div className={classes.small}>
      {requestingTicket && (
        <TicketRequestDialog
          {...requestingTicket}
          close={() => requestTicket(false)}
        />
      )}
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Wie geht es weiter?</h2>
          <h5 className={classes.description}>
            Du hast alle relevanten Informationen gesammelt, um deinen Fall
            einzuschätzen. Nun führen wir dich durch die nächsten Schritte.
          </h5>
          <ResultSection />
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.title}>
              Vervollständige deine Informationen
            </h5>
            <p className={classes.description}>
              Gib deine Kontaktinforationen für den Rückrufservice an. Außerdem
              sind diese Informationen teil der Daten, die du an ein Labor
              übertragen kannst, um einen reibungslosen Testablauf zu
              ermöglichen.
            </p>
            <ContactInformation />
          </GridItem>
        </GridContainer>
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
            <Button
              type="button"
              color="success"
              onClick={() =>
                requestTicket({
                  who: "Gesundheitsamt",
                  what: "Rückrufservice",
                  outcome: "Rückruf",
                  id: 0,
                  warning:
                    "Bitte beachte, dass pro Nutzer nur eine Anfrage an das Gesundheitsamt gesendet werden kann."
                })
              }
            >
              <PhoneCallback /> Rückruf vereinbaren
            </Button>
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
            <p>
              <QRCode value="<PATIENT><A>1</A><B>2</B><C>2</><D>2</D><E>2</E><Q>2</Q><R>2</R><T>2</T><U>2</U><W>2</W><X>2</X><Y>2</Y><Z>1</Z><A0>2</A0><A1>2</A1><A2>2</A2><A3>2</A3><B7>1</B7><B9>20200302</B9><A5>2</A5><A6>2</A6><A7>2</A7><A8>2</A8><A9>2</A9><B0>2</B0><B1>2</B1><B2>2</B2><B3>2</B3></PATIENT>" />
            </p>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.title}>Wer führt Tests durch?</h5>
            <p className={classes.description}>
              Wenn du von deinem Arzt oder offiziellen Stellen an kein
              bestimmtes Labor vermittelt wurdest, findest du hier eine Liste
              von Teststätten, bei denen du einen Termin anfragen kannst.{" "}
              <b>
                Vereinbare nur einen Termin, wenn du eine entsprechende
                Einschätzung von offizieller Seite bekommen hast.
              </b>
            </p>
            {labs.map(lab => renderLab(lab, requestTicket, classes))}
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.title}>Du hast noch weitere Fragen?</h5>
            <p className={classes.description}>
              Nimm Kontakt mit einer allgemeinen Hotline auf, um weitere
              Informationen zu erhalten:
            </p>
            <Button
              type="button"
              color="success"
              onClick={() =>
                requestTicket({
                  who: "Informations-Hotline",
                  what: "Rückrufservice",
                  outcome: "Rückruf",
                  id: 1,
                  warning:
                    "Bitte beachte, dass pro Nutzer nur eine Anfrage an die Informations-Hotline gesendet werden kann."
                })
              }
            >
              <PhoneCallback /> Rückruf vereinbaren
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

const renderLab = (lab, requestTicket, classes) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMore />}>
        <b>{lab.location}</b>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.labContainer}>
          <div className={classes.labDescription}>
            <b>Intitut</b>: {lab.name}
            <br />
            <b>Adresse</b>: {lab.address}
            <br />
            <b>Öffnungszeiten</b>: {lab.open}
          </div>
          <div>
            <Button
              type="button"
              color="standard"
              onClick={() =>
                requestTicket({
                  who: lab.name,
                  what: "Terminvereinbarung",
                  outcome: "Termin",
                  id: 2,
                  warning:
                    "Bitte beachte, dass insgesamt nur eine Terminanfrage pro Nutzer gesendet werden kann."
                })
              }
            >
              <CalendarToday /> Termin anfragen
            </Button>
          </div>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// @material-ui/icons
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// @material-ui/icons
import CalendarToday from "@material-ui/icons/CalendarToday";
import PhoneCallback from "@material-ui/icons/PhoneCallback";
import ExpandMore from "@material-ui/icons/ExpandMore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import ResultSection from "./ResultSection";

import ContactInformation from "views/components/ContactInformation/ContactInformation";
import TicketRequestDialog from "views/components/TicketRequestDialog/TicketRequestDialog";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import sectionStyles from "./styles";

import labs from "data/labs.js";
import QRCode from "./QRCode";

const useStyles = makeStyles({ ...styles, ...sectionStyles });

export default function NextStepsSection() {
    const classes = useStyles();

    const [requestingTicket, requestTicket] = useState(false);

    const {text, risk} = {
        text: "Sie gehören zu einer hohen Risikogruppe",
        risk: "HIGH"
    };
    const icon = {
        HIGH: "info_outline",
        MEDIUM: Warning,
        LOW: "info_outline"
    }[risk];
    const color = {
        HIGH: "danger",
        MEDIUM: "warning",
        LOW: "info"
    }[risk];

    return (
        <div style={{overflow: "hidden"}}>
            <SnackbarContent
                message={<span>{text}</span>}
                color={color}
                icon={icon}
            />
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    {requestingTicket && (
                        <TicketRequestDialog
                            {...requestingTicket}
                            close={() => requestTicket(false)}
                        />
                    )}

                    <h2 className={classes.title}>Wie geht es weiter?</h2>
                    <ResultSection/>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary" className={classes.cardHeader}>
                            <h3>Informationen weiterleiten</h3>
                        </CardHeader>
                        <CardBody>
                            <p className={classes.description}>
                                Gib deine Kontaktinforationen für den Rückrufservice an.
                                Außerdem sind diese Informationen teil der Daten, die du an ein
                                Labor übertragen kannst, um einen reibungslosen Testablauf zu
                                ermöglichen.
                            </p>
                            <ContactInformation/>
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
                                <PhoneCallback/> Rückruf vereinbaren
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary" className={classes.cardHeader}>
                            <h3>Zusammenfassung</h3>
                        </CardHeader>
                        <CardBody>
                            <p className={classes.description}>
                                Wenn du zum Test an ein Labor vermittelt wurdest, kannst du
                                deine Daten mitbringen und direkt mit dem folgenden QR Code
                                auslesen lassen. Mach dir am besten einen Screenshot.
                            </p>
                            <QRCode/>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <Card noHeader={true}>
                        <CardBody>
                            <h3 className={classes.title}>Wer führt Tests durch?</h3>
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
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <Card noHeader={true}>
                        <CardBody>
                            <h3 className={classes.title}>Du hast noch weitere Fragen?</h3>
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
                                <PhoneCallback/> Rückruf vereinbaren
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}

const renderLab = (lab, requestTicket, classes) => {
  return (
    <ExpansionPanel key={lab.name}>
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
              color="default"
              onClick={() =>
                requestTicket({
                  id: lab.name,
                  title: `Termin mit dem Labor ${lab.name} vereinbaren`,
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

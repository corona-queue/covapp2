import React, { useContext } from "react";
import { useObserver } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import PageSetup from "views/PageSetup";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import QRCode from "views/components/QRCode";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMore from "@material-ui/icons/ExpandMore";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import sectionStyles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import labStyles from "./styles";

import QuestionsStore from "../../stores/questions";

import labs from "data/labs.js";

const useStyles = makeStyles({ ...styles, ...sectionStyles, ...labStyles });

const renderLab = (lab, classes) => {
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
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default props => {
  const classes = useStyles();
  const store = useContext(QuestionsStore);
  const history = useHistory();
  return useObserver(() => {
    const ticket = store.ticket;
    const ticketPresent = !(typeof ticket.priority === "undefined");
    return (
      <PageSetup>
        <div className={classes.small}>
          <GridContainer justify="center">
            {ticketPresent && (
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>Informationen zu Tests</h2>
                <h5
                  className={classes.description}
                  style={{ paddingBottom: "16px" }}
                >
                  Für einen schnellen Ablauf im Testcenter haben wir deine
                  Informationen in einem QR Code zusammengefasst, der vor Ort
                  gescannt werden kann.
                </h5>
                <QRCode size={300} />
                <h5
                  className={classes.description}
                  style={{ paddingTop: "16px", paddingBottom: "16px" }}
                >
                  Hier kannst du sehen, welche Testcenter sich in deiner Nähe
                  befinden.
                </h5>
                {labs.map(lab => renderLab(lab, classes))}
              </GridItem>
            )}
            {!ticketPresent && (
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>
                  <span onClick={() => history.push("/")}>
                    Du hast noch keine Anfrage gesendet. Starte bitte von{" "}
                    <span
                      style={{ color: "rgb(233, 30, 99)", cursor: "pointer" }}
                    >
                      unserer Startseite
                    </span>
                  </span>
                </h2>
              </GridItem>
            )}
          </GridContainer>
        </div>
      </PageSetup>
    );
  });
};

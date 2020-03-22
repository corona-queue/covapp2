import React from "react";
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
  return (
    <PageSetup>
      <div className={classes.small}>
        <GridContainer justify="center">
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
        </GridContainer>
      </div>
    </PageSetup>
  );
};

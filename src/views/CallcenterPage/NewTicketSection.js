import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useObserver } from "mobx-react-lite";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import ContactInformation from "views/components/ContactInformation/ContactInformation";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import sectionStyles from "./styles";

import ContactStore from "stores/contact";

const useStyles = makeStyles({ ...styles, ...sectionStyles });

export default function NextStepsSection() {
    const classes = useStyles();
    const history = useHistory();
    const contactStore = useContext(ContactStore);

    return useObserver(() => (
        <div style={{overflow: "hidden"}}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.newCase}>
                    <Card>
                        <CardHeader color="primary" className={classes.cardHeader}>
                            <h3>Neues Ticket erstellen</h3>
                        </CardHeader>
                        <CardBody>
                            <p className={classes.description}>
                                Geben Sie die Kontaktinformationen der Person ein.
                            </p>
                            <ContactInformation/>
                            <p className={classes.description}>
                                Wir leiten die Informationen an das zuständige Gesundheitsamt
                                weiter, sie werden die Kontaktperson zurückrufen.
                            </p>
                            <Button
                              disabled={!contactStore.isComplete}
                              type="button"
                              style={{ marginTop: "20px" }}
                              color="rose"
                              onClick={() => history.push("/test?callcenter=true")}
                            >
                              <span style={{ fontSize: "1.2em" }}>Fragebogen starten</span>
                            </Button>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    ));
}

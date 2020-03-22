import React, { useContext } from "react";
import { useObserver } from "mobx-react-lite";
import { useHistory } from "react-router-dom";
import PageSetup from "views/PageSetup";
import { makeStyles } from "@material-ui/core/styles";
import QuestionsStore from "../../stores/questions";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import sectionStyles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles({ ...styles, ...sectionStyles });

const Ticket = props => {
  const store = useContext(QuestionsStore);
  const classes = useStyles();
  const history = useHistory();

  return useObserver(() => {
    // For testing!
    const ticket = Object.keys(store.ticket).length
      ? store.ticket
      : {
          id: 211,
          priority: 1,
          med_prio: 0,
          tags: ["Information"]
        };
    const text =
      ticket.priority === 1 || ticket.priority === 2
        ? "Bitte beachte, dass zur Zeit viele Anfragen eingehen und längere Wartezeiten entstehen können."
        : "Das Gesundheitsamt wird sich schnellstmöglich bei dir melden.";
    return (
      <div className={classes.small}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Deine Anfrage wurde übermittelt</h2>
            <h5 className={classes.description}>{text}</h5>
            <h5
              className={classes.description}
              style={{ paddingTop: "32px" }}
              onClick={() => history.push("/labs")}
            >
              Und wie geht es nun weiter? Bereite dich{" "}
              <span style={{ color: "rgb(233, 30, 99)", cursor: "pointer" }}>
                hier
              </span>{" "}
              auf deinen Test vor.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  });
};

export default props => {
  return (
    <PageSetup>
      <Ticket />
    </PageSetup>
  );
};

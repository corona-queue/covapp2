import React, { Fragment, useContext, useEffect } from "react";
// @material-ui/core components
import { useObserver } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import ContactStore from "stores/contact";

import styles from "./contactInformationStyle";

const useStyles = makeStyles({ ...styles });

export default props => {
  const classes = useStyles();
  const store = useContext(ContactStore);

  return useObserver(() => (
    <Fragment>
      <TextField
        className={classes.input}
        label={"Vorname"}
        value={store.firstname}
        onChange={event => store.setAttribute("firstname", event.target.value)}
      />
      <TextField
        className={classes.input}
        label={"Nachname"}
        value={store.lastname}
        onChange={event => store.setAttribute("lastname", event.target.value)}
      />
      <TextField
        className={classes.input}
        label={"Telefon"}
        value={store.phone}
        onChange={event => store.setAttribute("phone", event.target.value)}
      />
    </Fragment>
  ));
};

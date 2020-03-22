import React, { useContext, useEffect } from "react";
import { useObserver } from "mobx-react-lite";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import ContactStore from "stores/contact";

import styles from "./contactInformationStyle";

const useStyles = makeStyles({ ...styles });

export default props => {
  const classes = useStyles();
  const store = useContext(ContactStore);
  const { showRequired } = props;
  const postfix = showRequired ? "*" : "";

  return useObserver(() => (
    <div>
      <TextField
        className={classes.input}
        label={`Vorname${postfix}`}
        value={store.firstname}
        onChange={event => store.setAttribute("firstname", event.target.value)}
      />
      <TextField
        className={classes.input}
        label={`Nachname${postfix}`}
        value={store.lastname}
        onChange={event => store.setAttribute("lastname", event.target.value)}
      />
      <TextField
        className={classes.input}
        label={`Telefon${postfix}`}
        value={store.phone}
        onChange={event => store.setAttribute("phone", event.target.value)}
      />
    </div>
  ));
};

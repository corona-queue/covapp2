import React, { useContext } from "react";
import { useObserver } from "mobx-react-lite";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

import NoticeStore from "stores/notice";

export default props => {
  const store = useContext(NoticeStore);

  return useObserver(() => {
    return (
      <Dialog open={!store.noticeTaken}>
        <DialogTitle>
          Anfragen werden nicht ans Gesundheitsamt weitergeleitet
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bitte beachte, dass dies nur eine <b>Testinstallation</b> zu
            Demonstrationszwecken ist.
            <br />
            <br /> Deine Anfragen werden zwar an ein{" "}
            <a href="https://zammad.coronaqueue.de/" target="_blank">
              Ticket-System
            </a>{" "}
            weitergeleitet, aber das Gesundheitsamt greift nicht darauf zu.
            <br />
            <br />{" "}
            <b>
              Wenn du einen Test durchführen möchtest, kontaktiere bitte das für
              dich zuständige Gesundheitsamt telefonisch.
            </b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => store.userTookNotice()} color="primary">
            Verstanden
          </Button>
        </DialogActions>
      </Dialog>
    );
  });
};

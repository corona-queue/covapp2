import React, { useState, useContext } from "react";
import { useObserver } from "mobx-react-lite";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

import ContactStore from "stores/contact";
import QuestionsStore from "stores/questions";

import ContactInformation from "views/components/ContactInformation/ContactInformation";

export default props => {
  const contactStore = useContext(ContactStore);
  const questionStore = useContext(QuestionsStore);

  const { who, what, outcome, close, id, warning } = props;

  return useObserver(() => {
    const disabled =
      contactStore.firstname === "" ||
      contactStore.lastname === "" ||
      contactStore.phone === "" ||
      questionStore.submitted.includes(id);
    return (
      <Dialog open={true}>
        <DialogTitle>{`${what} ${who}`}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Um einen {outcome} zu vereinbaren, vervollständige und überprüfe
            bitte deine Kontaktinformationen:
          </DialogContentText>
          <ContactInformation showRequired={true} />
          <DialogContentText style={{ marginTop: "16px" }}>
            {warning}{" "}
            {questionStore.submitted.includes(id)
              ? "Deine Anfrage ist eingegangen.  Aufgrund der hohen Anfrage kann es bis zu zwei Tagen dauern, dass du eine Rückmeldung erhälst."
              : questionStore.isSubmitting
              ? "Deine Anfrage wird gesendet..."
              : ""}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={close} color="default">
            Abbrechen
          </Button>
          <Button
            autoFocus
            disabled={disabled}
            onClick={
              disabled
                ? () => {}
                : () =>
                    questionStore.submitAnswers(id, contactStore.requestBody)
            }
            color="primary"
          >
            Anfrage senden
          </Button>
        </DialogActions>
      </Dialog>
    );
  });
};

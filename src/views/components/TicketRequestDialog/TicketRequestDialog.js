import React, { useContext } from "react";
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

  const { title, text, close, id, warning, afterSubmit, open } = props;

  return useObserver(() => {
    const disabled =
      contactStore.firstname === "" ||
      contactStore.lastname === "" ||
      contactStore.phone === "" ||
      questionStore.isSubmitting ||
      questionStore.submitted.includes(id);
    return (
      <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {warning && (
            <DialogContentText style={{ marginTop: "16px" }}>
              {warning}
            </DialogContentText>
          )}
          {text && <DialogContentText>{text}</DialogContentText>}
          <ContactInformation showRequired={true} />
          <DialogContentText style={{ marginTop: "16px" }}>
            {questionStore.submitted.includes(id) ? (
              <span>
                <b>Deine Anfrage ist eingegangen.</b>
              </span>
            ) : questionStore.isSubmitting ? (
              "Deine Anfrage wird gesendet..."
            ) : questionStore.submitError ? (
              <span>
                <b style={{ color: "darkred" }}>
                  Es ist ein Fehler aufgetreten.
                </b>{" "}
                Lass die Seite geöffnet und versuche es bitte später erneut.
              </span>
            ) : (
              ""
            )}
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
                    questionStore.submitAnswers(
                      id,
                      contactStore.meta,
                      afterSubmit
                    )
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

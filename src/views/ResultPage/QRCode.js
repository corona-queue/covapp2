import React, { useContext } from "react";
import { useObserver } from "mobx-react-lite";
import QuestionsStore from "../../stores/questions";
import QRCode from "qrcode.react";

export default props => {
  const store = useContext(QuestionsStore);
  return useObserver(() => {
    const qrCodeString =
      "<PATIENT>" +
      Object.keys(store.answers).reduce(
        (string, answerID) =>
          string +
          "<" +
          answerID +
          ">" +
          store.answers[answerID] +
          "</" +
          answerID +
          ">",
        ""
      ) +
      "</PATIENT>";
    return <QRCode size={300} value={qrCodeString} />;
  });
};

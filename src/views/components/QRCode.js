import React, { useContext } from "react";
import { useObserver } from "mobx-react-lite";
import QuestionsStore from "../../stores/questions";
import QRCode from "qrcode.react";
import questions from "data/questionnaire/tree.js";

export default props => {
  const store = useContext(QuestionsStore);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    return `${ye}${mo}${da}`;
  }

  function resovleAnswerToXml(qid, answer) {
    for (let question of Object.values(questions)) {
      if (question.id === qid) {
        if (question.options) {
          for (let idx = 0; idx < question.options.length; idx++) {
            if (question.options[idx] === answer)
              return [question.xmlCode, idx + 1];
          }
        } else {
          return [question.xmlCode, formatDate(answer)];
        }
      }
    }
    return [qid, answer];
  }

  function reduceAnswersToXml(string, answerID) {
    const [questionXmlCode, answerXmlCode] = resovleAnswerToXml(
      answerID,
      store.answers[answerID]
    );
    return (
      string +
      "<" +
      questionXmlCode +
      ">" +
      answerXmlCode +
      "</" +
      questionXmlCode +
      ">"
    );
  }

  return useObserver(() => {
    const qrCodeString =
      "<PATIENT>" +
      Object.keys(store.answers).reduce(reduceAnswersToXml, "") +
      "</PATIENT>";
    return (
      <QRCode
        style={{
          width: "100%",
          maxWidth: props.size || 500,
          marginLeft: "auto",
          height: "auto"
        }}
        renderAs={"svg"}
        value={qrCodeString}
      />
    );
  });
};

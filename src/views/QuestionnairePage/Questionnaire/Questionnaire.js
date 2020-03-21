import React, { useContext, useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Question from "./Question";
import Slide from "@material-ui/core/Slide";

import QuestionsStore from "../../../stores/questions";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Test = () => {
  const store = useContext(QuestionsStore);
  const classes = useStyles();

  useEffect(() => {
    store.loadQuestions();
  }, []);

  return useObserver(() => (
    <div className={classes.root}>
      {store.loading && (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>Fragen werden geladen...</Grid>
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      )}

      {!store.loading &&
        store.openQuestions.map((question, i) => (
          <div key={question.id}>
            <Question
              question={question}
              currentAnswer={store.answers[question.id]}
              onSelectOption={(question, option) =>
                store.answer(question, option)
              }
            />
          </div>
        ))}
      <div style={{ height: "100vh" }} />
    </div>
  ));
};

export default Test;

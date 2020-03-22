import React, { useContext, useEffect } from "react";

import { useObserver } from "mobx-react-lite";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Question from "./Question";
import Final from "./Final";

import QuestionsStore from "../../../stores/questions";
import styles from "./styles";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    background: "white"
  },
  bar: {
    borderRadius: 20,
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
  }
})(LinearProgress);

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

      {store.finished && <Final />}

      <div style={{ height: "100vh" }} />

      <BorderLinearProgress
        className={classes.progress}
        variant="determinate"
        value={store.progress}
      />
    </div>
  ));
};

export default Test;

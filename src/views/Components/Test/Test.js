import React, { useContext, useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

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
        <div className={classes.loadingContainer}>
          <div>Fragen werden geladen</div>
          <CircularProgress />
        </div>
      )}
      {JSON.stringify(store.questions)}
      <button onClick={() => (store.name = "Mike")}>No! I am Mike</button>
    </div>
  ));
};

export default Test;

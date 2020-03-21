import React from "react";
import {observer} from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import EndSection from "../Components/Sections/EndSection.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import QuestionTreeStoreContext from "../../stores/questions";
import styles from "../Components/Questionnaire/styles";

const useStyles = makeStyles(styles);

class BaseTestResultsPage extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.submitAnswers();
  }

  render() {
    //const classes = useStyles();
    const { store } = this.props;
    return (
        <div>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
          {store.isSubmitting && (
            <Grid item>
              <p>Antworten werden übermittelt</p>
              <CircularProgress />
            </Grid>
          )}
          {!store.isSubmitting && (
              <Grid item>
                <EndSection />
              </Grid>
          )}
          </Grid>
        </div>
    )
  }
}

const TestResultsPage = observer(BaseTestResultsPage);

export default React.forwardRef((props, ref) => (
  <QuestionTreeStoreContext.Consumer>
    {store => <TestResultsPage {...props} store={store} ref={ref} />}
  </QuestionTreeStoreContext.Consumer>
));

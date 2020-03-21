const styles = theme => ({
  root: {
    color: "#000000",
    margin: theme.spacing(2)
  },
  loadingContainer: {
    flexDirection: "column",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(2)
    }
  }
});

export default styles;

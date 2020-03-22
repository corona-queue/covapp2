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
  },
  progress: {
    position: "fixed",
    bottom: 0,
    left: 0,
    heigth: 10,
    width: "100%"
  }
});

export default styles;

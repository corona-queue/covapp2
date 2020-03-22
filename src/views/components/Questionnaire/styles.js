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
    top: 0,
    left: 0,
    height: 10,
    right: 0,
    zIndex: 10000
  }
});

export default styles;

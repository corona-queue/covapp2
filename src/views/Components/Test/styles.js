const styles = theme => ({
  root: {
    color: "#000000"
  },
  loadingContainer: {
    flexDirection: "cloumn",
    "& > *": {
      margin: theme.spacing(2)
    }
  }
});

export default styles;

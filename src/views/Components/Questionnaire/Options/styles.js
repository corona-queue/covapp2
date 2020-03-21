const style = theme => ({
  root: {
    ...theme.typography.h6,
    maxWidth: 264,
    minWidth: 72,
    position: "relative",
    boxSizing: "border-box",
    minHeight: 48,
    flexShrink: 0,
    padding: "6px 12px",
    [theme.breakpoints.up("sm")]: {
      padding: "6px 24px"
    },
    overflow: "hidden",
    whiteSpace: "normal",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      minWidth: 160
    }
  },
  wrapper: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(2)
    }
  },
  selected: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  }
});

export default style;

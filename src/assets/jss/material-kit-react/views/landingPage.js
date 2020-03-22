import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = theme => ({
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  darker: {
    backgroundColor: "rgba(50,50,50,0.6)",
    [theme.breakpoints.down("sm")]: {
      zoom: 0.8,
      padding: 30
    }
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    overflow: "hidden"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    },
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
});

export default landingPageStyle;

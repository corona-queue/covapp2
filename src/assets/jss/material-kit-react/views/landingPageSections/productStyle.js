import { title, grayColor } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    textAlign: "center"
  },
  small: {
    paddingTop: "20px",
    paddingBottom: "70px",
    textAlign: "center"
  },
  shrinkBottom: {
    paddingBottom: "0px"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    padding: "10px"
  },
  description: {
    color: grayColor,
    padding: "10px",
    fontSize: "1.2em"
  }
};

export default productStyle;

import { title } from "assets/jss/material-kit-react.js";

const productStyle = {
  section: {
    padding: "70px 0",
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
    color: "#999",
    padding: "10px"
  }
};

export default productStyle;

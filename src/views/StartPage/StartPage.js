import React from "react";
import { useHistory } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Call from "@material-ui/icons/Call";
import Help from "@material-ui/icons/Help";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import PageSetup from "views/PageSetup";
import OverviewSection from "views/StartPage/OverviewSection";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const history = useHistory();
  const { ...rest } = props;
  return (
    <PageSetup startPage={true}>
      <OverviewSection />
    </PageSetup>
  );
}

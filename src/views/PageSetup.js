import React from "react";
import { useHistory } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

const useStyles = makeStyles(styles);

export default function PageSetup(props) {
  const classes = useStyles();
  const history = useHistory();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="CoronaQueue"
        onBrandClick={() => history.push("/")}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 70,
          color: "white"
        }}
        {...rest}
      />
      {props.startPage ? renderLargeHeader(classes) : renderHeader(classes)}
      <div
        className={
          props.hideBackground
            ? ""
            : classNames(classes.main, classes.mainRaised)
        }
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

const renderLargeHeader = classes => {
  return (
    <Parallax image={require("assets/img/virus_smaller.jpg")}>
      <div className={classNames(classes.container, classes.darker)}>
        <GridContainer>
          <GridItem>
            <div className={classes.brand}>
              <h1 className={classes.title}>Willkommen bei CoronaQueue</h1>
              <h3>
                Wir begleiten dich während des Testprozesses auf den Coronavirus
                (SARS-CoV-2).
              </h3>
              <h3>
                CoronaQueue hat es sich zum Ziel gemacht, einen reibungslosen
                Ablauf und Datenaustausch zwischen dir, den Gesundheitsämern und
                den Teststätten zu ermöglichen.
              </h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  );
};

const renderHeader = classes => {
  return (
    <Parallax
      style={{ height: "200px" }}
      filter
      image={require("assets/img/virus_smaller.jpg")}
    ></Parallax>
  );
};

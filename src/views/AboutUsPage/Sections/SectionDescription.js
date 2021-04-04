import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import abigail from "assets/users/img/abigail.jpg"

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
        <img src={abigail} className="aboutUs-abigail"/>
          <h2><strong>Abigail White</strong></h2>
          <h5 className={classes.description}>
            Abigail White is the overseer of the English For Life project, alongside teaching US Citizenship,
            She manages much of the behind the scenes details
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}

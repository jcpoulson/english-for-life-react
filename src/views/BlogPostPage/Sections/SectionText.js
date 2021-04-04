import React from "react";
import { Link } from "react-router-dom"
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Button from "components/CustomButtons/Button.js";


import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle";

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText(props) {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>
            {props.courseData.title}
          </h3>
          <p>
            {props.courseData.desc}
            <br />
            <br />
            Below is a preview of what you will find and experience in this course
          </p>
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
            <iframe width="100%" height="400"
            src={props.courseData.content}>
            </iframe>
            </GridItem>
            
          </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Course Requirements:</h3>
          <p>
            {props.courseData.requirements}
          </p>
          <GridContainer justify="center">
          <Link to="/signup-page">
            <Button color={window.innerWidth < 960 ? "info" : "info"}>
              <LabelImportantIcon /> Learn More
            </Button>
        </Link>
          </GridContainer>
          
        </GridItem>
      </GridContainer>
    </div>
  );
}

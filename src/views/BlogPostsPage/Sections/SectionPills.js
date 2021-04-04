import React from "react";
import { Link } from "react-router-dom"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import office2 from "assets/img/examples/office2.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import office4 from "assets/img/examples/office4.jpg"
import city from "assets/img/examples/city.jpg"


import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.js";

import abigail from "assets/users/img/abigail.jpg";
import jonah from "assets/users/img/jonah.jpg";
import michael from "assets/users/img/michael.jpg";
import justin from "assets/users/img/justin.jpg";

const useStyles = makeStyles(sectionPillsStyle);

export default function SectionPills(props) {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + city + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Abigail White</h6>
              <div>
                  <img src={abigail} alt="..." className="teacher-img"/>
                </div>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  United States Citizenship
                </h3>
              </a>
              <Link to="/course">
                <Button round href="#pablo" color="danger" onClick={() => {props.changeCurrentCourse(1)}}>
                  <FormatAlignLeft className={classes.icons} /> Explore Course
                </Button>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office2 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Jonah Poulson</h6>
              <div>
                  <img src={jonah} alt="..." className="teacher-img"/>
                </div>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  Language Learning Techniques
                </h3>
              </a>
              <Link to="/course">
                <Button round href="#pablo" color="primary" onClick={() => {props.changeCurrentCourse(2)}}>
                  <FormatAlignLeft className={classes.icons} /> Explore Course
                </Button>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + blog8 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Michael Kriegshauser</h6>
              <div>
                  <img src={michael} alt="..." className="teacher-img"/>
                </div>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  Build an effective learning schedule
                </h3>
              </a>
              <Link to="/course">
                <Button round href="#pablo" color="secondary" onClick={() => {props.changeCurrentCourse(3)}}>
                  <FormatAlignLeft className={classes.icons} /> Explore Course
                </Button>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + office4 + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>Justin Schofield</h6>
              <div>
                  <img src={justin} alt="..." className="teacher-img"/>
                </div>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  Use Anki flash cards for learning
                </h3>
              </a>
              <Link to="/course">
                <Button round href="#pablo" color="info" onClick={() => {props.changeCurrentCourse(4)}}>
                  <FormatAlignLeft className={classes.icons} /> Explore Course
                </Button>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
        
      </GridContainer>
    </div>
  );
}

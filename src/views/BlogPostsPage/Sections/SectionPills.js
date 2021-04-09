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
  console.log(props.courses)
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
      <GridContainer>

      {/* Dynamically creating a course component for each course */}
      {
        props.courses.map(course => (
          <GridItem xs={12} sm={6} md={6} key={course[0]}> 
          <Card
            raised
            background
            style={{ backgroundImage: "url(" + (() => {
        switch (course[1].backgroundImg) {
          case "city": return city;
          case "office2": return office2;
          case "blog8": return blog8;
          case "office4": return office4;
        }
      })() + ")" }}
          >
            <CardBody background>
              <h6 className={classes.category}>{course[1].teacher}</h6>
              <div>
              <img src={ (() => {
        switch (course[1].img) {
          case "abigail": return abigail;
          case "jonah": return jonah;
          case "michael": return michael;
          case "justin": return justin;
        }
      })() } className="teacher-img"></img>
                </div>
              <a href="#pablo">
                <h3 className={classes.cardTitle}>
                  {course[1].title}
                </h3>
              </a>
              <Link to="/course">
                <Button round href="#pablo" color={(() => {
        switch (course[1].img) {
          case "abigail": return "danger";
          case "jonah": return "primary";
          case "michael": return "secondary";
          case "justin": return "info";
        }
      })()} onClick={() => {props.changeCurrentCourse(course[1].id)}}>
                  <FormatAlignLeft className={classes.icons} /> Explore Course
                </Button>
              </Link>
            </CardBody>
          </Card>
        </GridItem>
        ))
      }

  {/* End courses map function */}
        

      </GridContainer>
    </div>
  );
}

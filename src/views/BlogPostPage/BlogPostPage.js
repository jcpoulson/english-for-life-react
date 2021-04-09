/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionText from "./Sections/SectionText.js";

import abigail from "assets/users/img/abigail.jpg";
import jonah from "assets/users/img/jonah.jpg";
import michael from "assets/users/img/michael.jpg";
import justin from "assets/users/img/justin.jpg";

import blogPostPageStyle from "assets/jss/material-kit-pro-react/views/blogPostPageStyle.js";

const useStyles = makeStyles(blogPostPageStyle);

export default function BlogPostPage(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="English For Life"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
      />
      <Parallax image={require("assets/img/examples/card-project4.jpg")} filter="dark">
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem md={8} className={classes.textCenter}>
            <img src={
              (() => {
        switch (props.courseData.id) {
          case 1:   return abigail;
          case 2: return jonah;
          case 3:  return michael;
          case 4:  return justin;
        }
      })()
            } className="teacher-img"></img>
              <h1 className={classes.title}>
                {props.courseData.title}
              </h1>
              <h2 className={classes.subtitle}>Teacher: {props.courseData.teacher}</h2>
              <h4 className={classes.subtitle}>
                {props.courseData.subtitle}
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionText courseData={props.courseData}/>
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://jcpoulson.github.io"
                target="_blank"
              >
                Tech Group 3
              </a>{" "}
            </div>
          </div>
        }
      />
    </div>
  );
}

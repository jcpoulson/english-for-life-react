import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
import PublicIcon from '@material-ui/icons/Public';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>What we do</h2>
          <h5 className={classes.description}>
            The English For Life project is a project that is sponsored by The Lynchburg Baptist Association and aims to teach
            students from other countries how to speak English. Not only is it just English but a variety of other services are
            offered to students to help them succeed in the United States and this is all done through the name of Jesus Christ
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="1. Design"
            description={
              <span>
                <p>
                  We have a cirriculum for students to follow but we see things much differently and understand that English
                  is a difficult language, so our teachers design the teaching and cirriculum to fit the need of the student.{" "}
                </p>
              </span>
            }
            icon={Gesture}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2. Develop"
            description={
              <span>
                <p>
                  Alongside learning English, we aim to help students earn United States Citizenship.
                  Our goal is to help develop great American citizens{" "}
                </p>
              </span>
            }
            icon={Build}
            iconColor="rose"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="3. Disciples"
            description={
              <span>
                <p>
                  Our ultimate goal is to spread the gospel, throughout our training we plan to equip our new English speakers
                  and American citizens with the abilities and courage to take the gospel of Jesus Christ to the ends of the Earth{" "}
                </p>
              </span>
            }
            icon={PublicIcon}
            iconColor="rose"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

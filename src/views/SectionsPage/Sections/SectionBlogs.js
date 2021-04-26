import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Button from "components/CustomButtons/Button.js";

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import FolderIcon from '@material-ui/icons/Folder';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';


import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";


const useStyles = makeStyles(blogsStyle);

export default function SectionBlogs({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 4 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Us Citizenship Module 1: Early America</h2>
              <h3><strong><em>Downloadables</em></strong></h3>
              <Button href="https://drive.google.com/uc?export=download&id=1ZpxBtyzvTvmYNsnyP6l7aR2zgJiAQl4M" simple color="google">
                <InsertDriveFileIcon/>
              </Button>
              <Button href="https://drive.google.com/uc?export=download&id=1U9eHowcsX9v_vR8syPLSPz11W4FAVsHU" justIcon simple color="twitter">
                <FolderIcon/>
              </Button>
              <Button href="https://drive.google.com/uc?export=download&id=1loARZizEISwnuGPTGbK1PxIcLKpK6Na6" justIcon simple color="dribbble">
                <VpnKeyIcon/>
              </Button>
              <Button href="https://drive.google.com/uc?export=download&id=1_KOJGMntSTDeDVZMru0jfL9rT8vkoiJk" justIcon simple color="linkedin">
                <QuestionAnswerIcon/>
              </Button>
              <br />
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                  <iframe width="100%" height="400"
            src="https://drive.google.com/file/d/1KdstrorQKGwyc6BWOufWTYxmfWgCO0yf/preview">
            </iframe>
                  </a>
                  
                </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6 className={classes.cardCategory}>US Citizenship</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Early America Walkthrough
                    </a>
                  </h3>
                </CardBody>
              </Card>
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                  <iframe width="100%" height="400"
            src="https://drive.google.com/file/d/1Y6ZKqWyp25q8SyMMNCMchKPcnPA0BtuH/preview">
            </iframe>
                  </a>
                  
                </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6 className={classes.cardCategory}>US Citizenship</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Early America Questions
                    </a>
                  </h3>
                </CardBody>
              </Card>
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                  <iframe width="100%" height="400"
            src="https://drive.google.com/file/d/14npSOjxpUzturMUKWdDqk8MIdDxtNxfI/preview">
            </iframe>
                  </a>
                  
                </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6 className={classes.cardCategory}>US Citizenship</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Early America Question Answers
                    </a>
                  </h3>
                </CardBody>
              </Card>
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                  <iframe width="100%" height="400"
            src="https://drive.google.com/file/d/16yB1yS5ozRIqKj48pyNGX2wMBgSkn6Pk/preview">
            </iframe>
                  </a>
                  
                </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6 className={classes.cardCategory}>US Citizenship</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Early America Prompt
                    </a>
                  </h3>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 4 END */}
    </div>
  );
}

import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// sections of this Page
import SectionHeaders from "./Sections/SectionHeaders.js";
import SectionFeatures from "./Sections/SectionFeatures.js";
import SectionBlogs from "./Sections/SectionBlogs.js";
import SectionTeams from "./Sections/SectionTeams.js";
import SectionProjects from "./Sections/SectionProjects.js";
import SectionPricing from "./Sections/SectionPricing.js";
import SectionTestimonials from "./Sections/SectionTestimonials.js";
import SectionContacts from "./Sections/SectionContacts.js";

import sectionsPageStyle from "assets/jss/material-kit-pro-react/views/sectionsPageStyle.js";

const useStyles = makeStyles(sectionsPageStyle);

export default function SectionsPage() {
  
  const classes = useStyles();
  return (
    <div>
      <Header
        color="info"
        brand="English For Life"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
      />
      <div className={classes.main}>
        <SectionBlogs id="blogs" />
      </div>
      
    </div>
  );
}

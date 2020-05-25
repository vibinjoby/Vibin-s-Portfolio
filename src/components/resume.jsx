import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import HeadingComponent from "./headingComponent";
import Skills from "./skills";

const useStyles = makeStyles(theme => ({
  skill: {
    paddingTop: 60,
    paddingLeft: 300,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20
    }
  }
}));

export default function Resume() {
  const classes = useStyles();
  return (
    <div className={`root-background`}>
      <HeadingComponent header="MY SKILLS" />
      <div className={classes.skill}>
        <Skills />
      </div>
    </div>
  );
}

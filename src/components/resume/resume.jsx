import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import experience from "../../static/images/suitcase.png";
import education from "../../static/images/book.png";
import HeadingComponent from "../../commons/headingComponent";
import Skills from "./skills";
import StepperComp from "../../commons/stepperComp";
import myEducation from "../../config/myEducation.json";
import myExperience from "../../config/myExperience.json";

const useStyles = makeStyles(theme => ({
  skill: {
    paddingTop: 60,
    paddingLeft: 300,
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
      <HeadingComponent header="RESUME" />
      <div className={classes.skill}>
        <span
          style={{
            color: "#FFFFFF",
            fontFamily: "Nunito,sans-serif",
            fontSize: "27.36px",
            fontWeight: "bolder"
          }}
        >
          <img alt="experience" src={experience} /> Working Experience
        </span>
        <StepperComp data={myExperience} />
      </div>
      <div className={classes.skill}>
        <span
          style={{
            color: "#FFFFFF",
            fontFamily: "Nunito,sans-serif",
            fontSize: "27.36px",
            fontWeight: "bolder"
          }}
        >
          <img alt="education" src={education} /> Educational Qualifications
        </span>
        <StepperComp data={myEducation} />
      </div>
    </div>
  );
}

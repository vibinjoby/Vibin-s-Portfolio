import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import experience from "../../static/images/suitcase.png";
import education from "../../static/images/book.png";
import HeadingComponent from "../commons/headingComponent";
import Skills from "./skills";
import StepperComp from "../commons/stepperComp";
import myEducation from "../../config/myEducation.json";
import myExperience from "../../config/myExperience.json";
import RouteContext from "../../context/routeContext";
import SignComp from "../commons/signComp";

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
  const routeContext = useContext(RouteContext);
  routeContext.onChange(2);
  return (
    <div className={`root-background`}>
      <SignComp />
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

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import StepperCompData from "./stepperCompData";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  totalPeriod: {
    color: "#a4acc4",
    fontSize: "1.14rem",
    lineHeight: "1.857rem",
    fontFamily: "Nunito,sans-serif"
  }
}));

export default function StepperComp(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={5}
        orientation="vertical"
        style={{ backgroundColor: "transparent" }}
      >
        {data.map((stepData, index) => (
          <Step key={index} active={true}>
            <StepLabel
              icon={<RadioButtonUncheckedIcon />}
              style={{ color: "#A4ACC4" }}
            >
              <Box className={classes.totalPeriod}>{stepData.totalPeriod}</Box>
            </StepLabel>
            <StepContent>
              <div className={classes.actionsContainer}>
                <div>
                  <StepperCompData data={stepData} />
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

import React, { useState } from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles(theme => ({
  period: {
    color: "#a4acc4",
    fontSize: "1.14rem",
    lineHeight: "1.857rem",
    fontFamily: "Nunito,sans-serif"
  },
  title: {
    color: "#037fff",
    fontSize: "1.43rem",
    lineHeight: "2.14rem",
    fontWeight: 700,
    marginBottom: 0,
    fontFamily: "Nunito,sans-serif"
  },
  name: {
    color: "#FFFFFF",
    fontSize: "1.14rem",
    lineHeight: "1.857rem",
    fontFamily: "Nunito,sans-serif"
  },
  description: {
    color: "#a4acc4",
    fontSize: "1.14rem",
    lineHeight: "1.857rem",
    fontFamily: "Nunito,sans-serif"
  }
}));

const StepperCompData = props => {
  const classes = useStyles();
  const [spacing] = useState(props.width !== "lg" ? 1 : 10);
  const { data } = props;
  return (
    <Grid container spacing={spacing}>
      <Grid item>
        <Box className={classes.period}>{data.period}</Box>
      </Grid>
      <Grid item md>
        <Box className={classes.title}>{data.title}</Box>
        <Box className={classes.name}>{data.name}</Box>
        <Box className={classes.description}>{data.description}</Box>
      </Grid>
    </Grid>
  );
};

export default withWidth()(StepperCompData);

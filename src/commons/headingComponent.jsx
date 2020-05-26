import React from "react";
import { Typography } from "antd";
import { Box, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  headerContent: {
    color: "#FFFFFF",
    fontFamily: "sans-serif",
    fontWeight: 700,
    paddingTop: 110,
    paddingLeft: 300,
    fontSize: "2.57rem",
    lineHeight: "3.28rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
      paddingRight: 40,
      paddingTop: 100,
      fontSize: "2.17rem",
      lineHeight: "2.857rem"
    }
  },
  progressBar: {
    width: 100,
    marginLeft: 300,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 20
    }
  }
}));

export default function HeadingComponent(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography className={classes.headerContent}>
        <Box>{props.header}</Box>
      </Typography>
      <LinearProgress
        variant="determinate"
        value={40}
        className={classes.progressBar}
      />
    </React.Fragment>
  );
}

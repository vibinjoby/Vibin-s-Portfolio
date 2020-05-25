import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Box, LinearProgress } from "@material-ui/core";
import { Typography } from "antd";
import Utils from "../commons/utils";

const useStyles = makeStyles(theme => ({
  root: {
    width: 350,
    minHeight: 250,
    backgroundColor: "#181d2b",
    borderWidth: 5,
    borderRadius: 1,
    borderColor: "#A4ACC4"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardHeader: {
    color: "#FFFFFF",
    fontFamily: "Nunito,sans-serif"
  },
  cardContent: {
    fontFamily: "Nunito,sans-serif",
    color: "#A4ACC4",
    fontSize: "18px",
    lineHeight: "1.8rem",
    fontWeight: 400
  },
  progressBar: {
    width: 100
  }
}));

export default function ServiceCard(props) {
  const classes = useStyles();
  const { details } = props;
  let icons = [];
  for (const [, value] of Object.entries(Utils())) {
    details.icons.map(icon => {
      if (value.name === icon) {
        icons.push(
          <img alt={value.name} src={value.icon} style={{ marginRight: 20 }} />
        );
      }
    });
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        {icons}
        <Typography variant="h3" component="h3">
          <Box className={classes.cardHeader}>{details.type}</Box>
        </Typography>
        <LinearProgress
          variant="determinate"
          value={0}
          className={classes.progressBar}
        />
        <br></br>
        <Typography>
          <Box className={classes.cardContent}>{details.description}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
}

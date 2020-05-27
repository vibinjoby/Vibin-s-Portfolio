import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  icon: {
    display: "inline-block",
    color: "#a4acc4",
    height: 70,
    width: 70,
    flex: "0 0 70px",
    maxWidth: 70,
    border: "1px solid #2e344e",
    textAlign: "center",
    lineHeight: "66px",
    marginRight: "20px"
  },
  label: {
    fontSize: "1.14rem",
    lineHeight: "1.857rem",
    fontFamily: "Nunito,sans-serif",
    color: "#fff"
  }
}));

export default function CustomContactComp(props) {
  const classes = useStyles();
  const { label, data, icon } = props;
  return (
    <Card
      style={{
        backgroundColor: "#191d2b",
        width: "80%",
        paddingLeft: 20
      }}
    >
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <span className={classes.icon}>{icon}</span>
          </Grid>
          <Grid item xs>
            <Typography variant="h6" className={classes.label}>
              {label}
            </Typography>
            <Typography style={{ color: "#a4acc4" }}>{data}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

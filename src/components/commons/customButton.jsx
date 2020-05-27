import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    background: "#037fff",
    color: "#fff"
  }
}));

export default function CustomButton(props) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      href="#contained-buttons"
      className={classes.button}
    >
      {props.message}
    </Button>
  );
}

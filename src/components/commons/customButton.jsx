import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    background: "#037fff",
    color: "#fff"
  }
}));

export default function CustomButton(props) {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      className={classes.button}
      onClick={() => props.onSubmit()}
    >
      {props.message}
    </Button>
  );
}

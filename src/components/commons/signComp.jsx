import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  signature: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontFamily: "Agustina-Signature"
  },
  greyColor: {
    color: "#A9A9A9"
  },
  sign: {
    marginTop: 50,
    float: "right"
  }
}));

export default function SignComp() {
  const classes = useStyles();
  return (
    <div className={classes.sign}>
      <span className={classes.greyColor}> &lt;&nbsp;</span>
      <span className={classes.signature}>Vibin E Joby</span>
      <span className={classes.greyColor}>/&gt;</span>
    </div>
  );
}

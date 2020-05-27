import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "200%"
  },

  cssLabel: {
    color: "green"
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`
    }
  },

  cssFocused: {
    color: "#a4acc4"
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "green !important"
  }
}));

export default function CustomTextField(props) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        id="standard-name"
        label={props.label}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        {...props}
        rows={7}
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused
          }
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline
          },
          inputMode: "numeric"
        }}
      />
    </div>
  );
}

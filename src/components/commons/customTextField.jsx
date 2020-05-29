import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    color: "#ffffff",
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    width: "200%",
    [theme.breakpoints.down("sm")]: {
      width: "90vw"
    }
  },

  cssLabel: {
    color: "green"
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`
    },
    color: "#fff"
  },

  cssFocused: {
    color: "#fff"
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "green !important"
  }
}));

export default function CustomTextField(props) {
  const classes = useStyles();

  const handleChange = e => {
    props.setvalue(e.currentTarget.value);
    props.errorVal(null);
  };
  return (
    <div>
      <TextField
        id="standard-name"
        label={props.label}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        onChange={handleChange}
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

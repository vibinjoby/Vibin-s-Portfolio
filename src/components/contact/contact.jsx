import React, { useContext, useState } from "react";
import HeadingComponent from "../commons/headingComponent";
import RouteContext from "../../context/routeContext";
import { makeStyles, Grid, Box } from "@material-ui/core";
import CustomTextField from "../commons/customTextField";
import CustomButton from "../commons/customButton";
import CustomContactComp from "../commons/customContactComp";
import SignComp from "../commons/signComp";
import Joi from "joi-browser";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: 300,
    paddingRight: 20,
    paddingTop: 20,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20
    }
  },
  margin: {
    margin: theme.spacing(1)
  },
  header: {
    color: "#fff",
    fontSize: "1.71rem",
    lineHeight: "2.43rem",
    paddingLeft: 300,
    paddingTop: 60,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20
    }
  },
  customContactComp: {
    color: "#fff",
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginLeft: 20
    }
  },
  errorAlert: {
    marginTop: 20,
    marginLeft: 307,
    width: "53%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 30,
      width: "128%"
    }
  }
}));

export default function Contact() {
  const schema = {
    name: Joi.string(),
    email: Joi.string(),
    subject: Joi.string(),
    message: Joi.string()
  };

  const classes = useStyles();
  const routeContext = useContext(RouteContext);
  routeContext.onChange(4);

  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const addressIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSendMail = () => {
    const { error } = Joi.validate(
      { name: name, email: email, subject: subject, message: message },
      schema
    );
    setErrorMessage(error ? error.details[0].message : null);
    if (!error)
      window.location = `mailto:vibin2joby@gmail.com?subject=${subject}&body=${message}`;
  };

  return (
    <div className={`root-background`}>
      <SignComp />
      <HeadingComponent header="CONTACT ME" />
      <Box className={classes.header}>Get In Touch</Box>
      <Grid container spacing={3} style={{ marginBottom: 100 }}>
        <Grid item md>
          <form className={classes.root}>
            <div>
              <CustomTextField
                label="Enter your name*"
                setvalue={setName}
                errorVal={setErrorMessage}
              />
              <CustomTextField
                label="Enter your email*"
                setvalue={setEmail}
                errorVal={setErrorMessage}
              />
              <CustomTextField
                label="Enter your subject*"
                setvalue={setSubject}
                errorVal={setErrorMessage}
              />
              <CustomTextField
                label="Enter your Message*"
                multiline
                setvalue={setMessage}
                errorVal={setErrorMessage}
              />
              <CustomButton message="SEND MAIL" onSubmit={handleSendMail} />
            </div>
          </form>
          {errorMessage && (
            <Alert severity="error" className={classes.errorAlert}>
              {errorMessage}
            </Alert>
          )}
        </Grid>
        <Grid item md={5} className={classes.customContactComp}>
          <CustomContactComp
            label="Phone"
            data="+1 437 246 1995"
            icon={phoneIcon}
          />{" "}
          <br />
          <br />
          <CustomContactComp
            label="Email"
            data="vibin2joby@gmail.com"
            icon={emailIcon}
          />{" "}
          <br />
          <br />
          <CustomContactComp
            label="Address"
            data="1, Massey square, East York, Toronto, Ontario"
            icon={addressIcon}
          />
        </Grid>
      </Grid>
    </div>
  );
}

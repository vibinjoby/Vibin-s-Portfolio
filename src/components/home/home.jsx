import React, { useContext } from "react";
import SnowStorm from "react-snowstorm";
import { Typography } from "antd";
import { Box, makeStyles } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../../index.css";
import RouteContext from "../../context/routeContext";
import SignComp from "../commons/signComp";

const useStyles = makeStyles(theme => ({
  rootHome: {
    height: "105vh",
    width: "100%",
    background: "#000000",
    marginTop: "-48px"
  },
  heading: {
    paddingTop: 250,
    textAlign: "center",
    paddingLeft: 200,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      paddingLeft: 40,
      paddingRight: 40
    }
  },
  dynamicHeaderFont: {
    fontSize: "3.2857rem",
    lineHeight: "4rem",
    fontFamily: "sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.98rem",
      lineHeight: "3.4rem"
    }
  },
  dynamicContentFont: {
    fontSize: "1.25rem",
    lineHeight: "2rem",
    fontFamily: "sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.08rem",
      lineHeight: "1.55rem"
    }
  },
  content: {
    textAlign: "center",
    marginLeft: 350,
    marginRight: 200,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 10,
      marginRight: 10
    }
  },
  signature: {
    color: "#FFFFFF",
    fontSize: "20px",
    fontFamily: "Agustina-Signature"
  },
  greyColor: {
    color: "#A9A9A9"
  },
  sign: {
    marginTop: 10,
    float: "right"
  }
}));

export default function Home() {
  const classes = useStyles();
  const routeContext = useContext(RouteContext);
  routeContext.onChange(0);
  return (
    <div className={classes.rootHome}>
      <SignComp />
      <div className={classes.heading}>
        <Typography align="center">
          <Box
            className={classes.dynamicHeaderFont}
            fontWeight="fontWeightBold"
            color="#FFFFFF"
          >
            Hi, I am <span style={{ color: "#037fff" }}>Vibin E Joby</span>
            <span className="wave-emoji">
              <img
                alt="👋"
                draggable="false"
                src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
              />
            </span>
          </Box>
        </Typography>
      </div>
      <div className={classes.content}>
        <Typography>
          <Box
            className={classes.dynamicContentFont}
            fontWeight="fontWeightBold"
            color="#A4ACC4"
          >
            Welcome to my Profile. I am a Fullstack developer. I develop
            softwares for both mobile and web with ease. Check out my portfolio
            to know more.
          </Box>
        </Typography>
        <LinkedInIcon
          style={{ color: "#FFFFFF", width: 40, height: 40, cursor: "pointer" }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/vibin-joby-0b763912a/",
              "_blank"
            )
          }
        />{" "}
        &nbsp;
        <FacebookIcon
          style={{ color: "#FFFFFF", width: 40, height: 40, cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.facebook.com/vibin.joby/", "_blank")
          }
        />{" "}
        &nbsp;
        <GitHubIcon
          style={{ color: "#FFFFFF", width: 37, height: 36, cursor: "pointer" }}
          onClick={() => window.open("https://github.com/vibinjoby", "_blank")}
        />
      </div>
      <SnowStorm excludeMobile={false} followMouse={false} snowStick={false} />
    </div>
  );
}

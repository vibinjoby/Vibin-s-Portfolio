import React, { useContext } from "react";
import HeadingComponent from "../commons/headingComponent";
import aboutMe from "../../static/images/about_me.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "antd";
import { Box } from "@material-ui/core";
import MyBio from "./myBio";
import Button from "@material-ui/core/Button";
import ServiceCard from "../../commons/serviceCard";
import myServices from "../../config/myServices.json";
import myBioData from "../../config/myBioData.json";
import { Carousel } from "antd";
import recommendations_1 from "../../static/images/recommendations_1.png";
import recommendations_2 from "../../static/images/recommendations_2.png";
import RouteContext from "../../context/routeContext";
import SignComp from "../commons/signComp";
import resume from "../../static/files/Vibin_Resume.pdf";

const useStyles = makeStyles(theme => ({
  header: {
    paddingLeft: 300,
    paddingTop: 50,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
      paddingRight: 40
    }
  },
  aboutImg: {
    width: 500,
    height: 400,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100%"
    }
  },
  aboutHeader: {
    color: "#FFFFFF",
    fontSize: "2rem",
    fontFamily: "Nunito,sans-serif",
    lineHeight: "2.7rem"
  },
  aboutContent: {
    fontFamily: "Nunito,sans-serif",
    color: "#A4ACC4",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "1.8rem"
  },
  table: {
    color: "#FFFFFFF",
    maxWidth: 400
  },
  services: {
    paddingTop: 50,
    paddingLeft: 300,
    paddingBottom: 20,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
      paddingRight: 40
    }
  },
  recommendations: {
    paddingTop: 50,
    paddingLeft: 300,
    paddingBottom: 20,
    paddingRight: 40,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
      paddingRight: 10
    }
  }
}));

export default function About(props) {
  const classes = useStyles();
  const routeContext = useContext(RouteContext);
  routeContext.onChange(1);
  return (
    <div className={`root-background`}>
      <SignComp />
      <HeadingComponent header="ABOUT ME" />
      <div className={classes.header}>
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item md>
            <img alt="about me" src={aboutMe} className={classes.aboutImg} />
          </Grid>
          <Grid item md>
            <Typography>
              <Box className={classes.aboutHeader}>
                I am{" "}
                <span style={{ color: "#037fff" }}>
                  {myBioData["Full Name"]}
                </span>
              </Box>
              <Box className={classes.aboutContent}>{myBioData.about}</Box>
            </Typography>
            <MyBio data={myBioData} /> <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.open(resume)}
            >
              DOWNLOAD CV
            </Button>
          </Grid>
        </Grid>
      </div>
      <HeadingComponent header="WHAT DO I OFFER?" />
      <div className={classes.services}>
        <Grid container spacing={3}>
          {myServices.map((serviceDetails, index) => (
            <Grid item key={index}>
              <ServiceCard details={serviceDetails} />
            </Grid>
          ))}
        </Grid>
      </div>
      <HeadingComponent header="WHAT DO PEOPLE HAVE TO SAY?" />
      <div className={classes.recommendations}>
        <Carousel autoplay>
          {[recommendations_1, recommendations_2].map(
            (recommendations, index) => (
              <div key={index}>
                <img
                  alt="Recommendations"
                  src={recommendations}
                  style={{ width: "100%" }}
                ></img>
              </div>
            )
          )}
        </Carousel>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import HeadingComponent from "../commons/headingComponent";
import { Grid, Card, makeStyles, Box } from "@material-ui/core";
import RouteContext from "../../context/routeContext";
import SignComp from "../commons/signComp";
import myPortfolio from "../../config/myPortfolio.json";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    paddingTop: 60,
    paddingLeft: 300,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20
    },
    margin: 0,
    width: "100%"
  },
  cardContainer: {
    width: "100%",
    background: "transparent"
  },
  imgTitle: {
    color: "#fff",
    fontFamily: "Nunito,sans-serif",
    fontSize: "1.43rem",
    lineHeight: "2.14rem"
  },
  imgDescription: {
    width: 300,
    color: "#a4acc4",
    fontFamily: "Nunito,sans-serif",
    fontSize: "1.14rem",
    lineHeight: "1.857rem"
  },
  portfolioImg: {
    width: 300,
    height: 300
  }
}));

const getImage = name => {
  return require("../../static/images/" + name);
};

export default function Portfolios() {
  const classes = useStyles();
  const routeContext = useContext(RouteContext);
  routeContext.onChange(3);
  return (
    <div className={`root-background`}>
      <SignComp />
      <HeadingComponent header="PORTFOLIOS" />
      <Grid container spacing={2} className={classes.gridContainer}>
        {myPortfolio.map(content => (
          <Grid item md>
            <Card className={classes.cardContainer}>
              <div className={classes.portfolioImage}>
                <img
                  src={getImage(content.image)}
                  alt="profile"
                  className={classes.portfolioImg}
                />
                <Box className={classes.imgTitle}>{content.title}</Box>
                <Box className={classes.imgDescription}>
                  {content.description}
                </Box>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

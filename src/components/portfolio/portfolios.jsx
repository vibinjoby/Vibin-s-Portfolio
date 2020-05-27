import React, { useContext } from "react";
import HeadingComponent from "../commons/headingComponent";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles
} from "@material-ui/core";
import myProfile from "../../static/images/profile.jpg";
import Typography from "@material-ui/core/Typography";
import RouteContext from "../../context/routeContext";
import SignComp from "../commons/signComp";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    paddingTop: 60,
    paddingLeft: 300,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20
    }
  },
  cardContainer: {
    width: 300,
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    }
  }
}));

export default function Portfolios() {
  const classes = useStyles();
  const routeContext = useContext(RouteContext);
  routeContext.onChange(3);
  const items = [, 2, 3, 4, 5, 6, 7];
  return (
    <div className={`root-background`}>
      <SignComp />
      <HeadingComponent header="PORTFOLIOS" />
      <Grid container spacing={1} className={classes.gridContainer}>
        {items.map(i => (
          <Grid item md>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  width="150"
                  image={myProfile}
                  title="My Profile"
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  My Work
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  My work done with react js
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

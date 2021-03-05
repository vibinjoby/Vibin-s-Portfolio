import React, { useContext } from "react";
import HeadingComponent from "../commons/headingComponent";
import { Grid, makeStyles, Box } from "@material-ui/core";
import RouteContext from "../../context/routeContext";
import SignComp from "../commons/signComp";
import myPortfolio from "../../config/myPortfolio.json";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingTop: 60,
    paddingLeft: 300,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
    },
    margin: 0,
    width: "100%",
  },
  imgTitle: {
    color: "#fff",
    fontFamily: "Nunito,sans-serif",
    fontSize: "1.43rem",
    lineHeight: "2.14rem",
  },
  imgDescription: {
    width: 300,
    color: "#a4acc4",
    fontFamily: "Nunito,sans-serif",
    fontSize: "1.14rem",
    lineHeight: "1.857rem",
  },
}));

const getImage = (name) => {
  return require("../../static/" + name);
};

export default function Portfolios() {
  const classes = useStyles();
  const routeContext = useContext(RouteContext);
  routeContext.onChange(3);
  return (
    <div className={`root-background`}>
      <SignComp />
      <HeadingComponent header="PORTFOLIOS" />
      <Grid container spacing={5} className={classes.gridContainer}>
        {myPortfolio.map((content, index) => (
          <Grid item md key={index}>
            <div className="pf-img-container">
              <img
                src={getImage("images/" + content.image)}
                alt="profile"
                style={{ width: 300, height: 300 }}
                className="portfolioImg"
              />
              <div className="overlay" style={{ width: 300, height: 300 }}>
                <div className="links">
                  <ul>
                    {content.sourceCode && (
                      <li>
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={content.sourceCode}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span className="tooltiptext">Source code</span>
                        </a>
                      </li>
                    )}
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={content.link}
                      >
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
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                        <span className="tooltiptext">See it in action</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content">
                <Box className={classes.imgTitle}>{content.title}</Box>
              </div>

              <Box className={classes.imgDescription}>
                {content.description}
              </Box>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

import React from "react";
import Grid from "@material-ui/core/Grid";
import { Box, LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Utils from "../../commons/utils";
import mySkills from "../../config/mySkills.json";

const useStyles = makeStyles(theme => ({
  skillLevel: {
    width: 500,
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  skillType: {
    fontWeight: 600,
    fontSize: "1.14rem",
    lineHeight: "1.857rem",
    color: "#FFFFFF"
  }
}));

const retrieveIconData = iconName => {
  const icons = Utils();
  for (const [, value] of Object.entries(icons)) {
    if (value.name === iconName) {
      return value.icon;
    }
  }
};

export default function Skills() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={5} style={{ margin: 0, width: "100%" }}>
        {mySkills.map(skill => (
          <Grid item key={skill.skillName}>
            <Box className={classes.skillType}>{skill.skillName}</Box>
            <Grid container>
              <Grid item>
                <Box className={classes.skillType}>{skill.skillLevel}%</Box>
              </Grid>
              <Grid item>
                <img
                  src={retrieveIconData(skill.skillIcon)}
                  alt={skill.skillIcon}
                />
              </Grid>
            </Grid>

            <LinearProgress
              variant="determinate"
              value={skill.skillLevel}
              className={classes.skillLevel}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

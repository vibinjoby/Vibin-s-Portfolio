import React, { useState } from "react";
import { Drawer, Avatar, Divider } from "antd";
import "antd/dist/antd.css";
import {
  List,
  MenuItem,
  ListItemText,
  makeStyles,
  Box
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import myPhoto from "../static/images/profile.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  sideBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  showSideBar: {
    display: "block"
  },
  menuIc: {
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  },
  active: {
    background: "#037fff"
  },
  listItem: {
    "&:hover": {
      background: "blue !important"
    }
  },
  dividerColor: {
    width: 30,
    background: "#A4ACC4"
  }
}));

export default function NavBarComponent() {
  const [mask, setMask] = useState(false);
  const [visible, setVisible] = useState(true);
  const [navSelected, setNavSelected] = useState(0);
  const classes = useStyles();

  const showDrawer = () => {
    setVisible(true);
    setMask(true);
  };
  const hideDrawer = () => {
    setVisible(false);
  };
  const onClickItem = index => {
    if (mask) hideDrawer();
    setNavSelected(index);
  };
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        className={classes.menuIc}
        onClick={showDrawer}
      >
        <MenuIcon style={{ color: "#FFFFFF" }} />
      </IconButton>
      <Drawer
        mask={mask}
        onClose={hideDrawer}
        placement="left"
        closable={false}
        visible={visible}
        key="left"
        className={mask ? classes.showSideBar : classes.sideBar}
        bodyStyle={{ background: "#181d2b" }}
      >
        <Avatar
          alt="vibin_pic"
          src={myPhoto}
          style={{
            height: 200,
            width: 200
          }}
        />

        <Divider className={classes.dividerColor} />
        <List>
          {["HOME", "ABOUT", "RESUME", "PORTFOLIOS", "CONTACT"].map(
            (text, index) => (
              <Link key={index} to={`/${text.toLowerCase()}`}>
                <MenuItem
                  onClick={() => onClickItem(index)}
                  className={
                    navSelected === index ? classes.active : "listItem"
                  }
                  style={{ textAlign: "center" }}
                >
                  <ListItemText>
                    <Box
                      fontFamily="sans-serif"
                      style={
                        navSelected === index
                          ? {
                              color: "#FFFFFF"
                            }
                          : { color: "#A4ACC4" }
                      }
                    >
                      {text}
                    </Box>
                  </ListItemText>
                </MenuItem>
              </Link>
            )
          )}
        </List>
        <Divider classes={{ root: classes.dividerColor }} />
      </Drawer>
    </>
  );
}

import React from "react";
import { AppBar, Button, Toolbar, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const headerData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];
const useStyles = makeStyles(() => ({
  header: {
    position: "sticky",
    zIndex: "90",
    left: "0",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFFFF",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "20px",
    fontSize: "15px",
    color: "#FFFFFF",
    marginLeft: "10px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
const Header = () => {
  const classes = useStyles();
  const kgerLogo = (
    <Typography variant="h6" component="h1" className={classes.logo}>
      kgerio
    </Typography>
  );
  const getMenuButtons = () => {
    return headerData.map(({ label, href }) => {
      return (
        <Button
          key={label}
          href={href}
          color="inherit"
          className={classes.menuButton}
        >
          {label}
        </Button>
      );
    });
  };
  return (
    <AppBar className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {kgerLogo}
          </Grid>
          <Grid item xs={4}>
            {getMenuButtons()}
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

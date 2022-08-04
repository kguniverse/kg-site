import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import Header from "../src/components/header";
import { Landing } from "../src/components/home/landing";
import { makeStyles } from "@mui/styles";
import { Divider } from "@mui/material";

const useStyles = makeStyles({
  body: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
});
const Home: NextPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Header />
      <Landing />
      <Container></Container>
    </div>
  );
};

export default Home;

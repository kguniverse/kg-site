import { Box, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import BgPic from "/public/bg.png";

const useStyles = makeStyles({
  landing: {
    mb: 4,
    color: "#fff",
    position: "relative",
    top: "0",
    height: "100vh",
    width: "100%",
    alignItems: "center",
    objectFit: "fill",
  },
  coverImage: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
    // position: "relative",
  },
  coverContent: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    alignItems: "center",
    display: "flex",
    position: "absolute",
    top: 0,
    zIndex: "auto",
    width: "100%",
    height: "100%",
  },
});
export function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.landing}>
      <Box component="img" className={classes.coverImage} src="/bg.png"></Box>
      <Box className={classes.coverContent}>
        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
          <br />
          <br />
          Hello My Friend!
        </Typography>
      </Box>
    </div>
  );
}

import * as React from "react";
import type { NextPage } from "next";
import { Container, Box, Grid, Paper } from "@mui/material";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import { data } from "../src/api/data";
import { Description } from "../src/components/about/description";
import Header from "../src/components/header";
import { Education } from "../src/components/about/education";
import { Experience } from "../src/components/about/experience";
import { Skills } from "../src/components/about/skills";
import { Honor } from "../src/components/about/honor";

const About: NextPage = () => {
  const { name, contact, education, experience, skills, honor } = data;
  return (
    <Container maxWidth="xl">
      <Header />
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "2rem",
        }}
      >
        <Grid item xs={3}>
          <Paper>
            <Description name={name} contact={contact} />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper>
            <Education education={education} />
          </Paper>
          <Paper>
            <Experience experience={experience} />
          </Paper>
          <Paper>
            <Skills skills={skills} />
          </Paper>
          <Paper>
            <Honor honor={honor} />
          </Paper>
        </Grid>
      </Grid>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Copyright />
      </Box>
    </Container>
  );
};

export default About;

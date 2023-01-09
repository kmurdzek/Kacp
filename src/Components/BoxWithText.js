import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Image } from "mui-image";
import Image1 from "../static/ruauto.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
  margin: 20,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column"
}));

export default function BoxWithText() {
  const text =
    "I was a member of the RU Autonomous team during my time at university. RU Autonomous competes in the AUVSI SUAS competition, which simulates search and rescue operations using autonomous drones. The competition presents various challenges for participating teams, including navigating to specific points automatically, capturing images, recognizing targets, working with other systems, and delivering objects through the air. It was a challenging and rewarding experience to be a part of this team and work on developing solutions to these complex problems.";
  return (
    <Grid
      container
      sx={{
        padding: 0,
        marginBottom: 10,
        paddingBottom: 6,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: "2%"
      }}
    >
      <Grid item sm={6}>
        <Image
          src={Image1}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "2%",
            padding: 1
          }}
        />
      </Grid>
      <Grid
        item
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column"
        }}
      >
        <Item>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            RU Autonomous
          </Typography>
          <Typography
            variant="body1"
            style={{
              display: "flex"
            }}
            gutterBottom
          >
            {text}
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
}

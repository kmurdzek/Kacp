import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Image } from "mui-image";
import { red } from "@mui/material/colors";
import Image1 from "../static/ruauto.png";
export default function BoxWithText() {
  const text =
    "I was a member of the RU Autonomous team during my time at university. RU Autonomous competes in the AUVSI SUAS competition, which simulates search and rescue operations using autonomous drones. The competition presents various challenges for participating teams, including navigating to specific points automatically, capturing images, recognizing targets, working with other systems, and delivering objects through the air. It was a challenging and rewarding experience to be a part of this team and work on developing solutions to these complex problems.";
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        flexGrow: 1,
        justifyContent: "center"
      }}
    >
      <Grid
        container
        spacing={2}
        xs={12}
        sx={{
          padding: 0,
          marginBottom: 10,
          paddingBottom: 6,
          paddingLeft: 6,
          paddingRight: 6,
          borderRadius: "2%"
        }}
      >
        <Grid item xs={12} sm={6}>
          <Image
            src={Image1}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "2%"
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
              display: "flex",
              justifyContent: "center",
              alignContent: "center"
            }}
            gutterBottom
          >
            {text}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

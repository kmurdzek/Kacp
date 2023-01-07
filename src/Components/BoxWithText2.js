import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Image } from "mui-image";
import { red } from "@mui/material/colors";
import Image1 from "../static/IMG_5938.jpg";
import Image2 from "../static/robofront.jpg";
export default function BoxWithText() {
  const text =
    "I was a member of the RU Autonomous team at my university for three years. RU Autonomous competed in the AUVSI SUAS competition, which simulates search and rescue operations using autonomous drones. The competition presents various challenges for participating teams, including navigating to specific points automatically, capturing images, recognizing targets, working with other systems, and delivering objects through the air. It was a challenging and rewarding experience to be a part of this team and work on developing solutions to these complex problems.";
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <Grid container spacing={2} xs={11} sx={{ padding: 2 }}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
            South River Robotics Mentor | FRC 4573
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Image
            src={Image2}
            style={{
              width: "75%",
              height: "auto",
              borderRadius: "2%"
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Image
            src={Image1}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "2%"
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

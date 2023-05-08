import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import JavascriptIcon from "@mui/icons-material/Javascript";
import Button from "@mui/material/Button";
export default function ProjectSolo(props) {
  return (
    <Grid
      item
      container
      sx={{
        background: "linear-gradient(to bottom right, #71FACA, #B1CEFF )",
        borderRadius: "2%",
        marginLeft: 3,
        marginBottom: 3,
        maxWidth: 450,
        maxHeight: "auto",
        paddingBottom: 1,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      }}
    >
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {props.project.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ whiteSpace: "pre-line" }}
            gutterBottom
          >
            {props.project.description}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" sx={{ fontWeight: "bold" }} gutterBottom>
            Languages & Tools
          </Typography>
          <Typography variant="body2" gutterBottom>
            {props.project.techStack}
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Button onClick={() => window.open(props.project.url)}>
          <LaunchIcon sx={{ color: "black" }} />
        </Button>
      </Grid>
    </Grid>
  );
}

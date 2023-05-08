import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Image1 from "../static/IMG_2241.JPG";
import Image2 from "../static/IMG_0305.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import "./css/headBox.css";
export default function HeadBox() {
  return (
    <React.Fragment>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            backgroundImage: `url(${Image1})`,
            backgroundSize: "cover",
            padding: "12%",
            maxHeight: "100%"
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
              marginBottom: 2
            }}
          >
            <Grid key="Avatar" item sx={{ padding: "8%" }}>
              <Avatar
                alt="Remy Sharp"
                src={Image2}
                sx={{
                  alignItems: "center",
                  width: 200,
                  height: 200
                }}
              />
            </Grid>

            <Grid
              item
              sx={{
                width: 400,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                opacity: 0.9,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "2%",
                padding: "1%",
                margin: "auto"
              }}
            >
              <div style={{ margin: "auto" }}>
                <Typography className="typing" variant="h5" gutterBottom>
                  Hi, I'm Kacper
                </Typography>
              </div>

              <Typography
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  color: "white",
                  fontSize: 18
                }}
                variant="body1"
                gutterBottom
              >
                &emsp;I'm a recent graduate from Rutgers University with a
                Bachelor of Science in Computer Science. As a student, I
                developed a passion for problem-solving, start-ups, and software
                development. I'm constantly seeking new challenges and ways to
                improve my skills, and I'm excited to see where my career will
                take me. Below you'll find a variety of projects I've worked on
                and my experience.
              </Typography>
              <Grid
                item
                sx={{
                  padding: "2%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Button
                  onClick={() => window.open("https://github.com/kmurdzek")}
                >
                  <GitHubIcon sx={{ marginRight: 4, color: "white" }} />
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/kacper-murdzek-a018811aa"
                    )
                  }
                >
                  <LinkedInIcon sx={{ marginRight: 4, color: "white" }} />
                </Button>
                <Button
                  onClick={() =>
                    window.open("mailto:kacper.murdzek@rutgers.edu")
                  }
                >
                  <EmailIcon sx={{ marginRight: 4, color: "white" }} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
}

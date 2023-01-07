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
            marginTop: 10,
            flexDirection: "column",
            backgroundImage: `url(${Image1})`,
            borderRadius: "2%",
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
              height: 500,
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
                opacity: 0.8,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                borderRadius: "2%",
                padding: "2%",
                margin: "auto"
              }}
            >
              <div style={{ margin: "auto" }}>
                <Typography className="typing" variant="h5" gutterBottom>
                  Hi, I'm Kacper
                </Typography>
              </div>

              <Typography
                style={{ color: "white", fontSize: 18 }}
                variant="body1"
                gutterBottom
              >
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur,
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

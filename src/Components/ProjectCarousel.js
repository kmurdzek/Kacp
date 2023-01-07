import ProjectSolo from "./ProjectSolo.js";
import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const project = {
  python: [
    {
      name: "Path Replanning",
      description:
        "Developed multiple variations of the A* search algorithm to find the shortest path through a maze for an agent unaware of the state of the maze aside from its adjacent cells.\n\nConsistently recomputed the path with updated knowledge of the maze to handle blocked cells and optimize the search.",
      techStack: "Python",
      url: ""
    },

    {
      name: "Load Balancing DNS",
      description:
        "Implemented load balancing system for DNS servers, including client, root server (RS), and two DNS servers (TS1 and TS2)\n\nRoot server (RS) implemented recursive query resolution, with the ability to handle responses or errors from TS1 and TS2 and relay them to the client as necessary",
      techStack: "Python",
      url: ""
    },
    {
      name: "Reliable Data Sender",
      description:
        "Implemented a reliable sender using an unreliable UDP socket\nImplement reliability techniques such as stop and wait and cumulative-ACK-based selective repeat\nTested reliability by ensuring the receiver's version of the file matched the sender's version",
      techStack: "Python",
      url: ""
    },
    {
      name: "HTTP Server with Authentication",
      description:
        "Implemented an HTTP server that serves secret user data and authenticates access through user name and password or cookies\nUsed the HTTP protocol and built simple versions of authentication mechanisms to render browser-readable data",
      techStack: "Python",
      url: ""
    },
    {
      name: "Machine Learning Model Design",
      description:
        "Designed and tested three classifiers: Naive Bayes, Perceptron, and MIRA\nUsed scanned handwritten digit images and face images with detected edges as data sets\nmplemented Perceptron algorithm using distinct pixels as features and training model through multiple iterations\nImplemented Naive Bayes algorithm using each pixel as a distinct feature and calculating joint probabilities for test images\nmplemented MIRA algorithm, a modified version of the Perceptron algorithm with improved accuracy, using scaling of features to adjust weights",
      techStack: "Python",
      url: ""
    }
  ],
  java: [
    {
      name: "Travel Reservation System",
      description:
        "Developed an online travel reservation system that leveraged a relational database system to support various operations, including flight booking, schedule management, and user information management.",
      techStack: "java",
      url: ""
    },
    {
      name: "Stock Analysis App",
      description:
        "Developed a financial application that presents daily trending stocks and enables users to access critical data for informed investment decisions.\nImplemented HTTP protocol and utilized the Yahoo Finance API to request and parse JSON objects, storing and displaying the data in the user interface.",
      techStack: "java",
      url: ""
    }
  ],
  c: [
    {
      name: "Travel Reservation system",
      description: "askdsdsa",
      techStack: "c",
      url: ""
    }
  ],
  js: [
    {
      name: "Travel Reservation system",
      description: "askdsdsa",
      techStack: "js",
      url: ""
    }
  ]
};
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Space Grotesk, sans-serif",
      textTransform: "none"
    }
  },
  palette: {
    primary: {
      main: "#a1c4fd"
    },
    secondary: {
      main: "#f7ffb6"
    }
  }
});
export default function ProjectCarousel() {
  const [selected, setSelected] = React.useState(0);
  const [showMore, setShowMore] = React.useState(0);
  const handleClick = (event, index) => {
    setShowMore(0);
    setSelected(index);
  };
  const show = () => {
    if (showMore === 1) setShowMore(0);
    else setShowMore(1);
  };
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: "2%",
            marginBottom: 10
          }}
          xs={11}
        >
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: "2%",
              marginBottom: 4
            }}
          >
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button
                selected={selected === 0}
                onClick={event => handleClick(event, 0)}
                color={selected === 0 ? "secondary" : "primary"}
              >
                All
              </Button>
              <Button
                selected={selected === 1}
                onClick={event => handleClick(event, 1)}
                color={selected === 1 ? "secondary" : "primary"}
              >
                Python
              </Button>
              <Button
                selected={selected === 2}
                onClick={event => handleClick(event, 2)}
                color={selected === 2 ? "secondary" : "primary"}
              >
                Java
              </Button>
              <Button
                selected={selected === 3}
                onClick={event => handleClick(event, 3)}
                color={selected === 3 ? "secondary" : "primary"}
              >
                Javascript/React/Node
              </Button>
              <Button
                selected={selected === 4}
                onClick={event => handleClick(event, 4)}
                color={selected === 4 ? "secondary" : "primary"}
              >
                C
              </Button>
            </ButtonGroup>
          </Grid>
          {selected === 0 || selected === null
            ? showMore === 0
              ? Object.keys(project).map(key => {
                  return <ProjectSolo key={key} project={project[key][0]} />;
                })
              : Object.keys(project).map(key => {
                  return project[key].map(proj => {
                    return <ProjectSolo key={proj.name} project={proj} />;
                  });
                })
            : null}

          {selected === 1
            ? showMore === 0
              ? project["python"].slice(0, 3).map(proj => {
                  return <ProjectSolo key={proj.name} project={proj} />;
                })
              : project["python"].map(proj => {
                  return <ProjectSolo key={proj.name} project={proj} />;
                })
            : null}
          {selected === 2
            ? showMore === 0
              ? project["java"].slice(0, 3).map(proj => {
                  return <ProjectSolo key={proj.name} project={proj} />;
                })
              : project["java"].map(proj => {
                  return <ProjectSolo key={proj.name} project={proj} />;
                })
            : null}
          {selected === 3
            ? showMore === 0
              ? project["js"].slice(0, 3).map(proj => {
                  return <ProjectSolo key={proj.name} project={proj} />;
                })
              : project["js"].map(proj => {
                  return <ProjectSolo key={proj.name} project={proj} />;
                })
            : null}
          {selected === 4
            ? showMore === 0
              ? project["c"].slice(0, 3).map(proj => {
                  return <ProjectSolo key={proj.name} project={proj} />;
                })
              : project["c"].map(proj => {
                  return <ProjectSolo key={proj.name} project={proj} />;
                })
            : null}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: "2%",
              marginBottom: 4
            }}
          >
            <Button
              onClick={() => show()}
              variant={"contained"}
              color={"primary"}
            >
              {showMore === 0 ? "Show More" : "Show Less"}
              {showMore === 0 ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </Button>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

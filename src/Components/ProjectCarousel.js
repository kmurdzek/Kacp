import ProjectSolo from "./ProjectSolo.js";
import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./css/projectCarousel.css";
import Stack from "@mui/material/Stack";
const project = {
  python: [
    {
      name: "Path Replanning",
      description:
        "- Developed multiple variations of the A* search algorithm to find the shortest path through a maze for an agent unaware of the state of the maze aside from its adjacent cells.\n\n- Consistently recomputed the path with updated knowledge of the maze to handle blocked cells and optimize the search.",
      techStack: "Python",
      url: "https://github.com/kmurdzek/Trajectory-Replanning"
    },

    {
      name: "Load Balancing DNS",
      description:
        "- Implemented load balancing system for DNS servers, which included a client, root server , and two DNS servers \n\n- The root server implemented recursive query resolution, with the ability to handle responses or errors from the two DNS servers and relay them to the client as necessary.",
      techStack: "Python",
      url: "https://github.com/kmurdzek/LoadBalancingDNS"
    },
    {
      name: "Reliable Data Sender",
      description:
        "- Implemented a reliable sender using an unreliable UDP socket.\n\n- Implement reliability techniques such as stop and wait and cumulative-ACK-based selective repeat.\n\n- Tested reliability by ensuring the receiver's version of the file matched the sender's version.",
      techStack: "Python",
      url: "https://github.com/kmurdzek/ReliableCommunication"
    },
    {
      name: "HTTP Server with Authentication",
      description:
        "- Implemented an HTTP server that serves secret user data and authenticates access through user name and password or cookies.\n\n- Used the HTTP protocol and built simple versions of authentication mechanisms to render browser-readable data.",
      techStack: "Python",
      url: "https://github.com/kmurdzek/HTTPServer"
    },
    {
      name: "Machine Learning Model Design",
      description:
        "- Designed and tested three classifiers: Naive Bayes, Perceptron, and MIRA.\n\n- Used scanned handwritten digit images and face images with detected edges as data sets.\n\n- Implemented Perceptron algorithm using distinct pixels as features and training model through multiple iterations.\n\n- Implemented Naive Bayes algorithm using each pixel as a distinct feature and calculating joint probabilities for test images.\n\n- Implemented MIRA algorithm, a modified version of the Perceptron algorithm with improved accuracy, using scaling of features to adjust weights.",
      techStack: "Python",
      url: "https://github.com/kmurdzek/MachineLearningModels"
    }
  ],
  java: [
    {
      name: "Travel Reservation System",
      description:
        "- Developed an online travel reservation system that uses a relational database system to support various operations, including flight booking, schedule management, and user information management.",
      techStack: "Java, MySQL, JSP, Apache Tomcat, JDBC, HTML, CSS",
      url: "https://github.com/kmurdzek/Online-Travel-Reservation-System"
    },
    {
      name: "Stock Analysis App",
      description:
        "- Developed a financial application that presents daily trending stocks and enables users to access critical data for informed investment decisions.\n\n- Implemented HTTP protocol and utilized the Yahoo Finance API to request and parse JSON objects, storing and displaying the data in the user interface.",
      techStack: "Java, Android Studios",
      url: "https://github.com/kmurdzek/AndroidStockAnalyzerApp"
    },
    {
      name: "Restaurant Ordering System",
      description:
        "- Point of sale system built using Java to allow for a user to customize select menu options and generate orders and receipts.",
      techStack: "Java, JavaFX",
      url: "https://github.com/kmurdzek/RestaurantOrderingSystem"
    }
  ],
  c: [
    {
      name: "User Level Thread Library",
      description:
        "- Implemented a Uthreads library for the creation and management of lightweight, user-level threads, improving the performance and scalability of a wide range of applications.\n\n- Developed and implemented advanced scheduling algorithms such as preemptive shortest job first for improved efficiency in thread scheduling.\n\n- Improved flexibility in parallel programming, allowing developers to implement their own scheduling algorithms and thread management strategies.",
      techStack: "C",
      url: "https://github.com/scheng/uthreads"
    },
    {
      name: "Write Once File System",
      description:
        "- Designed and implemented a Write Once File System using a 4MB file, reading and writing the file to and from a buffer on mount and unmount, organized into 1024-byte blocks.\n\n- Designed metadata architecture that includes a super block, inode region, and memory region, containing crucial information such as the position of the inode region and memory region, number of free disk blocks, and size of the file system.\n\n- Implemented file management, reading, and writing to the file by taking input of file descriptor, pointer to buffer, and an integer specifying the number of bytes to read or write to the file. Additionally, it handles large file sizes and uses pnodes that contain pointers to other pnodes or data disk blocks.",
      techStack: "C",
      url: "https://github.com/scheng/ufilesys"
    },
    {
      name: "Plagiarism Checker",
      description:
        "- Used the pthread multithreading library to process data from files and directories specified by users.\n\n- It tokenizes and builds binary trees of the words in the files, stores file names along with the tree and updates the words' frequencies as they are inserted into the trees.\n\n- It computes the Jensen-Shannon divergence (JSD) between every combination of files by comparing their binary trees, the result is stored in a data structure along with the file names, and the final list of file combinations is sorted by JSD and printed to the terminal in descending order.",
      techStack: "C",
      url: "https://github.com/scheng/uthreads"
    },
    {
      name: "Server Communication",
      description:
        "- The server opens when running a command, followed by a port number. If the port number is already in use, the server will not be able to bind to it.\n\n- The server is capable of handling multiple clients that can send GET, SET, or DEL requests, and it maintains a binary tree of all valid keys and values. The command must be in all caps and followed by an integer that specifies the length of the input including newline characters, and then the input itself. If the input is incorrect in any way, error messages will be sent to the client and the connection will be closed.\n\n- The client that sends the request is granted exclusive access to the binary tree using pthread locks so that there will be no malformed entries when two clients try to access the tree at the same time.",
      techStack: "C",
      url: "https://github.com/kmurdzek/ServerCommunication"
    }
  ],
  js: [
    {
      name: "Simple Shopper",
      description:
        "- A recipe shopping web app that makes it easier and faster to shop for the ingredients you need. Used the Edamam and Kroger APIs to make it so you can search recipes and make shopping lists that show you where everything is in the store, how much it costs, and its code.\n\n- Added a rating system so people can rate and leave reviews on the recipes they make, giving feedback and suggestions to others.",
      techStack: "Javascript, React.js, Node.js, MySQL, UML",
      url: "https://github.com/kmurdzek/Simple-Shopper"
    },
    {
      name: "My Personal Website",
      description:
        "- I made this website to extend my resume so I can showcase some more of my projects and tell a little bit more about myself.\n\n- Feel free to use my website as a template for your own personal site by forking the Github repository linked. It is still a work in progress but nearly complete!",
      techStack: "React.Js, MaterialUI",
      url: "https://github.com/kmurdzek/Kacp"
    }
  ]
};
const theme = createTheme({
  typography: {
    allVariants: {
      textTransform: "none"
    }
  },
  palette: {
    primary: {
      main: "#B1CEFF"
    },
    secondary: {
      main: "#71FACA"
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
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                rowGap: "10px",
                flexWrap: "wrap",
                flexDirection: "row"
              }}
            >
              <Button
                variant="contained"
                aria-label="outlined primary button group"
                selected={selected === 0}
                onClick={event => handleClick(event, 0)}
                color={selected === 0 ? "secondary" : "primary"}
              >
                All
              </Button>
              <Button
                variant="contained"
                aria-label="outlined primary button group"
                selected={selected === 1}
                onClick={event => handleClick(event, 1)}
                color={selected === 1 ? "secondary" : "primary"}
              >
                Python
              </Button>
              <Button
                variant="contained"
                aria-label="outlined primary button group"
                selected={selected === 2}
                onClick={event => handleClick(event, 2)}
                color={selected === 2 ? "secondary" : "primary"}
              >
                Java
              </Button>
              <Button
                variant="contained"
                aria-label="outlined primary button group"
                selected={selected === 3}
                onClick={event => handleClick(event, 3)}
                color={selected === 3 ? "secondary" : "primary"}
              >
                Javascript/React/Node
              </Button>
              <Button
                variant="contained"
                aria-label="outlined primary button group"
                selected={selected === 4}
                onClick={event => handleClick(event, 4)}
                color={selected === 4 ? "secondary" : "primary"}
              >
                C
              </Button>
            </Stack>
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

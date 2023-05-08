import HeadBox from "./Components/HeadBox";
import ProjectCarousel from "./Components/ProjectCarousel";
import Typography from "@mui/material/Typography";
import BoxWithText from "./Components/BoxWithText2";
import ProjectImWorkingOn from "./Components/BoxWithText3";
import Image2 from "./static/robofront.jpg";
import Image1 from "./static/IMG_5938.jpg";
import Image3 from "./static/ruauto.png";
import Image4 from "./static/interviewlab.png";
import "./App.css";
function App() {
  const imageArr1 = [Image1, Image2];
  const imageArr2 = [Image3];
  const imageArr3 = [Image4];
  const mainText1 =
    "  As a programming mentor for the South River High School robotics team, I have the opportunity to teach students with little programming experience the principles of object-oriented programming using Java. I guide students in developing algorithms that allow the robot to operate autonomously, as well as integrating object tracking software through dedicated coaching sessions and collaborative effort. It has been a fulfilling experience to see the students grow and apply their newfound skills to program and operate the robot.";
  const title1 = "South River High School Robotics Mentor | FRC 4573";
  const mainText2 =
    "  I was a member of the RU Autonomous team during my time at university. RU Autonomous competes in the AUVSI SUAS competition, which simulates search and rescue operations using autonomous drones. The competition presents various challenges for participating teams, including navigating to specific points automatically, capturing images, recognizing targets, working with other systems, and delivering objects through the air. It was a challenging and rewarding experience to be a part of this team and work on developing solutions to these complex problems.";
  const mainText3 =
    "  Have you ever found yourself anxiously preparing for a job interview, unsure of the questions you might be asked? Or have you faced a HireVue interview, where you're expected to record your responses to questions with just 30 seconds of preparation? Interview Lab Co is here to help you confidently tackle these challenges.\n\n  Our innovative service leverages the power of GPT-4 to generate a customized list of interview questions based on the specific job position you're targeting. But we don't stop there - Interview Lab Co also tailors questions to match your resume and the job posting you're applying for, ensuring a truly personalized experience. \n\n  Once you receive your generated questions, simply record your answers and submit them for feedback. Our platform will then provide insightful and constructive feedback to help you refine your responses and ace that interview. With Interview Lab Co, you'll never feel unprepared for a job interview again.";
  const title3 = "Interview Lab Co";
  const title2 = "RU Autonomous";
  const textArr1 = [mainText1];
  const titleArr1 = [title1];
  const textArr2 = [mainText2];
  const titleArr2 = [title2];
  const textArr3 = [mainText3];
  const titleArr3 = [title3];
  var url = "https://interviewlabco.com";
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #D3EAE8, #F1F1E6)"
      }}
    >
      <header></header>

      <HeadBox />
      <Typography
        style={{ color: "#808080", padding: "4%" }}
        variant="h5"
        gutterBottom
        id="projects"
      >
        My Projects
      </Typography>
      <ProjectCarousel />
      <Typography
        style={{ color: "#808080", padding: "3%" }}
        variant="h5"
        gutterBottom
        id="experience"
      >
        What I'm Currently Working On
      </Typography>
      <ProjectImWorkingOn
        imageArr={imageArr3}
        textArr={textArr3}
        titleArr={titleArr3}
        url={url}
        opposite={0}
      />
      <Typography
        style={{ color: "#808080", padding: "3%" }}
        variant="h5"
        gutterBottom
        id="experience"
      >
        My Experience
      </Typography>
      <BoxWithText
        imageArr={imageArr2}
        textArr={textArr2}
        titleArr={titleArr2}
        opposite={0}
      ></BoxWithText>
      <BoxWithText
        imageArr={imageArr1}
        textArr={textArr1}
        titleArr={titleArr1}
        opposite={1}
      ></BoxWithText>
    </div>
  );
}

export default App;

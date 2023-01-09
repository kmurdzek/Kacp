import HeadBox from "./Components/HeadBox";
import ProjectCarousel from "./Components/ProjectCarousel";
import Typography from "@mui/material/Typography";
import BoxWithText from "./Components/BoxWithText2";
import ProjectImWorkingOn from "./Components/BoxWithText3";
import Image2 from "./static/robofront.jpg";
import Image1 from "./static/IMG_5938.jpg";
import Image3 from "./static/ruauto.png";
import Image4 from "./static/codeScreen.png";
import "./App.css";
function App() {
  const imageArr1 = [Image1, Image2];
  const imageArr2 = [Image3];
  const imageArr3 = [Image4];
  const mainText1 =
    "\tAs a programming mentor for the South River High School robotics team, I have the opportunity to teach students with little programming experience the principles of object-oriented programming using Java. I guide students in developing algorithms that allow the robot to operate autonomously, as well as integrating object tracking software through dedicated coaching sessions and collaborative effort. It has been a fulfilling experience to see the students grow and apply their newfound skills to program and operate the robot.";
  const title1 = "South River High School Robotics Mentor | FRC 4573";
  const mainText2 =
    "\tI was a member of the RU Autonomous team during my time at university. RU Autonomous competes in the AUVSI SUAS competition, which simulates search and rescue operations using autonomous drones. The competition presents various challenges for participating teams, including navigating to specific points automatically, capturing images, recognizing targets, working with other systems, and delivering objects through the air. It was a challenging and rewarding experience to be a part of this team and work on developing solutions to these complex problems.";
  const mainText3 =
    "\tI'm currently working on a project in Python that utilizes several functions to retrieve and process financial data, as well as train and evaluate a machine learning model for predicting future values.\n\n\tThe script takes a symbol for a specific financial asset (e.g. a stock, currency, commodity) as inputs, and retrieves historical financial data for that asset from “eodhistoricaldata” API. The retrieved data is then passed through a function which processes the data in some way (e.g. adding technical indicators, normalizing values). The processed data is then split into training and testing sets and used to train a machine learning model to make predictions about the future values of the asset. The model is then evaluated using the testing data.\n\n\tThis code could be useful for anyone interested in using machine learning techniques to make predictions about financial assets. My current goals for this project are to improve the accuracy of predictions on historical data so I could then apply the model to trade stocks in realtime using a brokerage API.";
  const title3 = "Stock Price Prediction using EOD Data and TensorFlow";
  const title2 = "RU Autonomous";
  const textArr1 = [mainText1];
  const titleArr1 = [title1];
  const textArr2 = [mainText2];
  const titleArr2 = [title2];
  const textArr3 = [mainText3];
  const titleArr3 = [title3];
  var url =
    "https://github.com/kmurdzek/Stock-Price-Prediction-using-EOD-Data-and-TensorFlow";
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

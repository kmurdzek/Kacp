import HeadBox from "./Components/HeadBox";
import ProjectCarousel from "./Components/ProjectCarousel";
import Typography from "@mui/material/Typography";
import BoxWithText from "./Components/BoxWithText";
import BoxWithText2 from "./Components/BoxWithText2";
import BoxWithText3 from "./Components/BoxWithText3";
function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,rgb(244,244,244) 0%,rgb(237,230,230) 93%)"
      }}
    >
      <header></header>
      <HeadBox />
      <Typography
        style={{ color: "#808080", padding: "6%" }}
        variant="h5"
        gutterBottom
      >
        My Projects
      </Typography>
      <ProjectCarousel />
      <Typography
        style={{ color: "#808080", padding: "6%" }}
        variant="h5"
        gutterBottom
      >
        Project I'm Currently Working On
      </Typography>
      <BoxWithText3 />
      <Typography
        style={{ color: "#808080", padding: "6%" }}
        variant="h5"
        gutterBottom
      >
        My Experience
      </Typography>
      <BoxWithText></BoxWithText>
      <BoxWithText2></BoxWithText2>
    </div>
  );
}

export default App;

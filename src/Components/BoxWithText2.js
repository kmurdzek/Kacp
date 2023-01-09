import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Image } from "mui-image";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

//individual unit control
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#E4F0FF",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  ...theme.typography.body2,
  padding: 20,
  color: "black",
  margin: 1,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column"
}));

export default function BoxWithText(props) {
  const imageArr = props.imageArr;
  const title = props.titleArr[0];
  const mainText = props.textArr;
  var opposite = props.opposite;
  let imageFunc = imageArr.map(img => {
    return (
      <Grid item key={img} sm={6}>
        <Image
          src={img}
          style={{
            width: "100%",
            height: "85%",
            borderRadius: "2%",
            maxWidth: "700px",
            maxHeight: "700px"
          }}
        />
      </Grid>
    );
  });
  let textFunc = mainText.map(text => {
    return (
      <Grid
        item
        key={text}
        sm={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <Item>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 10
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ whiteSpace: "pre-wrap" }}
            variant="body1"
            gutterBottom
          >
            {text}
          </Typography>
        </Item>
      </Grid>
    );
  });
  return (
    //whole unit control
    <Grid
      container
      sx={{
        background: "linear-gradient(to bottom, #00C3A0, #00D4B4)",
        padding: 4,
        marginBottom: 10,
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      {opposite === 1 ? textFunc : imageFunc}

      {opposite === 1 ? imageFunc : textFunc}
    </Grid>
  );
}

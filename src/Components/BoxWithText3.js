import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Image } from "mui-image";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LaunchIcon from "@mui/icons-material/Launch";
import Button from "@mui/material/Button";

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

export default function ProjectImWorkingOn(props) {
  const imageArr = props.imageArr;
  const title = props.titleArr[0];
  const mainText = props.textArr;
  var url = props.url;
  var opposite = props.opposite;
  let imageFunc = imageArr.map(img => {
    return (
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          maxWidth: "100%",
          maxHeight: "85%"
        }}
        key={img}
        sm={12}
        md={6}
      >
        <Image
          src={img}
          sx={{
            objectFit: "cover",
            borderRadius: "2%"
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
        sm={12}
        md={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <Item>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
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
              <Button
                sx={{
                  marginLeft: "auto",
                  "&:hover": { backgroundColor: "transparent" }
                }}
                onClick={() => window.open(url)}
              >
                <LaunchIcon sx={{ color: "black" }} />
              </Button>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            sx={{ whiteSpace: "pre-wrap" }}
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #00C3A0, #00D4B4)",
        padding: 4,
        marginBottom: 10
      }}
    >
      <Grid
        container
        spacing={2}
        margin={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "1100px"
        }}
      >
        {opposite === 1 ? textFunc : imageFunc}

        {opposite === 1 ? imageFunc : textFunc}
      </Grid>
    </div>
  );
}

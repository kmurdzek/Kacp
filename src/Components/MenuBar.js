import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const pages = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" }
];
const theme = createTheme({
  typography: {
    allVariants: {
      textTransform: "none",
      fontFamily: "Nanum Gothic"
    }
  },
  palette: {
    primary: {
      main: "#A5ABBD"
    },
    secondary: {
      main: "#F1F1E6"
    }
  }
});

function ResponsiveAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "hidden", md: "flex" } }}>
              {pages.map(page => (
                <Button
                  key={page.name}
                  href={page.href}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Arial"
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;

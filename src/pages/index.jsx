import React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Projects from "../components/Projects";

let darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});
darkTheme = responsiveFontSizes(darkTheme);

const IndexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Projects />
    </ThemeProvider>
  );
};

export default IndexPage;

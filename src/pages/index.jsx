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
import { Technologies } from "../components/Technologies";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
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
      <Technologies />
    </ThemeProvider>
  );
};

export default IndexPage;

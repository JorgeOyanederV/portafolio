import React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
      <h1>Hola</h1>
    </ThemeProvider>
  );
};

export default IndexPage;

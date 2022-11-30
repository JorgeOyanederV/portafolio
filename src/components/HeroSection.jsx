import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Social from "./Social";
import Zoom from "@mui/material/Zoom";
import CardMedia from "@mui/material/CardMedia";

const HeroSection = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => setShouldShow(true), []);

  return (
    <Paper id="about" sx={{ height: "90vh" }} position="relative">
      <CardMedia
        component="img"
        alt="Mountains"
        height="100%"
        width="100%"
        image="https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80"
        position="absolute"
        zindex={0}
        sx={{ position: "absolute" }}
      />
      <Box
        sx={{
          bgcolor: "rgba(0,0,0,0.4)",
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 1,
        }}
      ></Box>
      <Container
        maxWidth="md"
        sx={{ position: "relative", height: "100%", zIndex: 3 }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component="h1" variant="h3">
                Hola, mi nombre es Jorge Oyaneder, soy desarrollador web.
              </Typography>
              <Typography variant="h5">
                Desarrollo paginas web, aplicaciones web e interfaces de
                usuario.
              </Typography>
              <Box my={2}>
                <Button
                  href="mailto:joyaneder1996@gmail.com"
                  variant="outlined"
                  color="secondary"
                >
                  Contactame!
                </Button>
              </Box>
            </Grid>
          </Zoom>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "block" },
              position: "relative",
            }}
          >
            <Social direction="column" />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default HeroSection;

import React from "react";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import boostrap from "../assets/bootstrap.png";
import css3 from "../assets/css3.png";
import express from "../assets/express.png";
import formik from "../assets/formik.png";
import gatsby from "../assets/gatsby.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import html5 from "../assets/html5.png";
import javascript from "../assets/javascript.png";
import material from "../assets/material.png";
import mongodb from "../assets/mongodb.png";
import nivo from "../assets/nivo.png";
import nodejs from "../assets/nodejs.png";
import npm from "../assets/npm.png";
import postgresql from "../assets/postgresql.png";
import postman from "../assets/postman.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const itemData = [
  {
    img: boostrap,
    title: "Boostrap",
    href: "https://getbootstrap.com/",
  },
  {
    img: css3,
    title: "CSS3",
  },
  {
    img: express,
    title: "ExpressJS",
    href: "https://expressjs.com/",
  },
  {
    img: formik,
    title: "Formik",
    href: "https://formik.org/",
  },
  {
    img: gatsby,
    title: "Gatsby",
    href: "https://www.gatsbyjs.com/",
  },
  {
    img: git,
    title: "Git",
    href: "https://git-scm.com/",
  },
  {
    img: github,
    title: "Github",
    href: "https://github.com/",
  },
  {
    img: html5,
    title: "HTML5",
  },
  {
    img: javascript,
    title: "Javascript",
    href: "https://www.javascript.com/",
  },
  {
    img: material,
    title: "Material UI",
    href: "https://mui.com/",
  },
  {
    img: mongodb,
    title: "MongoDB",
    href: "https://www.mongodb.com/home",
  },
  {
    img: nivo,
    title: "Nivo Charts",
    href: "https://nivo.rocks/",
  },
  {
    img: nodejs,
    title: "NodeJS",
    href: "https://nodejs.org/en/",
  },
  {
    img: npm,
    title: "npm",
    href: "https://www.npmjs.com/",
  },
  {
    img: postgresql,
    title: "PosgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    img: postman,
    title: "Postman",
    href: "https://www.postman.com/",
  },
  {
    img: python,
    title: "Python",
    href: "https://www.python.org/",
  },
  {
    img: react,
    title: "React",
    href: "https://reactjs.org/",
  },
  {
    img: redux,
    title: "Redux",
    href: "https://redux.js.org/",
  },
  {
    img: sass,
    title: "SASS",
    href: "https://sass-lang.com/",
  },
];

export const Technologies = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Paper id="technologies" position="relative" sx={{ padding: "4rem 0" }}>
      <Container maxWidth="md" sx={{ position: "relative", height: "100%" }}>
        <ImageList cols={4} gap={20}>
          <ImageListItem key="Subheader" cols={4} marginBottom={10}>
            <ListSubheader component="div" sx={{ borderRadius: 2 }}>
              <Typography variant="h3" sx={{ margin: "1rem 0" }}>
                Tecnologias
              </Typography>
            </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={matches ? 1 : 2}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: 10, objectFit: "contain" }}
              />
              <ImageListItemBar
                style={{ borderRadius: 10 }}
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  item.href ? (
                    <IconButton
                      href={item.href}
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  ) : null
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Paper>
  );
};

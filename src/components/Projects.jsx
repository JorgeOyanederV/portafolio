import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";

const projectsData = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    imageUrl:
      "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
    imageAlt: "Project 1 Image",
    tags: ["React.js", "Material-UI", "Gatsby.js"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://www.github.com",
      },
      {
        icon: OpenInNewIcon,
        href: "https://www.google.com",
      },
    ],
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    imageAlt: "Project 2 Image",
    imageUrl:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    tags: ["GraphQL", "Apollo Client", "Prisma", "Material-UI"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://www.github.com",
      },
      {
        icon: OpenInNewIcon,
        href: "https://www.google.com",
      },
    ],
  },
  {
    title: "Lorem ipsum dolor ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    imageAlt: "Project 3 Image",
    imageUrl:
      "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: ["React.js", "Node.js", "PostgreSQL", "Next.js"],
    links: [
      {
        icon: OpenInNewIcon,
        href: "https://www.google.com",
      },
    ],
  },
];

const TagsContainer = ({ tags, sxProp }) => {
  return (
    <Box sx={sxProp}>
      {tags.map((tag) => (
        <Chip
          sx={{ margin: "0 5" }}
          label={tag}
          variant="outlined"
          key={tag}
        ></Chip>
      ))}
    </Box>
  );
};

const Project = ({ title, description, imageUrl, tags, links }) => {
  return (
    <Grid item>
      <Card sx={{ display: "flex" }}>
        <Box>
          <CardContent >
            <Typography variant="h5" paragraph>
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <TagsContainer
              tags={tags}
              sxProp={{ display: { xs: "none", md: "block" } }}
            />
          </CardContent>
          <CardActions>
            <Box sx={{ mr: 5 }}>
              {links.map((linkItem) => (
                <IconButton href={linkItem.href} key={linkItem.href}>
                  <linkItem.icon />
                </IconButton>
              ))}
            </Box>
            <TagsContainer
              tags={tags}
              sxProp={{ display: { xs: "block", md: "none" } }}
            />
          </CardActions>
        </Box>
        <CardMedia
          component="img"
          image={imageUrl}
          sx={{ display: { xs: "none", md: "block" }, width: 180 }}
          alt=""
        />
      </Card>
    </Grid>
  );
};

const Projects = () => {
  return (
    <Container
      maxWidth="md"
      id="projects"
      sx={{ paddingTop: "10rem", paddingBottom: "2rem" }}
    >
      <Box mb={2}>
        <Typography variant="h4">Projects</Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        {projectsData.map((data) => (
          <Project {...data} key={data.title} />
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
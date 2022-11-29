import React, { useState } from "react";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";

const navigationLinks = [
  { name: "Sobre Mi", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "CV", href: "/resume.pdf" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <Avatar
            sx={{
              marginRight: "auto",
              color: "white",
              backgroundColor: "black",
              borderRadius: 0,
              height: 30,
              border: "2px solid gray",
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
            }}
          >
            P
          </Avatar>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navigationLinks.map((item) => (
              <Link
                mr={20}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { md: "none", sm: "block" } }}>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </ToolBar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                mr={20}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;

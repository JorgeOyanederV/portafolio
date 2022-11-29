import React from "react";
import GithubIcon from "@mui/icons-material/Github";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

const socialItems = [
  { icon: GithubIcon, url: "", name: "github" },
  { icon: TwitterIcon, url: "", name: "twitter" },
  { icon: LinkedInIcon, url: "", name: "linkedin" },
];

const Social = ({ direction }) => {
  return (
    <Grid
      container
      direction={direction || "row"}
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      {socialItems.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url}>
            <IconButton>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Social;
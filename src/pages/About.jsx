import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import image from "../assets/20220529_002724.jpg";
import { Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Instagram } from "@mui/icons-material";
import {
  flex,
  flexCenter,
  special,
  specialGit,
  specialIns,
  specialLnk,
  specialTwt,
  specialYtb,
} from "../styles/globalStyle";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": {
          mt: 8,
          width: 400,
          height: 400,
        },
      }}
    >
      <Paper sx={flex} elevation={24}>
        <img src={image} alt="" width={120} height={90} />
        <Typography sx={{ fontSize: "40px", color: "orange" }}>
          React Developer
        </Typography>
        <Typography sx={{ fontSize: "30px", color: "gray" }}>
          Cakirs 😍{" "}
        </Typography>
        <Box sx={flexCenter}>
          <Link target="blank" to="https://www.youtube.com/">
            <InstagramIcon sx={specialIns} />
          </Link>

          <Link target="blank" to="https://www.twitter.com/">
            <TwitterIcon sx={specialTwt} />
          </Link>
          <Link
            target="blank"
            to="https://www.linkedin.com/in/yunus-emre-%C3%A7ak%C4%B1r/"
          >
            <LinkedInIcon sx={specialLnk} />
          </Link>

          <Link target="blank" to="https://www.youtube.com/">
            <YouTubeIcon sx={specialYtb} />
          </Link>

          <Link target="blank" to="https://github.com/Cakir010">
            <GitHubIcon sx={specialGit} />
          </Link>
        </Box>
      </Paper>

    </Box>
  );
};

export default About;

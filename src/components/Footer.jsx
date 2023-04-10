import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "../styles/globalStyle";
import { Link } from "react-router-dom";

const Footer = () => {
  const FooterStyle = {
    width: "100%",
    padding: "10px",
    color: "white",
    height: "14vh",
    bgcolor: "orange",
  };
  return (
    <Container sx={FooterStyle} maxWidth="xl">
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item xs={12} textAlign={"center"}>
        <p>Front-End Developer </p>
        <small>
          Copyright ©{" "}
          <Link color="inherit" href="https://github.com/Cakir010" target="true">
            Cakir
          </Link>{" "}
          {new Date().getFullYear()}
        </small>{" "}
      </Grid>
    </Grid>
  </Container>
  );
};

export default Footer;

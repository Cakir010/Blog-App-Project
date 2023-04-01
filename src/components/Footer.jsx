import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        p: 2,
        position: "fixed",
        textAlign: "center",
        bottom: "0",
        bgcolor: "orange",
        width: "100%",
      }}
    >
      <Typography>Developed b FS Team</Typography>
      <Typography>
        Copyright ©{" "}
        <a target="blank" href="https://github.com/Cakir010">
          Cakirs{" "}
        </a>{" "}
        {""}2023
      </Typography>
    </Box>
  );
};

export default Footer;

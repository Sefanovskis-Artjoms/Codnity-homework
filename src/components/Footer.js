// src/components/Footer.js
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>
      <Typography variant="body1">Follow us on:</Typography>
      <IconButton href="https://facebook.com">
        <Facebook />
      </IconButton>
      <IconButton href="https://instagram.com">
        <Instagram />
      </IconButton>
      <Typography variant="body2">© 2024 Fishing Site</Typography>
    </Box>
  );
};

export default Footer;

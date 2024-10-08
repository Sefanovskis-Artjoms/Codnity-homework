// src/pages/Home.js
import React from "react";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to the Fishing Site
      </Typography>
      <Typography variant="body1">
        Learn about different fishes and the best weather conditions for
        fishing.
      </Typography>
    </div>
  );
};

export default Home;

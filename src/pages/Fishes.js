// src/pages/Fishes.js
import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";

const Fishes = () => {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    fetch("https://www.fishwatch.gov/api/species")
      .then((response) => response.json())
      .then((data) => setFishes(data));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Types of Fishes
      </Typography>
      <Grid container spacing={2}>
        {fishes.slice(0, 10).map((fish) => (
          <Grid item xs={12} sm={6} md={4} key={fish["Species Name"]}>
            <Card>
              <CardContent>
                <Typography variant="h5">{fish["Species Name"]}</Typography>
                <Typography>{fish["Scientific Name"]}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Fishes;

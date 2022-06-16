import React from "react";
import { Grid, Box, Typography, useTheme } from "@mui/material";

import crane from "../images/cranes.png";
import sun from "../images/sun.png";

const Home = () => {
  const theme = useTheme();

  return (
    <Grid container justifyContent="center" >
      <Grid item container direction="column" xs={3}>
        <Box>
          <img src={sun} alt="sun" style={{ width: "100%" }} />
        </Box>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xs={6}
        sx={{marginTop:'5rem'}}
      >
        <Grid item>
          <Typography
            variant="h1"
            sx={{ fontFamily: "Yuji Boku", marginTop: "10rem" }}
            align='center'
          >
            <span style={{ color: theme.palette.primary.main }}>D</span>aniel{" "}
            <span style={{ color: theme.palette.primary.main }}>K</span>raus
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" align="center">FRONT-END DEVELOPER</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" xs={3} sx={{marginTop:'5rem'}}>
        <Box>
          <img src={crane} alt="crane" style={{ width: "100%" }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;

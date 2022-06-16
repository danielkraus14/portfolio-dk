import React from "react";
import { Grid, Box, Typography, useTheme } from "@mui/material";

import './home.css';
import videoBG from '../assets/backgroundVideo.mp4';

const Home = () => {
  const theme = useTheme();

  return (
    <Grid container justifyContent="center" >
      <Grid item sx={{ backgroundPosition: 'top', backgroundAttachment: 'fixed'}}>
        <video src={videoBG} autoPlay loop muted />
      </Grid>
      {/* <Grid 
        item
        sx={{
          backgroundColor: theme.palette.common.white,
          opacity: 1,
          height: '90.2vh',
          justifyContent: 'center',
          alignItems: 'center',

          display: 'flex',
          width: '100%',
          zIndex: 10,
        }} 
        position="absolute"
      ></Grid> */}
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        position='absolute'
        sx={{height:'90.7vh', zIndex:15 , mixBlendMode: 'multiply', backgroundColor: theme.palette.common.black}}
      >
        <Grid item>
          <Typography
            variant="h1"
            sx={{ fontFamily: "Source Sans Pro", color: theme.palette.common.white, letterSpacing: 2.5, fontSize: '10rem', mixBlendMode: 'plus-lighter'  }}
            align='center'
          >
            <span style={{ color: theme.palette.primary.main}}>D</span>ANIEL{" "}
            <span style={{ color: theme.palette.primary.main}}>K</span>RAUS
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h2" align="center" sx={{
            fontFamily: 'Source Sans Pro',
            color: theme.palette.common.white,
            opacity: 1,
            fontSize: '8rem',
            margin: 0,
            padding: 'auto',
            marginTop: '5rem',
          }}>FRONT-END DEVELOPER</Typography>
        </Grid>
      </Grid>
      
    </Grid>
  );
};

export default Home;

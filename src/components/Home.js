import React, { Fragment } from "react";
import {
  Grid,
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CodeIcon from '@mui/icons-material/Code';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import "./home.css";
import videoBG from "../assets/backgroundVideo.mp4";

const CustomizedTitle = styled(Typography)(
  ({ theme }) => `
  scale: 1;
  transition: all 0.5s ease-out;
  


  :hover {
    transform: scale(1.1)
    
  }
`
);

const CustomizedButton = styled(Button)(
  ({ theme }) => `
  position: relative;
  display: inline-block;
  border-radius: 0;
  font-size: 1.2rem;
  transition: all 0.5s ease-out;

  :hover {
    color: ${theme.palette.common.white}
  }
`
);

const Home = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Grid container justifyContent="center" 
        sx={{
          overflow: 'hidden',
          height: matchesSM ? 'calc(100vh - 100px - 11rem)' : "calc(100vh - 100px - 11rem)",
          width: '100%'
        }}
      >
        <Grid item sx={{ backgroundPosition: "top", height: matchesSM ? 'calc(100vh - 100px - 11rem)' : "calc(100vh -100px - 2rem)" }}>
          <video src={videoBG} autoPlay loop muted />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          sx={{
            top: 0,
            height: matchesSM ? 'calc(100vh - 11rem)' : "calc(100vh  - 11rem)",
            lineHeight: "calc(100vh - 100px - 11rem)",
            mixBlendMode: "multiply",
            backgroundColor: theme.palette.common.black,
          }}
        >
            <Link to="/about">
              <CustomizedTitle
                variant="h1"
                sx={{
                  fontFamily: "Yuji Boku",
                  fontWeight: 800,
                  color: theme.palette.common.white,
                  letterSpacing: 2.5,
                  fontSize: matchesSM ? "4rem" : matchesMD ? "7rem" : "10rem",
                  padding: '0 1rem',
                }}
                align="center"
              >
                <span style={{ color: theme.palette.primary.main }}>D</span>
                ANIEL{" "}
                <span style={{ color: theme.palette.primary.main }}>K</span>RAUS
              </CustomizedTitle>
            </Link>

            <Typography
              variant="h2"
              align="center"
              sx={{
                fontFamily: "Source Sans Pro",
                color: theme.palette.common.white,
                opacity: 1,
                fontSize: matchesSM ? "4rem" : matchesMD ? "6rem" : "8rem",
                margin: 0,
                padding: "auto",
                marginTop: "5rem",
              }}
            >
              FRONT-END DEVELOPER
            </Typography>
        </Grid>
      </Grid>
      {/* GRID WITH BUTTONS */}
      <Grid
        item
        sx={{
          backgroundColor: theme.palette.common.black,
          zIndex: 25,
          padding: "2rem 0rem",
        }}
        container
        justifyContent="space-evenly"
        alignItems='center'
      >
        <Grid item sx={{ width: matchesSM ? '65px' : undefined, marginRight: matchesMD ? undefined : "2rem"}} alignSelf='center'>
          <Link to="/about">
            <CustomizedButton className="btn" variant="contained" color='primary' sx={{padding: matchesMD ? undefined : '10px 30px'}}>
            <PersonOutlineIcon sx={{verticalAlign: 'middle'}} /> { matchesSM ? '' :  'About Me'} 
              <span></span>
              <span></span>
              <span></span>
            </CustomizedButton>
          </Link>
        </Grid>
        <Grid item sx={{ width: matchesSM ? '65px' : undefined, marginRight: matchesMD ? undefined : "2rem"}} alignSelf='center'>
          <Link to="/portfolio">
            <CustomizedButton className="btn" variant="contained" color='primary' sx={{padding: matchesMD ? undefined : '10px 30px'}}>
            <CodeIcon sx={{verticalAlign: 'middle'}} /> { matchesSM ? '' :  'Portfolio'}
              <span></span>
              <span></span>
              <span></span>
            </CustomizedButton>
          </Link>
        </Grid>
        <Grid item sx={{ width: matchesSM ? '65px' : undefined, marginRight: matchesMD ? undefined : "2rem"}} alignSelf='center'>
          <Link to="/contact">
            <CustomizedButton className="btn" variant="contained" color='primary' sx={{ padding: matchesMD ? undefined : '10px 30px'}}>
            <ConnectWithoutContactIcon sx={{verticalAlign: 'middle'}} /> { matchesSM ? '' :  'Contact Me'} 
              <span></span>
              <span></span>
              <span></span>
            </CustomizedButton>
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          height: matchesMD ? "4.15rem" : "3.65rem",
        }}
        container
        justifyContent={matchesMD ? "center" : "right"}
      >
        <Typography variant={"h5"} align={matchesMD ? 'center' : 'right'} sx={{ color: theme.palette.common.white, width: "100vw",backgroundColor: theme.palette.common.black, padding: matchesSM ? '2rem' : '0 2rem' }}>
          "You have to make it happend" .-Denis Diterot
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default Home;

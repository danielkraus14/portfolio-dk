import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
  Box,
  styled,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";

import './about.css';
import avatarDk from "../assets/avatardk.png";
import avatarDk1 from "../assets/avatardk1.png";

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

const About = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ margin: "2rem 0" }}
      >
        <Grid
          container
          sx={{
            backgroundColor: theme.palette.common.white,
            opacity: 1,
            margin: "auto",
          }}
          xs={matchesLG ? 12 : 10}
          direction={matchesMD ? "column" : "row"}
        >
          <Grid
            item
            xs={4}
            alignItems="center"
            container
            justifyContent="center"
            sx={{ margin: "2rem 0" }}
          >
            <Box>
              <figure className="figure">
                <svg className="figure_svg" viewBox="0 0 600 600">
                  <path
                    className="fill_svg_background"
                    d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"
                  ></path>
                </svg>
              </figure>
            </Box>
              <Avatar
                alt="Daniel Kraus"
                src={avatarDk1}
                sx={{ width: 250, height: 250, zIndex: 2, position: 'absolute' }}
              />
          </Grid>

          <Grid
            item
            container
            direction="column"
            xs={8}
            sx={{ color: theme.palette.common.black}}
          >
            <Grid item sx={{ margin: "1rem 2rem" }}>
              <Typography
                variant="h3"
                sx={{ marginBottom: "1rem", letterSpacing: "0.2rem" }}
              >
                HELLO, I'M{" "}
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  DANIEL KRAUS
                </Box>
              </Typography>
              <Typography variant="h4">
                I AM A{" "}
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  WEB DEVELOPER
                </Box>
              </Typography>
            </Grid>
            <Grid item sx={{ margin: "1rem 2rem" }}>
              <Typography variant="subtitle1">Freelance Front End Developer, whit skills in React, HTML, CSS and JavaScript.</Typography>
            </Grid>
            <Grid item sx={{ margin: "1rem 2rem" }}>
              <Typography variant="subtitle1">Also worked with Laravel and with libraries as Material UI and Bootstrap.</Typography>
            </Grid>
            <Grid item sx={{ margin: "1rem 2rem" }}>
              <Typography variant="subtitle1">I think that my better virtue is the eager to learn...</Typography>
            </Grid>
            <Grid item alignSelf='center' sx={{margin: '2rem 0'}}>
              <Link to="/contact">
                <CustomizedButton
                  className="btn"
                  variant="contained"
                  color="primary"
                  sx={{ padding: matchesMD ? undefined : "10px 30px" }}
                >
                  Hire Me
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </CustomizedButton>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* ABOUT ME  */}
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{ margin: "2rem 0" }}
      >
        <Grid
          container
          xs={matchesLG ? 12 : 10}
          justifyContent={matchesMD ? "center" : "right"}
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{
              marginBottom: "1rem",
              marginTop: "1rem",
              marginRight: matchesMD ? null : "2rem",
            }}
          >
            About Me
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
            margin: "auto",
            maxWidth: "100vw",
          }}
          xs={matchesLG ? 12 : 10}
          direction={matchesMD ? "column" : "row"}
        >
          <Grid
            item
            xs={4}
            alignItems="center"
            container
            justifyContent="center"
            sx={{
              display: matchesMD ? undefined : "none",
              margin: matchesMD ? "2rem 0" : null,
            }}
          >
            <Avatar
              alt="Daniel Kraus"
              src={avatarDk}
              sx={{ width: 250, height: 250 }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            xs={8}
            sx={{ color: theme.palette.common.white, padding: '2rem 0' }}
          >
            <Grid item sx={{ margin: "1rem 2rem" }}>
              <Typography variant="subtitle1">
                I started this adventure thanks to some friends that taught me
                this beautiful world, and encouraged me to pursuit this dream
                even when I worked in a very different field.
              </Typography>
            </Grid>
            <Grid item sx={{ margin: "1rem 2rem" }}>
              <Typography variant="subtitle1">
                Thanks to my spirit of selftaught and their help, today I can do
                what I'm appasionate about and make real other people's ideas.
              </Typography>
            </Grid>
            <Grid item sx={{ margin: "1rem 2rem" }}>
              <Typography variant="subtitle1">
                I'm actually located at Misiones, Argentina.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
            alignItems="center"
            container
            justifyContent="center"
            sx={{ display: matchesMD ? "none" : undefined }}
          >
            <Avatar
              alt="Daniel Kraus"
              src={avatarDk}
              sx={{ width: 250, height: 250 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default About;

import React, {useEffect} from "react";
import {
  Grid,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CodeIcon from "@mui/icons-material/Code";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import "./home.css";

const CustomizedTitle = styled(Typography)(
  ({ theme }) => `
  scale: 1;
  transition: all 0.5s ease-out;
  


  :hover {
    
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

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
      <Grid
        container
        justifyContent="center"
        sx={{
          overflow: "hidden",
          /* height: matchesSM ? 'calc(100vh - 100px - 11rem)' : "calc(100vh - 100px - 11rem)", */
          width: "100%",
          backgroundColor: theme.palette.common.darkGray,
        }}
      >
        {/* <Grid item sx={{ backgroundPosition: "top", height: matchesSM ? 'calc(100vh - 100px - 11rem)' : "calc(100vh -100px - 2rem)" }}>
          <video src={videoBG} autoPlay loop muted />
        </Grid> */}
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            top: 0,
            minHeight: matchesSM ? "calc(100vh - 100px - 12rem)" : "calc(100vh - 100px - 11rem)",
          }}
        >
          <Link to="/about">
            <CustomizedTitle
              variant="h1"
              sx={{
                fontFamily: "'Otomanopee One', sans-serif",
                fontWeight: 800,
                color: theme.palette.common.white,
                letterSpacing: 2.5,
                fontSize: matchesSM ? "3.5rem" : "6rem",
                padding: "0 1rem",
              }}
              align="center"
            >
              <span style={{ color: theme.palette.primary.main }}>D</span>
              ANIEL <span style={{ color: theme.palette.primary.main }}>K</span>
              RAUS
            </CustomizedTitle>
          </Link>
          <Grid item>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontFamily: "'Otomanopee One', sans-serif",
              color: theme.palette.common.white,
              opacity: 1,
              fontSize: matchesSM ? "3.5rem" : "6rem",
              margin: 0,
              padding: "auto",
              marginTop: "5rem",
            }}
          >
            FRONT-END
          </Typography>
          </Grid>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontFamily: "'Otomanopee One', sans-serif",
              color: theme.palette.common.white,
              opacity: 1,
              fontSize: matchesSM ? "2.7rem" : "4.5rem",
              margin: 0,
              padding: "auto",
              marginTop: "2rem",
            }}
            className="loader"
          >
            DEVELOPER...
          </Typography>
        </Grid>
        {/* GRID WITH BUTTONS */}
        <Grid
          item
          sx={{
            backgroundColor: theme.palette.common.darkGray,
            zIndex: 25,
            padding: "2rem 0rem",
          }}
          container
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid
            item
            sx={{
              width: matchesSM ? "65px" : undefined,
              marginRight: matchesMD ? undefined : "2rem",
            }}
            alignSelf="center"
          >
            <Link to="/about">
              <CustomizedButton
                className="btn"
                variant="contained"
                color="primary"
                sx={{ padding: matchesMD ? undefined : "10px 30px" }}
              >
                <PersonOutlineIcon sx={{ verticalAlign: "middle" }} />{" "}
                {matchesSM ? "" : "About Me"}
                <span></span>
                <span></span>
                <span></span>
              </CustomizedButton>
            </Link>
          </Grid>
          <Grid
            item
            sx={{
              width: matchesSM ? "65px" : undefined,
              marginRight: matchesMD ? undefined : "2rem",
            }}
            alignSelf="center"
          >
            <Link to="/portfolio">
              <CustomizedButton
                className="btn"
                variant="contained"
                color="primary"
                sx={{ padding: matchesMD ? undefined : "10px 30px" }}
              >
                <CodeIcon sx={{ verticalAlign: "middle" }} />{" "}
                {matchesSM ? "" : "Portfolio"}
                <span></span>
                <span></span>
                <span></span>
              </CustomizedButton>
            </Link>
          </Grid>
          <Grid
            item
            sx={{
              width: matchesSM ? "65px" : undefined,
              marginRight: matchesMD ? undefined : "2rem",
            }}
            alignSelf="center"
          >
            <Link to="/contact">
              <CustomizedButton
                className="btn"
                variant="contained"
                color="primary"
                sx={{ padding: matchesMD ? undefined : "10px 30px" }}
              >
                <ConnectWithoutContactIcon sx={{ verticalAlign: "middle" }} />{" "}
                {matchesSM ? "" : "Contact Me"}
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
            height: matchesMD ? "5.45rem" : "3.65rem",
          }}
          container
          justifyContent={matchesMD ? "center" : "right"}
        >
          <Typography
            variant={"h5"}
            align={matchesMD ? "center" : "right"}
            sx={{
              color: theme.palette.common.white,
              width: "100vw",
              backgroundColor: theme.palette.common.darkGray,
              padding: "0 2rem",
            }}
          >
            "You have to make it happen" .-Denis Diderot
          </Typography>
        </Grid>
      </Grid>
  );
};

export default Home;

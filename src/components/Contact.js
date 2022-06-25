import React, {useState,useEffect,useRef,} from "react";
import {
  Grid,
  Typography,
  Box,
  useTheme,
  TextField,
  styled,
  useMediaQuery,
  Button,
  CircularProgress
} from "@mui/material";
import emailjs from '@emailjs/browser';

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

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

const Contact = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("sm"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      default:
        break;
    }
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e)
    emailjs.sendForm('service_9y4xcl3', 'template_2j3p93b', form.current, 'C3zm3OnvLg_CUQuwG')
      .then((result) => {
          setLoading(false)
          console.log(result);
      }, (error) => {
          console.log(error);
      });
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        padding: "2rem 0.5rem",
        backgroundColor: theme.palette.common.darkGray,
        minHeight: 'calc(100vh - 100px)'
      }}
    >
      <Grid container direction="column" alignItems="center">
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Otomanopee One', sans-serif",
            color: theme.palette.common.white,
            fontSize: matchesSM ? "3rem" : undefined,
          }}
        >
          C
          <Box
            display="inline-block"
            sx={{ color: theme.palette.primary.main }}
          >
            O
          </Box>
          NT
          <Box
            display="inline-block"
            sx={{ color: theme.palette.primary.main }}
          >
            A
          </Box>
          CT M
          <Box
            display="inline-block"
            sx={{ color: theme.palette.primary.main }}
          >
            E
          </Box>
        </Typography>

        {/* CONTAINER WITH ALL THE CONTENT */}
        <Grid
          container
          item
          direction="row"
          sx={{
            padding: "3rem 0",
          }}
        >
          {/* CONTAINER WITH FORM AND SUBMIT BUTTON */}
          <Grid container item md justifyContent="center">
            <form ref={form} onSubmit={sendEmail}>
              <Grid item>
                <Grid item sx={{ padding: "2rem 0" }}>
                  <TextField
                    variant="outlined"
                    color="secondary"
                    label="Name"
                    type="text"
                    name="user_name"
                    id="name"
                    sx={{ borderColor: theme.palette.secondary.dark }}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item sx={{ padding: "2rem 0" }}>
                  <TextField
                    variant="outlined"
                    color="secondary"
                    label="Email"
                    type="email"
                    name="user_email"
                    id="email"
                    value={email}
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item sx={{ padding: "2rem 0" }}>
                  <TextField
                    id="message"
                    label="Message"
                    name="message"
                    color="secondary"
                    multiline
                    rows={5}
                    placeholder="Add a message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" sx={{ margin: "2rem 0" }}>
                  <CustomizedButton
                    className="btn"
                    variant="contained"
                    type="submit"
                    sx={{
                      padding: matchesMD ? undefined : "10px 30px",
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.common.white,
                      width: '140px'
                    }}
                    disabled={
                      name.length === 0 ||
                      emailHelper.length !== 0 ||
                      email.length === 0 ||
                      message.length === 0
                    }
                  >
                    {loading ? <CircularProgress size={30} /> : 'Send'}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </CustomizedButton>
              </Grid>
            </form>
          </Grid>

          {/* CONTAINER COLUMN WITH INFORMATION AND SOCIAL MEDIA */}
          <Grid item container direction="column" md>
            <Grid
              container
              item
              justifyContent="center"
              sx={{ padding: "2rem 0", color: theme.palette.common.white }}
            >
              <Grid item sx={{ paddingRight: "2rem" }}>
                <LocationOnIcon sx={{ verticalAlign: "middle" }} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Misiones, Argentina</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              justifyContent="center"
              sx={{ padding: "2rem 0", color: theme.palette.common.white }}
            >
              <Grid item sx={{ paddingRight: "2rem" }}>
                <PhoneIphoneIcon sx={{ verticalAlign: "middle" }} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">(+54) 93755 526181 </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              item
              justifyContent="center"
              sx={{
                padding: "2rem 0 5rem 0",
                color: theme.palette.common.white,
                borderBottom: `2px solid ${theme.palette.common.darkWhite}`,
              }}
            >
              <Grid item sx={{ paddingRight: "2rem" }}>
                <MailOutlineIcon sx={{ verticalAlign: "middle" }} />
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  dkraushys@gmail.com{" "}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              sx={{ margin: "2rem -1rem", paddinRight: "3rem" }}
            >
              <ul className="social_media">
                <li>
                  <a
                    href="https://github.com/danielkraus14"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                      <GitHubIcon sx={{ fontSize: "40px" }} />
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/daniel-kraus-245ab1112/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span>
                      <LinkedInIcon sx={{ fontSize: "40px" }} />
                    </span>
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;

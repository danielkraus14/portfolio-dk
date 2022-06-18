import React from "react";
import {
  Grid,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import cranes from "../assets/cranes.png";
import mui from "../assets/material-ui.svg";
import js from "../assets/js.svg";
import react from "../assets/react.svg";
import html from "../assets/html5.svg";
import css from "../assets/css3.svg";
import bootstrap from "../assets/bootstrap.svg";
import marvel from "../assets/projects/marvel.png";
import arcDevelopment from "../assets/projects/arcDevelopment.PNG";
import eduWeb from "../assets/projects/eduWeb.PNG";
import cryptoQuoter from "../assets/projects/cryptoQuoter.PNG";
import weather from "../assets/projects/weather.PNG";
import carInsuranceQuoter from "../assets/projects/carInsuranceQuoter.PNG";
import budgetManager from "../assets/projects/budgetManager.PNG";
import petAppointmentManager from "../assets/projects/petAppointmentManager.PNG";
import clientsDB from "../assets/projects/clientsDB.PNG";

const PROJECTS = [
  {
    id: 1,
    url: "https://superb-sfogliatella-87dfb7.netlify.app/",
    site: "Arc Development",
    description: "Project made in a Material-UI course",
    technologies: [js, mui, react],
    preview: arcDevelopment,
  },
  {
    id: 2,
    url: "https://aquamarine-crisp-41d546.netlify.app",
    site: "Marvel Fan Page",
    description: "Project made practising css and html",
    technologies: [html, css],
    preview: marvel,
  },
  {
    id: 3,
    url: "https://fastidious-chaja-59d6ee.netlify.app",
    site: "Edu Web",
    description: "Project made practising css and bootstrap",
    technologies: [html, css, bootstrap],
    preview: eduWeb,
  },
  {
    id: 4,
    url: "https://loving-noether-06154f.netlify.app",
    site: "Cryptocurrency Quoter",
    description: "Project made in a JavaScript course",
    technologies: [html, css, js],
    preview: cryptoQuoter,
  },
  {
    id: 5,
    url: "https://inspiring-hopper-a4ce59.netlify.app",
    site: "Weather App",
    description: "Project made in a JavaScript course",
    technologies: [html, css, js],
    preview: weather,
  },
  {
    id: 6,
    url: "https://priceless-thompson-a9cc83.netlify.app",
    site: "Car Insurance Quoter",
    description: "Project made in a JavaScript course",
    technologies: [html, css, js],
    preview: carInsuranceQuoter,
  },
  {
    id: 7,
    url: "https://mystifying-feynman-9a14d2.netlify.app",
    site: "Budget Manager",
    description: "Project made in a JavaScript course",
    technologies: [html, css, js],
    preview: budgetManager,
  },
  {
    id: 8,
    url: "https://goofy-lovelace-49269c.netlify.app",
    site: "Pet Appointment Manager",
    description: "Project made in a React course",
    technologies: [html, css, js, react],
    preview: petAppointmentManager,
  },
  {
    id: 9,
    url: "https://flamboyant-babbage-479ae1.netlify.app",
    site: "Clients Data Base",
    description: "Project made in a React course",
    technologies: [html, css, js, react],
    preview: clientsDB,
  },
];
const CustomizedButton = styled(Button)(
  ({ theme }) => `
  position: relative;
  display: inline-block;
  border-radius: 0;
  font-size: 1.2rem;
  transform: scale(1);
  transition: all 0.5s ease-out;

  :hover {
    color: ${theme.palette.primary.dark};
    background-color: transparent;
    transform: scale(1.1);
}
`
);

const CustomizedCard = styled(Card)(
  ({ theme }) => `
  transform: scale(1);
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-out;

  :hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
}
`
);

const Portfolio = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container justifyContent="center" sx={{ padding: "0 0.5rem" }}>
      <Typography variant="h2">
        M
        <Box display="inline-block" sx={{ color: theme.palette.primary.main }}>
          Y
        </Box>{" "}
        W
        <Box display="inline-block" sx={{ color: theme.palette.primary.main }}>
          O
        </Box>
        RK
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}
        alignItems="center"
        justifyContent={matchesMD ? "center" : undefined}
      >
        {PROJECTS.map((project) => (
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            xs={12}
            sm={8}
            md={6}
            lg={4}
            key={project.id}
            sx={{ margin: matchesSM ? "2rem 1rem" : "2rem 0" }}
          >
            <CustomizedCard sx={{ maxWidth: 450 }}>
              <a href={project.url} target='_blank'>
                <CardMedia
                  component="img"
                  height="auto"
                  image={project.preview}
                  alt={project.site}
                />
              </a>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.site}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container justifyContent="space-between">
                  <CustomizedButton
                    size="small"
                    target="_blank"
                    href={project.url}
                    sx={{ marginLeft: "1.5rem" }}
                  >
                    See More
                  </CustomizedButton>
                  <Box sx={{ marginRight: "1.5rem" }}>
                    {project.technologies.map((technology) => {
                      return (
                        <Box
                          display="inline-block"
                          sx={{ padding: "0 0.3rem" }}
                        >
                          <img
                            src={technology}
                            alt="technology"
                            width="30px"
                            height="30px"
                          />
                        </Box>
                      );
                    })}
                  </Box>
                </Grid>
              </CardActions>
            </CustomizedCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Portfolio;

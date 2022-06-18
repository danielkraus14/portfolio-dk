import React from "react";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

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
    description: '',
    tecnologies: [js, mui, react],
    preview: arcDevelopment,
  },
  {
    id: 2,
    url: "https://aquamarine-crisp-41d546.netlify.app",
    site: "Marvel Fan Page",
    description: '',
    tecnologies: [html, css],
    preview: marvel,
  },
  {
    id: 3,
    url: "https://fastidious-chaja-59d6ee.netlify.app",
    site: "Edu Web",
    description: '',
    tecnologies: [html, css, bootstrap],
    preview: eduWeb,
  },
  {
    id: 4,
    url: "https://loving-noether-06154f.netlify.app",
    site: "Cryptocurrency Quoter",
    description: '',
    tecnologies: [html, css, js],
    preview: cryptoQuoter,
  },
  {
    id: 5,
    url: "https://inspiring-hopper-a4ce59.netlify.app",
    site: "Weather App",
    description: '',
    tecnologies: [html, css, js],
    preview: weather,
  },
  {
    id: 6,
    url: "https://priceless-thompson-a9cc83.netlify.app",
    site: "Car Insurance Quoter",
    description: '',
    tecnologies: [html, css, js],
    preview: carInsuranceQuoter,
  },
  {
    id: 7,
    url: "https://mystifying-feynman-9a14d2.netlify.app",
    site: "Budget Manager",
    description: '',
    tecnologies: [html, css, js],
    preview: budgetManager,
  },
  {
    id: 8,
    url: "https://goofy-lovelace-49269c.netlify.app",
    site: "Pet Appointment Manager",
    description: '',
    tecnologies: [html, css, js, react],
    preview: petAppointmentManager,
  },
  {
    id: 9,
    url: "https://flamboyant-babbage-479ae1.netlify.app",
    site: "Clients Data Base",
    description: '',
    tecnologies: [html, css, js, react],
    preview: clientsDB,
  },
];

const Portfolio = () => {
  return (
    <Grid container sx={{ height: "100vh", backgroundColor: "#000" }}>
      <Typography variant="h2">MY EXPERIENCE</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {PROJECTS.map((project) => (
          <Grid item xs={2} sm={4} md={4} key={project.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="auto"
                image={project.preview}
                alt={project.site}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.site}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" target='_blank' href={project.url}>See More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Portfolio;

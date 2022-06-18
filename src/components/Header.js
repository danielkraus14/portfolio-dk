import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useTheme, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import flowers_horizontal from "../assets/flowers-horizontal.png";
import "./header.css";

const pages = [
  { name: "Home", path: "/"},
  { name: "About", path: "/about"},
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];
const CustomizedButton = styled(Button)(
  ({ theme }) => `
  color: ${theme.palette.secondary.dark};
  font-size: 1.3rem;
  padding: 10px 15px;

  ::before {
    content: '';
    display: block;
    height: 5px;
    width: 100%;
    background-color: ${theme.palette.primary.dark};

    position: absolute;
    top: 0;
    width: 0%;

    transition: all ease-in-out 0.5s;
  }
  :hover::before {
    width: 100%;
}

  :hover {
    color: ${theme.palette.primary.dark};
    background-color: transparent;
  }
`,
);

const CustomizedMenuItem = styled(MenuItem)(
  ({ theme }) => `
  
  a {
    color: ${theme.palette.secondary.dark};
    padding: 10px 15px;
    transition: all ease-out 0.3s  !important;
  }
  
  
  a p {
    font-size: 1.3rem;
  }

  ::before {
    content: '';
    display: block;
    height: 100%;
    background-color: ${theme.palette.primary.dark};
    position: absolute;
    top: 0;
    width: 0px ;

    transition: all ease-in-out 0.3s;
  }
  :hover::before {
    width: 8px ;
}

  
  :hover {
    background-color: transparent;
    a {
      color: ${theme.palette.primary.dark};
    }
  }
`,
);


const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: theme.palette.common.white }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container alignItems="center">
            <Grid item sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img src={logo} width="100px" alt="logo" />
            </Grid>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Yuji Boku",
                fontWeight: 800,
                fontSize: "2rem",
                letterSpacing: ".3rem",
                color: theme.palette.common.red,
                textDecoration: "none",
              }}
            >
              DanielK
            </Typography>

            <Grid
              item
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: theme.palette.common.red,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <CustomizedMenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <NavLink to={page.path} >
                      <Typography textAlign="center">{page.name}</Typography>
                    </NavLink>
                  </CustomizedMenuItem>
                ))}
              </Menu>
            </Grid>
            <Grid
              item
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                alignSelf: "flex-end",
              }}
            >
              <img src={logo} width="100px" alt="logo" />
            </Grid>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Yuji Boku",
                fontSize: "2rem",
                fontWeight: 800,
                letterSpacing: ".3rem",
                color: theme.palette.common.red,
                textDecoration: "none",
              }}
            >
              DanielK
            </Typography>
            <Grid item container direction="row" md>
              <Grid
                item
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  mr: { xs: "0.5rem", md: "1rem" },
                  zIndex: 9999,
                }}
                justifyContent="flex-end"
              >
                {pages.map((page) => (
                  <NavLink key={page.name} to={page.path}>
                    <CustomizedButton
                      onClick={handleCloseNavMenu}
                    >
                      {page.name}
                    </CustomizedButton>
                  </NavLink>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
      <Box display="flex" justifyContent="flex-end">
        <img
          src={flowers_horizontal}
          className="flowers_horizontal"
          alt="flowers_horizontal"
        />
      </Box>
    </AppBar>
  );
};
export default Header;

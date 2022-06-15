import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material";

import logo from "../images/logo.png";
import flowers_horizontal from "../images/flowers-horizontal.png";

const pages = ["Me", "Tecnologies", "Contact"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const theme = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{backgroundColor: theme.palette.common.gray}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Grid container alignItems="center">
            <Grid item sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img src={logo} width="100px" />
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
                fontSize: '2rem',
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
                    color: theme.palette.common.red
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
                  display: { xs: "block", md: "none" }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
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
              <img src={logo} width="100px" />
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
                fontSize: '2rem',
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
                  zIndex: 9999
                }}
                justifyContent="flex-end"
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: theme.palette.secondary.main,
                      display: "block",
                      fontWeight: 600,
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
      <Box display="flex" justifyContent='flex-end'>
        <img src={flowers_horizontal} className="flowers_horizontal" alt="flowers_horizontal" />
      </Box>
    </AppBar>
  );
};
export default Header;

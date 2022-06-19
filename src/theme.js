import { createTheme } from "@mui/material/styles";

const mainRed = "#C82F2B";
const mainPink = "#DC98A3"
const mainYellow = "#F4C49E";
const mainGreen = "#4F817F";
const mainGray = "#FAF5ED";
const mainBrown = "#6A563A";
const white = "#FAFAFA";
const onix = '#10110F';
const darkGray = '#6B6B6B';

const theme = createTheme({
  palette: {
    primary: {
      main: mainRed,
    },
    secondary: {
        main: mainPink,
      },
    info: {
      main: mainYellow,
    },
    success: {
        main: mainGreen,
      },
    common:{
        red: mainRed,
        brown: mainBrown,
        white: white,
        gray: mainGray,
        darkGray: darkGray,
    },
    background: {
      default: white
    }
  },
  typography: {
    subtitle1:{
      fontSize: '1.3rem',
    },
    body2:{
      fontSize: '1rem',
    },
  }

});

export default theme;

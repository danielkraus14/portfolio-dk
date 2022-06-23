import { createTheme } from "@mui/material/styles";

const mainRed = "#C82F2B";
const mainPink = "#DC98A3"
const mainYellow = "#F4C49E";
const mainGreen = "#4F817F";
const mainGray = "#FAF5ED";
const mainBrown = "#6A563A";
const white = "#FAFAFA";
const darkGray = '#292929';
const darkRed = '#B00020';
const darkWhite = '#7E7E7E';
const darkPink = '#CF6679';

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
        darkRed: darkRed,
        darkWhite: darkWhite,
        darkPink: darkPink,
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
      fontSize: '1.3rem',
    },
  }

});

export default theme;

import { DefaultTheme } from "styled-components";

//named Colors

/*Primary*/
const blue = "#2ea3f2";

/*Secondary*/
const pink = "#ff0189";

/*Shades*/
const white = "#ffffff";
const black = "#212121";

const grey50 = "#fafafa";
const grey100 = "#f5f5f5";
const grey200 = "#eeeeee";
const grey300 = "#e0e0e0";
const grey400 = "#bdbdbd";
const grey500 = "#9e9e9e";
const grey600 = "#757575";
const grey700 = "#616161";
const grey800 = "#212121";

const lightTheme: DefaultTheme = {
  colors: {
    /*Surface*/
    surface: white,
    textOnSurface: black,

    /*Primary*/
    primary: blue,
    textOnPrimary: white,

    /*Secondary*/
    secondary: pink,
    textOnSecondary: white,

    /*Neutrals*/
    black,
    white,

    grey50,
    grey100,
    grey200,
    grey300,
    grey400,
    grey500,
    grey600,
    grey700,
    grey800
  },
  fonts: {
    family: "Open Sans, sans-serif",
    atImportUrl:
      "https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
  }
};

export { lightTheme };

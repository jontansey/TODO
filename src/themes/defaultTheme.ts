export interface DefaultTheme {
  colors: {
    /*Surface */
    surface: string;
    textOnSurface: string;

    /*Primary*/
    primary: string;
    textOnPrimary: string;

    /*Secondary*/
    secondary: string;
    textOnSecondary: string;

    /*Neutrals*/
    black: string;
    white: string;

    grey50: string;
    grey100: string;
    grey200: string;
    grey300: string;
    grey400: string;
    grey500: string;
    grey600: string;
    grey700: string;
    grey800: string;
  };
  fonts: {
    family: string;
    atImportUrl: string;
  };
}

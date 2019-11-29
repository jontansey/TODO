// component-lib/ThemeProvider.js
import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { lightTheme } from "./lightTheme";
import { GlobalStyle } from "./globalStyles";

interface IProps {
  theme?: DefaultTheme;
  children: React.ReactChild;
}

export const CustomThemeProvider: React.FC<IProps> = ({
  theme = lightTheme,
  children
}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

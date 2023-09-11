import React, { useMemo } from "react";

import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
  ThemeOptions
} from "@mui/material/styles";

import getTheme from "./getTheme";

export default function ThemeProvider({
  children,
  name
}: {
  children: React.ReactNode;
  name?: string;
}) {
  const { palette, typography, componentsOverride } = getTheme(name);

  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      palette,
      typography
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

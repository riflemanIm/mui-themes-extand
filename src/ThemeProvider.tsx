import React, { useMemo } from "react";

import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
  ThemeOptions,
  Theme,
} from "@mui/material/styles";

import getTheme from "./getTheme";

const makeCustomTheme = (name?: string): Theme => {
  const { palette, typography, componentsOverride } = getTheme(name);

  const themeOptions: ThemeOptions = { palette, typography };

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return theme;
};

export default function ThemeProvider({
  children,
  name,
  theme,
}: {
  children: React.ReactNode;
  name?: string;
  theme?: Theme;
}) {
  const customTheme = useMemo<Theme>(
    () => (name || !theme ? makeCustomTheme(name) : theme),
    [name, theme]
  );

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

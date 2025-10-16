import { Components, Theme } from "@mui/material/styles";
import createButtonOverrides from "@/themes/shared/overrides/button";

export default function Button(theme: Theme): Components<Theme> {
  const overrides = createButtonOverrides(theme);

  overrides.MuiButton.styleOverrides.root["&:hover"] = {
    border: 0,
  };

  overrides.MuiButton.styleOverrides.containedSecondary = {
    color: theme.palette.hero,
    background: theme.palette.bgLight.two,
    boxShadow: theme.palette.baseButton.shadow,
    "&:hover": {
      background: theme.palette.bgLight.one,
      boxShadow: "none",
    },
  };

  overrides.MuiButton.styleOverrides.textPrimary = {
    "&:hover": {
      background: "transparent",
      color: theme.palette.primary.dark,
    },
  };

  return overrides;
}

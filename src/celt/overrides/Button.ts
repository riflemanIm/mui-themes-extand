import { Components, Theme } from "@mui/material/styles";
import createButtonOverrides from "@/themes/shared/overrides/button";

export default function Button(theme: Theme): Components<Theme> {
  const overrides = createButtonOverrides(theme);

  overrides.MuiButton.styleOverrides.containedSecondary = {
    color: theme.palette.secondary.main,
    background: theme.palette.bgLight.one,
    boxShadow: theme.palette.baseButton.shadow,
    "&:hover": {
      background: theme.palette.bgLight.two,
      boxShadow: "none",
    },
  };

  overrides.MuiButton.styleOverrides.outlinedInfo = {
    color: theme.palette.info.main,
    backgroundColor: "#fff",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: theme.palette.info.dark,
    },
  };

  return overrides;
}

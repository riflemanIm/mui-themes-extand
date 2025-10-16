import { Components, Theme } from "@mui/material/styles";
import createButtonOverrides from "@/themes/shared/overrides/button";

export default function Button(theme: Theme): Components<Theme> {
  const overrides = createButtonOverrides(theme);

  overrides.MuiButton.styleOverrides.outlinedPrimary = {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  };

  return overrides;
}

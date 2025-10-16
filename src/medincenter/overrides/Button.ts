import { Components, Theme } from "@mui/material/styles";

import createButtonOverrides from "@/themes/shared/overrides/button";
import { ensureCssObject } from "@/themes/shared/overrides/utils";

export default function Button(theme: Theme): Components<Theme> {
  const overrides = createButtonOverrides(theme);
  const muiButton = overrides.MuiButton as NonNullable<typeof overrides.MuiButton>;
  const styleOverrides = (muiButton.styleOverrides = {
    ...(muiButton.styleOverrides ?? {}),
  }) as NonNullable<typeof muiButton.styleOverrides>;

  styleOverrides.containedSecondary = {
    ...ensureCssObject(styleOverrides.containedSecondary),
    color: theme.palette.hero,
    background: theme.palette.bgLight.one,
    boxShadow: theme.palette.baseButton.shadow,
    "&:hover": {
      background: theme.palette.bgLight.two,
      boxShadow: "none",
      color: theme.palette.primary.dark,
    },
  } as typeof styleOverrides.containedSecondary;

  return overrides;
}

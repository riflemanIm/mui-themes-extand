import { Components, Theme } from "@mui/material/styles";

import createButtonOverrides from "@/themes/shared/overrides/button";
import { ensureCssObject } from "@/themes/shared/overrides/utils";

export default function Button(theme: Theme): Components<Theme> {
  const overrides = createButtonOverrides(theme);
  const muiButton = overrides.MuiButton as NonNullable<typeof overrides.MuiButton>;
  const styleOverrides = (muiButton.styleOverrides = {
    ...(muiButton.styleOverrides ?? {}),
  }) as NonNullable<typeof muiButton.styleOverrides>;

  styleOverrides.outlinedPrimary = {
    ...ensureCssObject(styleOverrides.outlinedPrimary),
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  } as typeof styleOverrides.outlinedPrimary;

  return overrides;
}

import { Components, Theme } from "@mui/material/styles";

import createButtonOverrides from "@/themes/shared/overrides/button";
import { ensureCssObject } from "@/themes/shared/overrides/utils";

export default function Button(theme: Theme): Components<Theme> {
  const overrides = createButtonOverrides(theme);
  const muiButton = overrides.MuiButton as NonNullable<typeof overrides.MuiButton>;
  const styleOverrides = (muiButton.styleOverrides = {
    ...(muiButton.styleOverrides ?? {}),
  }) as NonNullable<typeof muiButton.styleOverrides>;

  styleOverrides.outlinedInfo = {
    ...ensureCssObject(styleOverrides.outlinedInfo),
    color: theme.palette.info.main,
    backgroundColor: "#fff",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#fff",
      color: theme.palette.info.dark,
    },
  } as typeof styleOverrides.outlinedInfo;

  return overrides;
}

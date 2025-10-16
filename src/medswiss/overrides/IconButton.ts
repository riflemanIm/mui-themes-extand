// ----------------------------------------------------------------------

import { Components, Theme } from "@mui/material/styles";

export default function IconButton(theme: Theme): Components<Theme> {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main,
          },
        },
      },
    },
  };
}

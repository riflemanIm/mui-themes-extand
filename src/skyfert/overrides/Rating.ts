// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Rating(theme: Theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0,
          },
        },
      },
    },
  };
}

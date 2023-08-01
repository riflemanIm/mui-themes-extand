// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Alert(theme: Theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        icon: {
          color: `${theme.palette.success.dark} !important`,
        },
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
        },
      },
    },
  };
}

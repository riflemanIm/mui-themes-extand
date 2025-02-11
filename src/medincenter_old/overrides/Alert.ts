// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Alert(theme: Theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4),
          },
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: `${theme.palette.warning.main} !important`,
          },
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: `${theme.palette.error.main} !important`,
          },
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: `${theme.palette.info.main} !important`,
          },
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark,
          },
        },
      },
    },
  };
}

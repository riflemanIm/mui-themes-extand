// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Alert(theme: Theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(1.5)}`,
          borderRadius: theme.spacing(2.5),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4.5),
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
            color: theme.palette.primary.main,
          },
        },
      },
    },
  };
}

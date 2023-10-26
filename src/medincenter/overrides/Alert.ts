// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function Alert(theme: Theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        icon: {
          fontSize: 28,
        },
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          icon: {
            color: theme.palette.warning.main,
          },
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          icon: {
            color: theme.palette.error.main,
          },
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          icon: {
            color: theme.palette.info.main,
          },
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          icon: {
            color: theme.palette.success.dark,
          },
        },
      },
    },
  };
}

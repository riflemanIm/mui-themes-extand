// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function Alert(theme: Theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          icon: {
            color: `${theme.palette.warning} !important`,
          },
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          icon: {
            color: `${theme.palette.error} !important`,
          },
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          icon: {
            color: `${theme.palette.info} !important`,
          },
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          icon: {
            color: `${theme.palette.success} !important`,
          },
        },
      },
    },
  };
}

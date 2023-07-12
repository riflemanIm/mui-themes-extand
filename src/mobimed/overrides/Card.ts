// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
        },
      },
    },
  };
}

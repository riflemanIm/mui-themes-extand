// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          backgroundSize: 'cover',
          boxSizing: 'border-box',
          boxShadow: theme.palette.shadows.card,
          transition: 'none',
        },
      },
    },
  };
}

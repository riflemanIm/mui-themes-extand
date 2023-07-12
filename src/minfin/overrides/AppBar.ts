// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none !important',
          background: `linear-gradient(139.78deg, ${theme.palette.gradients.one} 3.01%, ${theme.palette.gradients.two} 95.95%)`,
        },
      },
    },
  };
}

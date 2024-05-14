// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none !important',
          background: `background: linear-gradient(139.78deg, ${theme.palette.primary.main} 3.01%, #0B2660 95.95%)`,
        },
      },
    },
  };
}

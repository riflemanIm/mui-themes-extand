// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card,
        },
      },
    },
  };
}

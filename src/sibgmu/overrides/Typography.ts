// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function Typography(theme: Theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(2),
        },
        body2: {
          color: theme.palette.text.boby2,
        },

        caption: {
          fontSize: 14,
        },
        caption_date: {
          fontSize: 13,
        },

        subtitle2: {
          color: theme.palette.text.subtitle2,
        },
      },
    },
  };
}

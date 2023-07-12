// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function Rating(theme: Theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.dark,
          '& span > span': {
            top: 0,
            left: 0,
          },
        },
      },
    },
  };
}

// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function IconButton(theme: Theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& span > svg': {
            color: theme.palette.hero,
          },
        },
      },
    },
  };
}

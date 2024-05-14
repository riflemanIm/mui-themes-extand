import { Theme, alpha } from '@mui/material/styles';

export default function Input(theme: Theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          '&.Mui-selected': {
            color: theme.palette.text.primary,
          },
        },
      },
    },
  };
}

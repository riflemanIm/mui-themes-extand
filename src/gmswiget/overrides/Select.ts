import { Theme } from '@mui/material/styles';

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: theme.palette.bgLight.two,
          whiteSpace: 'break-spaces',
          fontSize: '0.83rem',
        },
      },
    },
  };
}

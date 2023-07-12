// ----------------------------------------------------------------------

import { Theme } from '@mui/material/styles';

export default function ToggleButton(theme: Theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: '0px 12px',
          border: `1px solid ${theme.palette.action.toggle1}`,
          width: '100%',
          height: 42,
          boxSizing: 'border-box',
          borderRadius: theme.spacing(0.6),
          textTransform: 'none',
          fontStyle: 'normal',
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          '&:hover': {
            color: theme.palette.action.toggle4,
            background: `${theme.palette.action.toggle2} !important`,
          },
          '&.Mui-selected': {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1,
          },
        },
      },
    },
  };
}

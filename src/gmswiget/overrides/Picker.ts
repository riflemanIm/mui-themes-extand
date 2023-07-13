import { Theme } from '@mui/material/styles';

export default function Picker(theme: Theme) {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          margin: 0,
          backgroundColor: 'transparent',
          width: 'auto',
          [theme.breakpoints.down('lg')]: {
            width: 290,
          },
        },
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 'auto',
          [theme.breakpoints.down('lg')]: {
            width: 290,
          },

          margin: 0,
        },
      },
    },
  };
}

import { Theme, alpha } from '@mui/material/styles';

export default function Input(theme: Theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: '1px solid rgb(196 196 196)',
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid rgb(97, 87, 255, 0.3)',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[500], 0.12),
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          '&:before': {
            borderBottomColor: alpha(theme.palette.grey[500], 0.48),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderRadius: theme.spacing(0.8),
          backgroundColor: 'transparent',
          '&.Mui-focused': {
            backgroundColor: '#fff',
          },
          '& fieldset': {
            borderColor: alpha(theme.palette.primary.light, 0.32),
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(theme.palette.primary.main, 0.2),
          },
          '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(theme.palette.primary.main, 0.2),
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main, // root border color
            borderWidth: 2,
          },
          '&.Mui-focused fieldset': {
            borderWidth: 2,
          },
        },
      },
    },
  };
}

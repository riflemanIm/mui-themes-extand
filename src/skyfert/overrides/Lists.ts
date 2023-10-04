// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Lists(theme: Theme) {
  return {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&$selected": {
            backgroundColor: "#F3F5FF !important",
            "&:focus": {
              backgroundColor: "#F3F5FF",
            },
          },
        },
        button: {
          "&:hover, &:focus": {
            backgroundColor: "#F3F5FF",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "inherit",
          minWidth: "auto",
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: theme.spacing(2),
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        // root: {
        //   marginTop: 0,
        //   marginBottom: 0,
        // },
        // multiline: {
        //   marginTop: 0,
        //   marginBottom: 0,
        // },
        primary: {
          fontWeight: 450,
        },
      },
    },
  };
}

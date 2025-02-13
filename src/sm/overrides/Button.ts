// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Button(theme: Theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,

          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",

          border: 0,
          "&:hover": {
            border: 0,
          },
          "&.Mui-disabled": {
            background: `${theme.palette.baseButton.bgColor} !important`,
            opacity: theme.palette.action.disabledOpacity,
            color: "#fff !important",
          },
          "&.Mui-select": {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd",
          },
        },

        containedPrimary: {
          color: "#fff",
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none",
          },
        },

        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.two,
          boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            background: theme.palette.bgLight.one,
            boxShadow: "none",
          },
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: "none",
          },
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: theme.palette.primary.dark,
          },
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          "&:hover": {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: "none",
          },
        },

        containedSuccess: {
          color: "#fff",
          backgroundColor: theme.palette.success.main,
          "&:hover": {
            backgroundColor: theme.palette.success.light,
            boxShadow: "none",
          },
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: theme.palette.warning.main,
          "&:hover": {
            backgroundColor: theme.palette.warning.light,
            boxShadow: "none",
          },
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: theme.palette.info.main,
          "&:hover": {
            backgroundColor: theme.palette.info.light,
            boxShadow: "none",
          },
        },
        textPrimary: {
          "&:hover": {
            background: "transparent",
            color: theme.palette.primary.dark,
          },
        },
      },
    },
  };
}

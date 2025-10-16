// ----------------------------------------------------------------------
import { Components, Theme } from "@mui/material/styles";

export default function AppBar(_theme: Theme): Components<Theme> {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: `linear-gradient(139.78deg, #FF7009 3.01%, #E66305 95.95%)`,
        },
      },
    },
  };
}

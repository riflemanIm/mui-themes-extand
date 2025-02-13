import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Backdrop(theme: Theme) {
  const varLow = alpha(theme.palette.grey[900], 0.92);
  const varHigh = alpha(theme.palette.grey[900], 0.9);

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: [
            `rgb(22,28,36)`,
            `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
          ],
          "&.MuiBackdrop-invisible": {
            background: "transparent",
          },
        },
      },
    },
  };
}

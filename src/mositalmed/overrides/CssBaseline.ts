import { Theme } from '@mui/material/styles';

export default function CssBaseline(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        *: {
          margin: 0;
          padding: 0;
          boxSizing: border-box;
        }
        html: {
          width: 100%;
          height: 100%;
          webkit-overflow-scrolling: touch;
        }
        body: {
          width: 100%;
          height: 100%;
          background-color:${theme.palette.background.default};
        }
        #root: {
          width: 100%;
          height: 100%;
        }
        img: {
          display: block;
          maxWidth: 100%;
        }
      `,
    },
  };
}

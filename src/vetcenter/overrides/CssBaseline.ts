import { Theme } from "@mui/material/styles";

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
        @font-face {
          font-family: 'Avenir Next Cyr';
          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);
          src: local('Avenir Next Cyr Regular'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),
            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');
          font-weight: normal;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    }
  };
}

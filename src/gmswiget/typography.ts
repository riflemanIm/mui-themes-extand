import { TypographyOptions } from '@mui/material/styles/createTypography';
import { pxToRem } from '../paletteFuncs';

const FONT_PRIMARY = 'Montserrat';

const typography: TypographyOptions = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: '1.8rem',
    fontWeight: 500,
  },
  h2: {
    fontSize: '1.6rem',
    fontWeight: 500,
  },
  h3: {
    fontSize: '1.4rem',
    fontWeight: 500,
  },
  h4: {
    fontSize: '1.2rem',
  },
  h5: {
    fontSize: '1.1rem',
  },
  h6: {
    fontSize: '0.8rem',
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: pxToRem(12),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(14),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(12),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(10),
  },

  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: pxToRem(12),
    //    textTransform: 'capitalize',
  },
};

export default typography;

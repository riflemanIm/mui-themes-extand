import { TypographyOptions } from "@mui/material/styles/createTypography";
import { pxToRem } from "../paletteFuncs";

const FONT_PRIMARY = "Avenir Next Cyr";

const typography: TypographyOptions = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500,
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500,
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500,
  },
  h4: {
    fontSize: "1.5rem",
  },
  h5: {
    fontSize: "1.285rem",
  },
  h6: {
    fontSize: "1.05rem",
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  // overline: {
  //   fontWeight: 500,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  //   letterSpacing: 1.1,
  //   textTransform: 'uppercase',
  // },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    //    textTransform: 'capitalize',
  },
};

export default typography;

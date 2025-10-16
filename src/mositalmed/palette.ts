import tinycolor from "tinycolor2";
import { GREY, createGradient } from "../paletteFuncs";
import { DARKEN_RATE, DARKER_RATE, LIGHTEN_RATE, LIGHTEREN_RATE } from "@/themes/shared/constants";
// ----------------------------------------------------------------------
const primary = "#AA9161";
const secondary = "#D0C8B5";
const warning = "#F57069";
const success = "#E3F8D2";
const info = "#B5A788";
const error = "#F57069";
const hero = "#6D0C8B5";

const PRIMARY = {
  lighter: tinycolor(primary).lighten(LIGHTEREN_RATE).toHexString(),
  main: primary,
  light: tinycolor(primary).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(primary).darken(DARKEN_RATE).toHexString(),
  darker: tinycolor(primary).darken(DARKER_RATE).toHexString(),
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  main: secondary,
  light: tinycolor(secondary).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(secondary).darken(DARKEN_RATE).toHexString(),
  contrastText: "#A2916A",
  darker: "#827657",
};

const INFO = {
  lighter: "#D0F2FF",
  main: info,
  light: tinycolor(info).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(info).darken(DARKEN_RATE).toHexString(),
  contrastText: "#fff",
  darker: "#04297A",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  main: success,
  light: tinycolor(success).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(success).darken(DARKEN_RATE).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D",
};

const WARNING = {
  lighter: "#FFF7CD",
  main: warning,
  light: tinycolor(warning).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(warning).darken(DARKEN_RATE).toHexString(),
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  main: error,
  light: tinycolor(error).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(error).darken(DARKEN_RATE).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  one: "#B5A788",
  two: "#AA9161",
};

const palette = {
  hero,
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,

  divider: GREY[500_24],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[500_80],
    disabled: GREY[400],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "#FFEED6",
    infoGadient: createGradient(INFO.lighter, INFO.light),
    success: "#FFE7CE",
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#A2916A",
    toggle2: "#F57069",
    toggle3: "#F2F2F1",
    toggle4: "#fff",
  },
  appBar: {
    background: PRIMARY.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff",
  },
  sideBar: {
    color: "#828383",
    colorLeft: "#F57069",
    colorHover: "#AA9161",
    colorActive: "#000000",
    bg: "#fff",
  },
  baseButton: {
    bgColor: "linear-gradient(163.61deg, #B5A788 3.01%, #AA9161 95.95%)",
    shadow: `0px 1px 4px ${tinycolor(secondary).setAlpha(0.3).toRgbString()}`,
  },
  bgLight: {
    one: "#F6F4F0",
    two: "#F2F2F1",
  },
  shadows: {
    card: "0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)",
  },
};

export default palette;

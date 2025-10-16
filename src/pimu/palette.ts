import tinycolor from "tinycolor2";
import { GREY, createGradient } from "../paletteFuncs";
import { DARKEN_RATE, DARKER_RATE, LIGHTEN_RATE, LIGHTEREN_RATE } from "@/themes/shared/constants";

// ----------------------------------------------------------------------
const primary = "#DB4141";
const secondary = "#F7BFBC";
const warning = "#F57069";
const success = "#FFC9AB";
const info = "#F2D0B2";
const error = "#802121";
const hero = "#B00C2F";

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
  contrastText: "#ccc",
  darker: "#E87780",
};

const INFO = {
  lighter: "#FCEDF2",
  main: info,
  light: tinycolor(info).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(info).darken(DARKEN_RATE).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC",
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
  one: "#EB323F",
  two: "#981127",
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
    info: "rgba(174 33 3, 0.4)",
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
    toggle1: PRIMARY.main,
    toggle2: PRIMARY.light,
    toggle3: "#FCEDF2",
    toggle4: "#fff",
  },
  appBar: {
    background: PRIMARY.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff",
  },
  sideBar: {
    color: "#DB4141",
    colorLeft: "#DB4141",
    colorHover: "#802121",
    colorActive: "#000",
    bg: "#fff",
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #EB323F 3.01%, #981127 95.95%)",
    shadow: `0px 1px 4px ${tinycolor(secondary).setAlpha(0.3).toRgbString()}`,
  },
  bgLight: {
    one: "#F4F4F4",
    two: "#FFEEEE",
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)",
  },
};

export default palette;

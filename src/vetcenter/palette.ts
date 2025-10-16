import tinycolor from "tinycolor2";
import { GREY, createGradient } from "../paletteFuncs";
import { DARKEN_RATE, DARKER_RATE, LIGHTEN_RATE, LIGHTEREN_RATE } from "@/themes/shared/constants";

// ----------------------------------------------------------------------
const primary = "#204568";
const secondary = "#4A6F93";
const warning = "#C76277";
const success = "#5CAA7F";
const info = "#BCC3D2";
const error = "#C76277";
const hero = "#426A90";

const PRIMARY = {
  lighter: tinycolor(primary).lighten(LIGHTEREN_RATE).toHexString(),
  main: primary,
  light: tinycolor(primary).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(primary).darken(DARKEN_RATE).toHexString(),
  darker: tinycolor(primary).darken(DARKER_RATE).toHexString(),
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#F6F4F0",
  main: secondary,
  light: tinycolor(secondary).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(secondary).darken(DARKEN_RATE).toHexString(),
  contrastText: "#ccc",
  darker: "#E87780",
};

const INFO = {
  lighter: "#F6F4F0",
  main: info,
  light: tinycolor(info).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(info).darken(DARKEN_RATE).toHexString(),
  contrastText: "#fff",
  darker: "#F7BFBC",
};

const SUCCESS = {
  lighter: "#F6F4F0",
  main: success,
  light: tinycolor(success).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(success).darken(DARKEN_RATE).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D",
};

const WARNING = {
  lighter: "#FEF1F0",
  main: warning,
  light: tinycolor(warning).lighten(LIGHTEN_RATE).toHexString(),
  dark: tinycolor(warning).darken(DARKEN_RATE).toHexString(),
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FEF1F0",
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
  one: "#073D5F",
  two: "#022D47",
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
    default: "#fff",
    neutral: GREY[200],
    warning: "#FEF1F0",
    error: "#FEF1F0",
    info: "#EDF7FC",
    infoGadient: createGradient(SECONDARY.light, SECONDARY.lighter),
    success: "#D9EFE2",
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],

    disabledBackground: "#F7F7F8",
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: hero,
    toggle2: tinycolor(hero).lighten(LIGHTEN_RATE).toHexString(),
    toggle3: "#F5F5F5",
    toggle4: "#fff",
  },
  appBar: {
    background: PRIMARY.main,
    iconColor: "rgba(255, 255, 255, 0.9) !important",
    color: "#fff",
  },
  sideBar: {
    color: "#939FAE",
    colorLeft: "#426A90",
    colorHover: "#4A6F93",
    colorActive: "#000000",
    bg: "#fff",
  },

  baseButton: {
    bgColor: "linear-gradient(139.78deg, #073D5F 3.01%, #022D47 95.95%)",
    shadow: `0px 1px 4px ${tinycolor(secondary).setAlpha(0.3).toRgbString()}`,
  },

  bgLight: {
    one: "#E8F2F5",
    two: "#FEF1F0",
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)",
  },
};

export default palette;

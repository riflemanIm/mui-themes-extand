import tinycolor from "tinycolor2";
import { GREY, createGradient } from "../paletteFuncs";

// ----------------------------------------------------------------------
const lighterenRate = 1.5;
const lightenRate = 7.5;
const darkenRate = 15;
const darkerRate = 30;

const primary = "#E61565";
const secondary = "#28B7C6";
const warning = "#FF9690";
const success = "#F2D0B2";
const info = "#FF9690";
const hero = "#E31363";
const error = "#f44336";

const PRIMARY = {
  lighter: tinycolor(primary)
    .lighten(lighterenRate)
    .toHexString(),
  main: primary,
  light: tinycolor(primary)
    .lighten(lightenRate)
    .toHexString(),
  dark: tinycolor(primary)
    .darken(darkenRate)
    .toHexString(),
  darker: tinycolor(primary)
    .darken(darkerRate)
    .toHexString(),
  contrastText: "#fff"
};

const SECONDARY = {
  lighter: "#D6E4FF",
  main: secondary,
  light: tinycolor(secondary)
    .lighten(lightenRate)
    .toHexString(),
  dark: tinycolor(secondary)
    .darken(darkenRate)
    .toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A"
};

const INFO = {
  lighter: "#D0F2FF",
  main: info,
  light: tinycolor(info)
    .lighten(lightenRate)
    .toHexString(),
  dark: tinycolor(info)
    .darken(darkenRate)
    .toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
};

const SUCCESS = {
  lighter: "#E9FCD4",
  main: success,
  light: tinycolor(success)
    .lighten(lightenRate)
    .toHexString(),
  dark: tinycolor(success)
    .darken(darkenRate)
    .toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
};

const WARNING = {
  lighter: "#FFF7CD",
  main: warning,
  light: tinycolor(warning)
    .lighten(lightenRate)
    .toHexString(),
  dark: tinycolor(warning)
    .darken(darkenRate)
    .toHexString(),
  darker: "#7A4F01",
  contrastText: GREY[800]
};

const ERROR = {
  lighter: "#FFE7D9",
  main: error,
  light: tinycolor(error)
    .lighten(lightenRate)
    .toHexString(),
  dark: tinycolor(error)
    .darken(darkenRate)
    .toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  one: "#49545d",
  two: "#3F4A52"
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
    disabled: GREY[400]
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "rgba(97, 87, 255, 0.1);",
    infoGadient: createGradient(INFO.lighter, INFO.light),
    success: "#FFE7CE"
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
    toggle1: "#E61565",
    toggle2: "#28B7C6",
    toggle3: "#fff",
    toggle4: "#fff"
  },
  sideBar: {
    color: "#fff",
    colorLeft: "#28B7C6",
    colorHover: "#3F4A52",
    colorActive: "#000",
    bg: "#28B7C6"
  },
  baseButton: {
    bgColor: "linear-gradient(180deg, #E31363 0%, #C2024C 100%)",
    shadow: "0px 2px 2px rgba(103 162 171, 0.4)"
  },
  bgLight: {
    one: "#E8F5F6",
    two: "#C1EFF4"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 2px 35px rgba(103 162 171, 0.15)"
  }
};

export default palette;

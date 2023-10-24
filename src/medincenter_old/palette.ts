import tinycolor from "tinycolor2";
import { GREY, createGradient } from "../paletteFuncs";

// ----------------------------------------------------------------------
const lighterenRate = 1.5;
const lightenRate = 7.5;
const darkenRate = 15;
const darkerRate = 30;

const primary = "#1F3E9A";
const secondary = "#a4aecb";
const warning = "#F57069";
const success = "#34DFA2";
const info = "#FF9690";
const hero = "#1F3E9A";
const error = "#f44336";

const PRIMARY = {
  lighter: tinycolor(primary).lighten(lighterenRate).toHexString(),
  main: primary,
  light: tinycolor(primary).lighten(lightenRate).toHexString(),
  dark: tinycolor(primary).darken(darkenRate).toHexString(),
  darker: tinycolor(primary).darken(darkerRate).toHexString(),
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  main: secondary,
  light: tinycolor(secondary).lighten(lightenRate).toHexString(),
  dark: tinycolor(secondary).darken(darkenRate).toHexString(),
  contrastText: "#ccc",
  darker: "#091A7A",
};

const INFO = {
  lighter: "#D0F2FF",
  main: info,
  light: tinycolor(info).lighten(lightenRate).toHexString(),
  dark: tinycolor(info).darken(darkenRate).toHexString(),
  contrastText: "#fff",
  darker: "#04297A",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  main: success,
  light: tinycolor(success).lighten(lightenRate).toHexString(),
  dark: tinycolor(success).darken(darkenRate).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D",
};

const WARNING = {
  lighter: "#FFF7CD",
  main: warning,
  light: tinycolor(warning).lighten(lightenRate).toHexString(),
  dark: tinycolor(warning).darken(darkenRate).toHexString(),
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  main: error,
  light: tinycolor(error).lighten(lightenRate).toHexString(),
  dark: tinycolor(error).darken(darkenRate).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  one: "#366CE3",
  two: "#584CFF",
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
    info: "rgba(97, 87, 255, 0.1);",
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
    toggle1: "#1F3E9A",
    toggle2: "#1F3E9A",
    toggle3: "#F1F4FC",
    toggle4: "#fff",
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#7C7D80",
    colorHover: "#1F3E9A",
    colorActive: "#000",
    bg: "#fff",
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #366CE3 3.01%, #584CFF 95.95%)",
    bgColorHover: "linear-gradient(139.78deg, #517EF8 3.01%, #574FFE 95.95%)",

    shadow: "0px 1px 4px rgba(111, 102, 255, 0.4)",
  },
  bgLight: {
    one: "#f3f3f3",
    two: "rgba(241, 244, 252, 0.6)",
    disabled: "#90cbe6",
  },
  shadows: {
    card: "0px 2px 35px rgba(78, 72, 190, 0.08)",
    firstHover: "0px 2px 35px rgba(111, 102, 255, 0.15)",
  },
};

export default palette;

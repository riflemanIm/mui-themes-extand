import tinycolor from 'tinycolor2';
import { GREY, createGradient } from '../paletteFuncs';
// ----------------------------------------------------------------------
const lighterenRate = 1.5;
const lightenRate = 7.5;
const darkenRate = 15;
const darkerRate = 30;

const primary = '#D81440';
const secondary = '#BE697C';
const warning = '#F57069';
const success = '#34DFA2';
const info = '#FFEED6';
const error = '#f44336';
const hero = '#D81440';

const PRIMARY = {
  lighter: tinycolor(primary).lighten(lighterenRate).toHexString(),
  main: primary,
  light: tinycolor(primary).lighten(lightenRate).toHexString(),
  dark: tinycolor(primary).darken(darkenRate).toHexString(),
  darker: tinycolor(primary).darken(darkerRate).toHexString(),
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#FCF1F1',
  main: secondary,
  light: tinycolor(secondary).lighten(lightenRate).toHexString(),
  dark: tinycolor(secondary).darken(darkenRate).toHexString(),
  contrastText: '#ccc',
  darker: '#091A7A',
};

const INFO = {
  lighter: '#ECECEC',
  main: info,
  light: tinycolor(info).lighten(lightenRate).toHexString(),
  dark: tinycolor(info).darken(darkenRate).toHexString(),
  contrastText: '#fff',
  darker: '#04297A',
};

const SUCCESS = {
  lighter: '##FFEED6',
  main: success,
  light: tinycolor(success).lighten(lightenRate).toHexString(),
  dark: tinycolor(success).darken(darkenRate).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D',
};

const WARNING = {
  lighter: '#E3F8D2',
  main: warning,
  light: tinycolor(warning).lighten(lightenRate).toHexString(),
  dark: tinycolor(warning).darken(darkenRate).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FFE7D9',
  main: error,
  light: tinycolor(error).lighten(lightenRate).toHexString(),
  dark: tinycolor(error).darken(darkenRate).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff',
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  one: '#D81440',
  two: '#C41139',
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
    paper: '#fff',
    default: '#fff',
    neutral: GREY[200],
    warning: '#F8E5E3',
    error: '##F5D7D7',
    info: '#FCF1F1',
    infoGadient: createGradient(INFO.lighter, INFO.light),
    success: '#E3F8D2',
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
    toggle1: '#BE697C',
    toggle2: '#D81440',
    toggle3: '#fff',
    toggle4: '#fff',
  },
  sideBar: {
    color: '#808080',
    colorLeft: '#808080',
    colorHover: '#D81440',
    colorActive: '#000',
    bg: '#fff',
  },
  baseButton: {
    bgColor:
      'linear-gradient(163.61deg, #D81440 3.01%, #C41139 95.95%)',
    shadow: '0px 1px 4px rgba(35, 40, 48, 0.08)',
  },
  bgLight: {
    one: '#FCF1F1',
    two: '#FEF1F0',
  },
  shadows: {
    card: '0px 2px 35px rgba(78, 72, 190, 0.08)',
    firstHover: '0px 2px 35px rgba(111, 102, 255, 0.15)',
  },
};

export default palette;
import tinycolor from 'tinycolor2';
import { GREY, createGradient } from '../paletteFuncs';
// ----------------------------------------------------------------------
const lighterenRate = 1.5;
const lightenRate = 7.5;
const darkenRate = 15;
const darkerRate = 30;

const primary = '#0E2F76';
const secondary = '#49649D';
const warning = '#FF9690';
const success = '#4DAE00';
const info = '#398CB0';
const error = '#FF4D75';
const hero = '#F57069';

const PRIMARY = {
  lighter: tinycolor(primary).lighten(lighterenRate).toHexString(),
  main: primary,
  light: tinycolor(primary).lighten(lightenRate).toHexString(),
  dark: tinycolor(primary).darken(darkenRate).toHexString(),
  darker: tinycolor(primary).darken(darkerRate).toHexString(),
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#5D9ED1',
  main: secondary,
  light: tinycolor(secondary).lighten(lightenRate).toHexString(),
  dark: tinycolor(secondary).darken(darkenRate).toHexString(),
  contrastText: '#D0F2FF',
  darker: '#827657',
};

const INFO = {
  lighter: '#D0F2FF',
  main: info,
  light: tinycolor(info).lighten(lightenRate).toHexString(),
  dark: tinycolor(info).darken(darkenRate).toHexString(),
  contrastText: '#fff',
  darker: '#04297A',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  main: success,
  light: tinycolor(success).lighten(lightenRate).toHexString(),
  dark: tinycolor(success).darken(darkenRate).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D',
};

const WARNING = {
  lighter: '#FFF7CD',
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
  one: '#B5A788',
  two: '#AA9161',
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
    warning: '#C2C4CB',
    error: '#D9DEEC',
    info: '#F1F4FC',
    infoGadient: createGradient(INFO.lighter, INFO.light),
    success: '#FFEED6',
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
    toggle1: '#5D9ED1',
    toggle2: '#5F79AE',
    toggle3: '#fff',
    toggle4: '#fff',
  },
  sideBar: {
    color: '#7C7D80',
    colorLeft: '#0B2660',
    colorHover: '#5D9ED1',
    colorActive: '#000000',
    bg: '#fff',
  },
  baseButton: {
    bgColor:
      ' linear-gradient(139.78deg, #0E2F76 3.01%, #0B2660 95.95%)',
    shadow: '0px 4px 15px 0px rgba(35, 40, 48, 0.08)',
  },
  bgLight: {
    one: '#F1F4FC',
    two: '#F1FCF9',
  },
  shadows: {
    card: '0px 8px 24px 0px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 24px 0px rgba(0, 0, 0, 0.09)',
  },
};

export default palette;

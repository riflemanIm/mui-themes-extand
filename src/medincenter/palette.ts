import tinycolor from 'tinycolor2';
import { GREY, createGradient } from '../paletteFuncs';

// ----------------------------------------------------------------------
const lighterenRate = 1.5;
const lightenRate = 7.5;
const darkenRate = 15;
const darkerRate = 20;

const primary = '#0A6252';
const secondary = '#7C7D80';
const warning = '#EF7785';
const success = '#4DAE00';
const info = '#C2C4CB';
const error = '#D76977';
const hero = '#5A9388';

const PRIMARY = {
  lighter: tinycolor(primary).lighten(lighterenRate).toHexString(),
  main: primary,
  light: tinycolor(primary).lighten(lightenRate).toHexString(),
  dark: tinycolor(primary).darken(darkenRate).toHexString(),
  darker: tinycolor(primary).darken(darkerRate).toHexString(),
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#D6E4FF',
  main: secondary,
  light: tinycolor(secondary).lighten(lightenRate).toHexString(),
  dark: tinycolor(secondary).darken(darkenRate).toHexString(),
  contrastText: '#ccc',
  darker: '#E87780',
};

const INFO = {
  lighter: '#F8FFFA',
  main: info,
  light: tinycolor(info).lighten(lightenRate).toHexString(),
  dark: tinycolor(info).darken(darkenRate).toHexString(),
  contrastText: '#fff',
  darker: '#F7BFBC',
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
  one: '#1F524A',
  two: '#005349',
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
    warning: '#F1CBC6',
    error: '#BBCAC7',
    info: '#EDF5F0',
    infoGadient: createGradient(INFO.light, INFO.main),
    success: '#E3F8D2',
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],

    disabledBackground: '#005349',
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: hero,
    toggle2: tinycolor(hero).lighten(lightenRate).toHexString(),
    toggle3: '#F5F5F5',
    toggle4: '#fff',
  },
  sideBar: {
    color: '#7C7D80',
    colorLeft: '#1F524A',
    colorHover: '#025047',
    colorActive: '#000000',
    bg: '#fff',
  },

  baseButton: {
    bgColor:
      'linear-gradient(139.78deg, #1F524A 3.01%, #005349 95.95%)',
    shadow: '0px 4px 15px rgba(0, 0, 0, 0.08)',
  },

  bgLight: {
    one: '#EDF5F0',
    two: '#EFF9F7',
  },
  shadows: {
    card: '0px 2px 35px rgba(78, 72, 190, 0.08)',
    firstHover: '0px 2px 35px rgba(101, 101, 101, 0.15)',
  },
};

export default palette;

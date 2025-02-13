'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var material = require('@mui/material');
var styles = require('@mui/material/styles');
var tinycolor = _interopDefault(require('tinycolor2'));
var paletteFuncs = require('@/themes/paletteFuncs');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function createGradient(color1, color2) {
  return "linear-gradient(to bottom, " + color1 + ", " + color2 + ")";
}
function pxToRem(value) {
  return value / 16 + "rem";
}
// SETUP COLORS
var GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  5008: /*#__PURE__*/material.alpha("#919EAB", 0.08),
  50012: /*#__PURE__*/material.alpha("#919EAB", 0.12),
  50016: /*#__PURE__*/material.alpha("#919EAB", 0.16),
  50024: /*#__PURE__*/material.alpha("#919EAB", 0.24),
  50032: /*#__PURE__*/material.alpha("#919EAB", 0.32),
  50048: /*#__PURE__*/material.alpha("#919EAB", 0.48),
  50056: /*#__PURE__*/material.alpha("#919EAB", 0.56),
  50080: /*#__PURE__*/material.alpha("#919EAB", 0.8)
};

// ----------------------------------------------------------------------
var lighterenRate = 1.5;
var lightenRate = 7.5;
var darkenRate = 15;
var darkerRate = 30;
var primary = "#6157FF";
var secondary = "#73D7F5";
var warning = "#F57069";
var success = "#FFEED6";
var info = "#abb3ff";
var error = "#f44336";
var hero = "#6157FF";
var PRIMARY = {
  lighter: /*#__PURE__*/tinycolor(primary).lighten(lighterenRate).toHexString(),
  main: primary,
  light: /*#__PURE__*/tinycolor(primary).lighten(lightenRate).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary).darken(darkenRate).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary).darken(darkerRate).toHexString(),
  contrastText: "#fff"
};
var SECONDARY = {
  lighter: "#D6E4FF",
  main: secondary,
  light: /*#__PURE__*/tinycolor(secondary).lighten(lightenRate).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary).darken(darkenRate).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary).darken(darkerRate).toHexString(),
  contrastText: "#ccc"
};
var INFO = {
  lighter: "#D0F2FF",
  main: info,
  light: /*#__PURE__*/tinycolor(info).lighten(lightenRate).toHexString(),
  dark: /*#__PURE__*/tinycolor(info).darken(darkenRate).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
};
var SUCCESS = {
  lighter: "#E9FCD4",
  main: success,
  light: /*#__PURE__*/tinycolor(success).lighten(lightenRate).toHexString(),
  dark: /*#__PURE__*/tinycolor(success).darken(darkenRate).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
};
var WARNING = {
  lighter: "#FFF7CD",
  main: warning,
  light: /*#__PURE__*/tinycolor(warning).lighten(lightenRate).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning).darken(darkenRate).toHexString(),
  darker: "#7A4F01",
  contrastText: GREY[800]
};
var ERROR = {
  lighter: "#FFE7D9",
  main: error,
  light: /*#__PURE__*/tinycolor(error).lighten(lightenRate).toHexString(),
  dark: /*#__PURE__*/tinycolor(error).darken(darkenRate).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
};
var GRADIENTS = {
  primary: /*#__PURE__*/createGradient(PRIMARY.light, PRIMARY.main),
  info: /*#__PURE__*/createGradient(INFO.light, INFO.main),
  success: /*#__PURE__*/createGradient(SUCCESS.light, SUCCESS.main),
  warning: /*#__PURE__*/createGradient(WARNING.light, WARNING.main),
  error: /*#__PURE__*/createGradient(ERROR.light, ERROR.main),
  one: "#7385FF",
  two: "#584DFF"
};
var palette = {
  hero: hero,
  primary: /*#__PURE__*/_extends({}, PRIMARY),
  secondary: /*#__PURE__*/_extends({}, SECONDARY),
  info: /*#__PURE__*/_extends({}, INFO),
  success: /*#__PURE__*/_extends({}, SUCCESS),
  warning: /*#__PURE__*/_extends({}, WARNING),
  error: /*#__PURE__*/_extends({}, ERROR),
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: "#fff",
    "default": "#fff",
    neutral: GREY[200],
    warning: "#FEF1F0",
    error: "#ECECEC",
    info: "#F1F4FC",
    infoGadient: /*#__PURE__*/createGradient(INFO.lighter, INFO.light),
    success: "#FFE7CE"
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#828EFA",
    toggle2: "#6157FF",
    toggle3: "#F1F4FC",
    toggle4: "#fff"
  },
  sideBar: {
    color: "#7C7D80",
    colorLeft: "#7C7D80",
    colorHover: "#6157FF",
    colorActive: "#000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(163.61deg, #7385FF 3.01%, #584DFF 95.95%)",
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: "#F1FCF9",
    two: "#F1F4FC"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
};

var FONT_PRIMARY = "Avenir Next Cyr";
var typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
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
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input(theme) {
  return {
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: '1px solid rgb(196 196 196)'
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid rgb(97, 87, 255, 0.3)'
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          '&:hover': {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          '&:before': {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: 'transparent',
          '&.Mui-focused': {
            backgroundColor: '#fff'
          },
          '& fieldset': {
            borderColor: theme.palette.grey
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.dark,
            borderWidth: '2px'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '2px'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0
          },
          "&.Mui-disabled": {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.two,
          boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            background: theme.palette.bgLight.one,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          "&:hover": {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: theme.palette.success.main,
          "&:hover": {
            backgroundColor: theme.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: theme.palette.warning.main,
          "&:hover": {
            backgroundColor: theme.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: theme.palette.info.main,
          "&:hover": {
            backgroundColor: theme.palette.info.light,
            boxShadow: "none"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.92);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Menu() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Link() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$1(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides(theme) {
  return Object.assign(AppBar(theme), Card(theme), Input(theme), Paper(theme), Button(theme), Tooltip(theme), Backdrop(theme), Typography(theme), CssBaseline(theme), Autocomplete(theme), ToggleButton(theme), IconButton(theme), Picker(), Rating(theme), Menu(), Alert(theme), Link(), Badge(), Input$1(theme), Skeleton());
}

var mobimed = {
  palette: palette,
  typography: typography,
  componentsOverride: ComponentsOverrides
};

// ----------------------------------------------------------------------
var lighterenRate$1 = 1.5;
var lightenRate$1 = 7.5;
var darkenRate$1 = 15;
var darkerRate$1 = 30;
var primary$1 = '#E61565';
var secondary$1 = '#28B7C6';
var warning$1 = '#FF9690';
var success$1 = '#F2D0B2';
var info$1 = '#FF9690';
var hero$1 = '#E31363';
var error$1 = '#f44336';
var PRIMARY$1 = {
  lighter: /*#__PURE__*/tinycolor(primary$1).lighten(lighterenRate$1).toHexString(),
  main: primary$1,
  light: /*#__PURE__*/tinycolor(primary$1).lighten(lightenRate$1).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$1).darken(darkenRate$1).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$1).darken(darkerRate$1).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$1 = {
  lighter: '#D6E4FF',
  main: secondary$1,
  light: /*#__PURE__*/tinycolor(secondary$1).lighten(lightenRate$1).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$1).darken(darkenRate$1).toHexString(),
  contrastText: '#ccc',
  darker: '#091A7A'
};
var INFO$1 = {
  lighter: '#D0F2FF',
  main: info$1,
  light: /*#__PURE__*/tinycolor(info$1).lighten(lightenRate$1).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$1).darken(darkenRate$1).toHexString(),
  contrastText: '#fff',
  darker: '#04297A'
};
var SUCCESS$1 = {
  lighter: '#E9FCD4',
  main: success$1,
  light: /*#__PURE__*/tinycolor(success$1).lighten(lightenRate$1).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$1).darken(darkenRate$1).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$1 = {
  lighter: '#FFF7CD',
  main: warning$1,
  light: /*#__PURE__*/tinycolor(warning$1).lighten(lightenRate$1).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$1).darken(darkenRate$1).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$1 = {
  lighter: '#FFE7D9',
  main: error$1,
  light: /*#__PURE__*/tinycolor(error$1).lighten(lightenRate$1).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$1).darken(darkenRate$1).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$1 = {
  primary: /*#__PURE__*/createGradient(PRIMARY$1.light, PRIMARY$1.main),
  info: /*#__PURE__*/createGradient(INFO$1.light, INFO$1.main),
  success: /*#__PURE__*/createGradient(SUCCESS$1.light, SUCCESS$1.main),
  warning: /*#__PURE__*/createGradient(WARNING$1.light, WARNING$1.main),
  error: /*#__PURE__*/createGradient(ERROR$1.light, ERROR$1.main),
  one: '#49545d',
  two: '#3F4A52'
};
var palette$1 = {
  hero: hero$1,
  primary: /*#__PURE__*/_extends({}, PRIMARY$1),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$1),
  info: /*#__PURE__*/_extends({}, INFO$1),
  success: /*#__PURE__*/_extends({}, SUCCESS$1),
  warning: /*#__PURE__*/_extends({}, WARNING$1),
  error: /*#__PURE__*/_extends({}, ERROR$1),
  grey: GREY,
  gradients: GRADIENTS$1,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": GREY[100],
    neutral: GREY[200],
    warning: '#FEF1F0',
    error: '#ECECEC',
    info: 'rgba(97, 87, 255, 0.1);',
    infoGadient: /*#__PURE__*/createGradient(INFO$1.lighter, INFO$1.light),
    success: '#FFE7CE'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: '#E61565',
    toggle2: '#28B7C6',
    toggle3: '#fff',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#fff',
    colorLeft: '#28B7C6',
    colorHover: '#3F4A52',
    colorActive: '#000',
    bg: '#28B7C6'
  },
  baseButton: {
    bgColor: 'linear-gradient(180deg, #E31363 0%, #C2024C 100%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$1).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#E8F5F6',
    two: '#C1EFF4'
  },
  shadows: {
    card: '0px 2px 24px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$1 = "Avenir Next Cyr";
var typography$1 = {
  fontFamily: FONT_PRIMARY$1,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$1(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$1(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$2(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: theme.palette.primary.light
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.hero,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$1(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$1(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$1(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$1(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$1(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$1(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$1(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$1(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$1(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$1() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$1(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Menu$1() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$1(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Link$1() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$1() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$3(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$1() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$1(theme) {
  return Object.assign(AppBar$1(theme), Card$1(theme), Input$2(theme), Paper$1(theme), Button$1(theme), Tooltip$1(theme), Backdrop$1(theme), Typography$1(theme), CssBaseline$1(theme), Autocomplete$1(theme), ToggleButton$1(theme), IconButton$1(theme), Picker$1(), Rating$1(theme), Menu$1(), Alert$1(theme), Link$1(), Badge$1(), Input$3(theme), Skeleton$1());
}

var drAnna = {
  palette: palette$1,
  typography: typography$1,
  componentsOverride: ComponentsOverrides$1
};

// ----------------------------------------------------------------------
var lighterenRate$2 = 1.5;
var lightenRate$2 = 7.5;
var darkenRate$2 = 15;
var darkerRate$2 = 30;
var primary$2 = '#EA9D00';
var secondary$2 = '#559BDC';
var warning$2 = '#FF4D75';
var success$2 = '#34DFA2';
var info$2 = '#FF9690';
var error$2 = '#FF4D75';
var hero$2 = '#004D8F';
var PRIMARY$2 = {
  lighter: /*#__PURE__*/tinycolor(primary$2).lighten(lighterenRate$2).toHexString(),
  main: primary$2,
  light: /*#__PURE__*/tinycolor(primary$2).lighten(lightenRate$2).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$2).darken(darkenRate$2).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$2).darken(darkerRate$2).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$2 = {
  lighter: '#D6E4FF',
  main: secondary$2,
  light: /*#__PURE__*/tinycolor(secondary$2).lighten(lightenRate$2).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$2).darken(darkenRate$2).toHexString(),
  contrastText: '#ccc',
  darker: '#091A7A'
};
var INFO$2 = {
  lighter: '#D0F2FF',
  main: info$2,
  light: /*#__PURE__*/tinycolor(info$2).lighten(lightenRate$2).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$2).darken(darkenRate$2).toHexString(),
  contrastText: '#fff',
  darker: '#04297A'
};
var SUCCESS$2 = {
  lighter: '#E9FCD4',
  main: success$2,
  light: /*#__PURE__*/tinycolor(success$2).lighten(lightenRate$2).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$2).darken(darkenRate$2).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$2 = {
  lighter: '#FFF7CD',
  main: warning$2,
  light: /*#__PURE__*/tinycolor(warning$2).lighten(lightenRate$2).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$2).darken(darkenRate$2).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$2 = {
  lighter: '#FFE7D9',
  main: error$2,
  light: /*#__PURE__*/tinycolor(error$2).lighten(lightenRate$2).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$2).darken(darkenRate$2).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$2 = {
  primary: /*#__PURE__*/createGradient(PRIMARY$2.light, PRIMARY$2.main),
  info: /*#__PURE__*/createGradient(INFO$2.light, INFO$2.main),
  success: /*#__PURE__*/createGradient(SUCCESS$2.light, SUCCESS$2.main),
  warning: /*#__PURE__*/createGradient(WARNING$2.light, WARNING$2.main),
  error: /*#__PURE__*/createGradient(ERROR$2.light, ERROR$2.main),
  one: '#EDAA21',
  two: '#EB9D02'
};
var palette$2 = {
  hero: hero$2,
  primary: /*#__PURE__*/_extends({}, PRIMARY$2),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$2),
  info: /*#__PURE__*/_extends({}, INFO$2),
  success: /*#__PURE__*/_extends({}, SUCCESS$2),
  warning: /*#__PURE__*/_extends({}, WARNING$2),
  error: /*#__PURE__*/_extends({}, ERROR$2),
  grey: GREY,
  gradients: GRADIENTS$2,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": GREY[100],
    neutral: GREY[200],
    warning: '#FEF1F0',
    error: '#ECECEC',
    info: 'rgba(97, 87, 255, 0.1);',
    infoGadient: /*#__PURE__*/createGradient(INFO$2.lighter, INFO$2.light),
    success: '#FFE7CE'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: '#004D8F',
    toggle2: '#004D8F',
    toggle3: '#fff',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#7C7D80',
    colorLeft: '#7C7D80',
    colorHover: '#EDAA21',
    colorActive: '#000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(139.78deg, #EDAA21 3.01%, #EB9D02 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$2).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#efefef',
    two: '#f3f3f3'
  },
  shadows: {
    card: '0px 2px 24px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$2 = "Avenir Next Cyr";
var typography$2 = {
  fontFamily: FONT_PRIMARY$2,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$2(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$2(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$4(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: theme.palette.primary.light
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.hero,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$2(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$2(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$2(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$2(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$2(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$2(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$2(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$2(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$2(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$2() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$2(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Menu$2() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$2(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Link$2() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$2() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$5(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$2() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$2(theme) {
  return Object.assign(AppBar$2(theme), Card$2(theme), Input$4(theme), Paper$2(theme), Button$2(theme), Tooltip$2(theme), Backdrop$2(theme), Typography$2(theme), CssBaseline$2(theme), Autocomplete$2(theme), ToggleButton$2(theme), IconButton$2(theme), Picker$2(), Rating$2(theme), Menu$2(), Alert$2(theme), Link$2(), Badge$2(), Input$5(theme), Skeleton$2());
}

var gms = {
  palette: palette$2,
  typography: typography$2,
  componentsOverride: ComponentsOverrides$2
};

// ----------------------------------------------------------------------
var lighterenRate$3 = 1.5;
var lightenRate$3 = 7.5;
var darkenRate$3 = 15;
var darkerRate$3 = 20;
var primary$3 = '#0A6252';
var secondary$3 = '#7C7D80';
var warning$3 = '#EF7785';
var success$3 = '#4DAE00';
var info$3 = '#C2C4CB';
var error$3 = '#D76977';
var hero$3 = '#5A9388';
var PRIMARY$3 = {
  lighter: /*#__PURE__*/tinycolor(primary$3).lighten(lighterenRate$3).toHexString(),
  main: primary$3,
  light: /*#__PURE__*/tinycolor(primary$3).lighten(lightenRate$3).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$3).darken(darkenRate$3).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$3).darken(darkerRate$3).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$3 = {
  lighter: '#D6E4FF',
  main: secondary$3,
  light: /*#__PURE__*/tinycolor(secondary$3).lighten(lightenRate$3).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$3).darken(darkenRate$3).toHexString(),
  contrastText: '#ccc',
  darker: '#E87780'
};
var INFO$3 = {
  lighter: '#F8FFFA',
  main: info$3,
  light: /*#__PURE__*/tinycolor(info$3).lighten(lightenRate$3).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$3).darken(darkenRate$3).toHexString(),
  contrastText: '#fff',
  darker: '#F7BFBC'
};
var SUCCESS$3 = {
  lighter: '#E9FCD4',
  main: success$3,
  light: /*#__PURE__*/tinycolor(success$3).lighten(lightenRate$3).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$3).darken(darkenRate$3).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$3 = {
  lighter: '#FFF7CD',
  main: warning$3,
  light: /*#__PURE__*/tinycolor(warning$3).lighten(lightenRate$3).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$3).darken(darkenRate$3).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$3 = {
  lighter: '#FFE7D9',
  main: error$3,
  light: /*#__PURE__*/tinycolor(error$3).lighten(lightenRate$3).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$3).darken(darkenRate$3).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$3 = {
  primary: /*#__PURE__*/createGradient(PRIMARY$3.light, PRIMARY$3.main),
  info: /*#__PURE__*/createGradient(INFO$3.light, INFO$3.main),
  success: /*#__PURE__*/createGradient(SUCCESS$3.light, SUCCESS$3.main),
  warning: /*#__PURE__*/createGradient(WARNING$3.light, WARNING$3.main),
  error: /*#__PURE__*/createGradient(ERROR$3.light, ERROR$3.main),
  one: '#1F524A',
  two: '#005349'
};
var palette$3 = {
  hero: hero$3,
  primary: /*#__PURE__*/_extends({}, PRIMARY$3),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$3),
  info: /*#__PURE__*/_extends({}, INFO$3),
  success: /*#__PURE__*/_extends({}, SUCCESS$3),
  warning: /*#__PURE__*/_extends({}, WARNING$3),
  error: /*#__PURE__*/_extends({}, ERROR$3),
  grey: GREY,
  gradients: GRADIENTS$3,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": '#fff',
    neutral: GREY[200],
    warning: '#F1CBC6',
    error: '#BBCAC7',
    info: '#EDF5F0',
    infoGadient: /*#__PURE__*/createGradient('#D7F5DF', '#F8FFFA'),
    success: '#E3F8D2'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabledBackground: '#005349',
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: hero$3,
    toggle2: /*#__PURE__*/tinycolor(hero$3).lighten(lightenRate$3).toHexString(),
    toggle3: '#F5F5F5',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#7C7D80',
    colorLeft: '#1F524A',
    colorHover: '#025047',
    colorActive: '#000000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(139.78deg, #1F524A 3.01%, #005349 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$3).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#EDF5F0',
    two: '#EFF9F7'
  },
  shadows: {
    card: '0px 2px 35px rgba(78, 72, 190, 0.08)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$3 = "Avenir Next Cyr";
var typography$3 = {
  fontFamily: FONT_PRIMARY$3,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$3(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$3(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$6(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: '1px solid rgb(196 196 196)'
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid rgb(97, 87, 255, 0.3)'
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          '&:hover': {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          '&:before': {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: 'transparent',
          '&.Mui-focused': {
            backgroundColor: '#fff'
          },
          '& fieldset': {
            borderColor: '#D6E8D9'
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.dark,
            borderWidth: '2px'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '2px'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$3(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none',
            color: theme.palette.primary.dark
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$3(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$3(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$3(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$3(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$3(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$3(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$3(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$3(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& span > svg': {
            color: theme.palette.hero
          }
        }
      }
    }
  };
}

function Picker$3() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$3(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: theme.palette.primary.main
        },
        root: {
          color: theme.palette.primary.main,
          '& span > span': {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

function Menu$3() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$3(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        icon: {
          fontSize: 28
        },
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          icon: {
            color: theme.palette.warning.main
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          icon: {
            color: theme.palette.error.main
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          icon: {
            color: theme.palette.info.main
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          icon: {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

function Link$3() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$3() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$7(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$3() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$3(theme) {
  return Object.assign(AppBar$3(theme), Card$3(theme), Input$6(theme), Paper$3(theme), Button$3(theme), Tooltip$3(theme), Backdrop$3(theme), Typography$3(theme), CssBaseline$3(theme), Autocomplete$3(theme), ToggleButton$3(theme), IconButton$3(theme), Picker$3(), Rating$3(theme), Menu$3(), Alert$3(theme), Link$3(), Badge$3(), Input$7(theme), Skeleton$3());
}

var medincenter = {
  palette: palette$3,
  typography: typography$3,
  componentsOverride: ComponentsOverrides$3
};

// ----------------------------------------------------------------------
var lighterenRate$4 = 1.5;
var lightenRate$4 = 7.5;
var darkenRate$4 = 15;
var darkerRate$4 = 30;
var primary$4 = '#4576E6';
var secondary$4 = '#73D7F5';
var warning$4 = '#F57069';
var success$4 = '#34DFA2';
var info$4 = '#FF9690';
var hero$4 = '#4576E6';
var error$4 = '#f44336';
var PRIMARY$4 = {
  lighter: /*#__PURE__*/tinycolor(primary$4).lighten(lighterenRate$4).toHexString(),
  main: primary$4,
  light: /*#__PURE__*/tinycolor(primary$4).lighten(lightenRate$4).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$4).darken(darkenRate$4).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$4).darken(darkerRate$4).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$4 = {
  lighter: '#D6E4FF',
  main: secondary$4,
  light: /*#__PURE__*/tinycolor(secondary$4).lighten(lightenRate$4).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$4).darken(darkenRate$4).toHexString(),
  contrastText: '#ccc',
  darker: '#091A7A'
};
var INFO$4 = {
  lighter: '#D0F2FF',
  main: info$4,
  light: /*#__PURE__*/tinycolor(info$4).lighten(lightenRate$4).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$4).darken(darkenRate$4).toHexString(),
  contrastText: '#fff',
  darker: '#04297A'
};
var SUCCESS$4 = {
  lighter: '#E9FCD4',
  main: success$4,
  light: /*#__PURE__*/tinycolor(success$4).lighten(lightenRate$4).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$4).darken(darkenRate$4).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$4 = {
  lighter: '#FFF7CD',
  main: warning$4,
  light: /*#__PURE__*/tinycolor(warning$4).lighten(lightenRate$4).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$4).darken(darkenRate$4).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$4 = {
  lighter: '#FFE7D9',
  main: error$4,
  light: /*#__PURE__*/tinycolor(error$4).lighten(lightenRate$4).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$4).darken(darkenRate$4).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$4 = {
  primary: /*#__PURE__*/createGradient(PRIMARY$4.light, PRIMARY$4.main),
  info: /*#__PURE__*/createGradient(INFO$4.light, INFO$4.main),
  success: /*#__PURE__*/createGradient(SUCCESS$4.light, SUCCESS$4.main),
  warning: /*#__PURE__*/createGradient(WARNING$4.light, WARNING$4.main),
  error: /*#__PURE__*/createGradient(ERROR$4.light, ERROR$4.main),
  one: '#4576E6',
  two: '#295BCE'
};
var palette$4 = {
  hero: hero$4,
  primary: /*#__PURE__*/_extends({}, PRIMARY$4),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$4),
  info: /*#__PURE__*/_extends({}, INFO$4),
  success: /*#__PURE__*/_extends({}, SUCCESS$4),
  warning: /*#__PURE__*/_extends({}, WARNING$4),
  error: /*#__PURE__*/_extends({}, ERROR$4),
  grey: GREY,
  gradients: GRADIENTS$4,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": GREY[100],
    neutral: GREY[200],
    warning: '#FEF1F0',
    error: '#ECECEC',
    info: 'rgba(97, 87, 255, 0.1);',
    infoGadient: /*#__PURE__*/createGradient(INFO$4.lighter, INFO$4.light),
    success: '#FFE7CE'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: '#828EFA',
    toggle2: '#4576E6',
    toggle3: '#F1F4FC',
    toggle4: '#828EFA'
  },
  sideBar: {
    color: '#7C7D80',
    colorLeft: '#7C7D80',
    colorHover: '#6157FF',
    colorActive: '#000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(163.61deg, #4576E6 3.01%, #295BCE 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$4).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#F1F4FC',
    two: '#efefef'
  },
  shadows: {
    card: '0px 2px 24px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$4 = "Avenir Next Cyr";
var typography$4 = {
  fontFamily: FONT_PRIMARY$4,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$4(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$4(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$8(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: styles.alpha(theme.palette.grey[500], 0.56)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.hero,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$4(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$4(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$4(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$4(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$4(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$4(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$4(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$4(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$4(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$4() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$4(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

function Menu$4() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$4(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

function Link$4() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$4() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$9(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$4() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$4(theme) {
  return Object.assign(AppBar$4(theme), Card$4(theme), Input$8(theme), Paper$4(theme), Button$4(theme), Tooltip$4(theme), Backdrop$4(theme), Typography$4(theme), CssBaseline$4(theme), Autocomplete$4(theme), ToggleButton$4(theme), IconButton$4(theme), Picker$4(), Rating$4(theme), Menu$4(), Alert$4(theme), Link$4(), Badge$4(), Input$9(theme), Skeleton$4());
}

var medswiss = {
  palette: palette$4,
  typography: typography$4,
  componentsOverride: ComponentsOverrides$4
};

// ----------------------------------------------------------------------
var lighterenRate$5 = 1.5;
var lightenRate$5 = 7.5;
var darkenRate$5 = 15;
var darkerRate$5 = 30;
var primary$5 = '#6157FF';
var secondary$5 = '#73D7F5';
var warning$5 = '#F57069';
var success$5 = '#34DFA2';
var info$5 = '#abb3ff';
var error$5 = '#f44336';
var hero$5 = '#6157FF';
var PRIMARY$5 = {
  lighter: /*#__PURE__*/tinycolor(primary$5).lighten(lighterenRate$5).toHexString(),
  main: primary$5,
  light: /*#__PURE__*/tinycolor(primary$5).lighten(lightenRate$5).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$5).darken(darkenRate$5).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$5).darken(darkerRate$5).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$5 = {
  lighter: '#D6E4FF',
  main: secondary$5,
  light: /*#__PURE__*/tinycolor(secondary$5).lighten(lightenRate$5).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$5).darken(darkenRate$5).toHexString(),
  contrastText: '#ccc',
  darker: '#091A7A'
};
var INFO$5 = {
  lighter: '#D0F2FF',
  main: info$5,
  light: /*#__PURE__*/tinycolor(info$5).lighten(lightenRate$5).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$5).darken(darkenRate$5).toHexString(),
  contrastText: '#fff',
  darker: '#04297A'
};
var SUCCESS$5 = {
  lighter: '#E9FCD4',
  main: success$5,
  light: /*#__PURE__*/tinycolor(success$5).lighten(lightenRate$5).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$5).darken(darkenRate$5).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$5 = {
  lighter: '#FFF7CD',
  main: warning$5,
  light: /*#__PURE__*/tinycolor(warning$5).lighten(lightenRate$5).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$5).darken(darkenRate$5).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$5 = {
  lighter: '#FFE7D9',
  main: error$5,
  light: /*#__PURE__*/tinycolor(error$5).lighten(lightenRate$5).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$5).darken(darkenRate$5).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$5 = {
  primary: /*#__PURE__*/createGradient(PRIMARY$5.light, PRIMARY$5.main),
  info: /*#__PURE__*/createGradient(INFO$5.light, INFO$5.main),
  success: /*#__PURE__*/createGradient(SUCCESS$5.light, SUCCESS$5.main),
  warning: /*#__PURE__*/createGradient(WARNING$5.light, WARNING$5.main),
  error: /*#__PURE__*/createGradient(ERROR$5.light, ERROR$5.main),
  one: '#7385FF',
  two: '#584DFF'
};
var palette$5 = {
  hero: hero$5,
  primary: /*#__PURE__*/_extends({}, PRIMARY$5),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$5),
  info: /*#__PURE__*/_extends({}, INFO$5),
  success: /*#__PURE__*/_extends({}, SUCCESS$5),
  warning: /*#__PURE__*/_extends({}, WARNING$5),
  error: /*#__PURE__*/_extends({}, ERROR$5),
  grey: GREY,
  gradients: GRADIENTS$5,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": GREY[100],
    neutral: GREY[200],
    warning: '#FEF1F0',
    error: '#ECECEC',
    info: 'rgba(97, 87, 255, 0.1);',
    infoGadient: /*#__PURE__*/createGradient(INFO$5.lighter, INFO$5.light),
    success: '#FFE7CE'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: '#828EFA',
    toggle2: '#6157FF',
    toggle3: '#F1F4FC',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#7C7D80',
    colorLeft: '#7C7D80',
    colorHover: '#6157FF',
    colorActive: '#000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(163.61deg, #7385FF 3.01%, #584DFF 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$5).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#F1FCF9',
    two: '#F1F4FC'
  },
  shadows: {
    card: '0px 2px 24px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$5 = "Avenir Next Cyr";
var typography$5 = {
  fontFamily: FONT_PRIMARY$5,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$5(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$5(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$a(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.56)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: theme.palette.primary.light
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$5(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$5(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$5(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$5(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$5(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$5(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$5(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$5(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$5(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$5() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$5(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Menu$5() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$5(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Link$5() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$5() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$b(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$5() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$5(theme) {
  return Object.assign(AppBar$5(theme), Card$5(theme), Input$a(theme), Paper$5(theme), Button$5(theme), Tooltip$5(theme), Backdrop$5(theme), Typography$5(theme), CssBaseline$5(theme), Autocomplete$5(theme), ToggleButton$5(theme), IconButton$5(theme), Picker$5(), Rating$5(theme), Menu$5(), Alert$5(theme), Link$5(), Badge$5(), Input$b(theme), Skeleton$5());
}

var mediadoc = {
  palette: palette$5,
  typography: typography$5,
  componentsOverride: ComponentsOverrides$5
};

// ----------------------------------------------------------------------
var lighterenRate$6 = 1.5;
var lightenRate$6 = 7.5;
var darkenRate$6 = 15;
var darkerRate$6 = 30;
var primary$6 = '#49A65C';
var secondary$6 = '#58ca70';
var warning$6 = '#FA847E';
var success$6 = '#4DAE00';
var info$6 = '#FECB07';
var error$6 = '#FF9690';
var hero$6 = '#F57069';
var PRIMARY$6 = {
  lighter: /*#__PURE__*/tinycolor(primary$6).lighten(lighterenRate$6).toHexString(),
  main: primary$6,
  light: /*#__PURE__*/tinycolor(primary$6).lighten(lightenRate$6).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$6).darken(darkenRate$6).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$6).darken(darkerRate$6).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$6 = {
  lighter: '#D6E4FF',
  main: secondary$6,
  light: /*#__PURE__*/tinycolor(secondary$6).lighten(lightenRate$6).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$6).darken(darkenRate$6).toHexString(),
  contrastText: '#ccc',
  darker: '#E87780'
};
var INFO$6 = {
  lighter: '#FCEDF2',
  main: info$6,
  light: /*#__PURE__*/tinycolor(info$6).lighten(lightenRate$6).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$6).darken(darkenRate$6).toHexString(),
  contrastText: '#fff',
  darker: '#F7BFBC'
};
var SUCCESS$6 = {
  lighter: '#E9FCD4',
  main: success$6,
  light: /*#__PURE__*/tinycolor(success$6).lighten(lightenRate$6).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$6).darken(darkenRate$6).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$6 = {
  lighter: '#FFF7CD',
  main: warning$6,
  light: /*#__PURE__*/tinycolor(warning$6).lighten(lightenRate$6).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$6).darken(darkenRate$6).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$6 = {
  lighter: '#FFE7D9',
  main: error$6,
  light: /*#__PURE__*/tinycolor(error$6).lighten(lightenRate$6).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$6).darken(darkenRate$6).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$6 = {
  primary: /*#__PURE__*/createGradient(PRIMARY$6.light, PRIMARY$6.main),
  info: /*#__PURE__*/createGradient(INFO$6.light, INFO$6.main),
  success: /*#__PURE__*/createGradient(SUCCESS$6.light, SUCCESS$6.main),
  warning: /*#__PURE__*/createGradient(WARNING$6.light, WARNING$6.main),
  error: /*#__PURE__*/createGradient(ERROR$6.light, ERROR$6.main),
  one: '#44A357',
  two: '#28933E'
};
var palette$6 = {
  hero: hero$6,
  primary: /*#__PURE__*/_extends({}, PRIMARY$6),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$6),
  info: /*#__PURE__*/_extends({}, INFO$6),
  success: /*#__PURE__*/_extends({}, SUCCESS$6),
  warning: /*#__PURE__*/_extends({}, WARNING$6),
  error: /*#__PURE__*/_extends({}, ERROR$6),
  grey: GREY,
  gradients: GRADIENTS$6,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": '#fff',
    neutral: GREY[100],
    warning: '#ECECEC',
    error: '#edd1d1',
    info: 'rgba(174 33 3, 0.4)',
    infoGadient: /*#__PURE__*/createGradient(INFO$6.lighter, INFO$6.light),
    success: '#FFE7CE'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: PRIMARY$6.main,
    toggle2: PRIMARY$6.dark,
    toggle3: '#EDFCFA',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#7C7D80',
    colorLeft: '#7C7D80',
    colorHover: '#445A68',
    colorActive: '#000',
    bg: '#FFF'
  },
  baseButton: {
    bgColor: 'linear-gradient(139.78deg, #44A357 3.01%, #28933E 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$6).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#F4F4F4',
    two: '#F1FCF7'
  },
  shadows: {
    card: '0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$6 = "Avenir Next Cyr";
var typography$6 = {
  fontFamily: FONT_PRIMARY$6,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$6(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$6(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$c(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: styles.alpha(theme.palette.grey[500], 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$6(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$6(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$6(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$6(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$6(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$6(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$6(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$6(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(139.78deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$6(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$6() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$6(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

function Menu$6() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$6(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

function Link$6() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$6() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$d(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$6() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$6(theme) {
  return Object.assign(AppBar$6(theme), Card$6(theme), Input$c(theme), Paper$6(theme), Button$6(theme), Tooltip$6(theme), Backdrop$6(theme), Typography$6(theme), CssBaseline$6(theme), Autocomplete$6(theme), ToggleButton$6(theme), IconButton$6(theme), Picker$6(), Rating$6(theme), Menu$6(), Alert$6(theme), Link$6(), Badge$6(), Input$d(theme), Skeleton$6());
}

var minfin = {
  palette: palette$6,
  typography: typography$6,
  componentsOverride: ComponentsOverrides$6
};

// ----------------------------------------------------------------------
var lighterenRate$7 = 1.5;
var lightenRate$7 = 7.5;
var darkenRate$7 = 15;
var darkerRate$7 = 30;
var primary$7 = '#DB4141';
var secondary$7 = '#F7BFBC';
var warning$7 = '#F57069';
var success$7 = '#FFC9AB';
var info$7 = '#F2D0B2';
var error$7 = '#802121';
var hero$7 = '#B00C2F';
var PRIMARY$7 = {
  lighter: /*#__PURE__*/tinycolor(primary$7).lighten(lighterenRate$7).toHexString(),
  main: primary$7,
  light: /*#__PURE__*/tinycolor(primary$7).lighten(lightenRate$7).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$7).darken(darkenRate$7).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$7).darken(darkerRate$7).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$7 = {
  lighter: '#D6E4FF',
  main: secondary$7,
  light: /*#__PURE__*/tinycolor(secondary$7).lighten(lightenRate$7).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$7).darken(darkenRate$7).toHexString(),
  contrastText: '#ccc',
  darker: '#E87780'
};
var INFO$7 = {
  lighter: '#FCEDF2',
  main: info$7,
  light: /*#__PURE__*/tinycolor(info$7).lighten(lightenRate$7).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$7).darken(darkenRate$7).toHexString(),
  contrastText: '#fff',
  darker: '#F7BFBC'
};
var SUCCESS$7 = {
  lighter: '#E9FCD4',
  main: success$7,
  light: /*#__PURE__*/tinycolor(success$7).lighten(lightenRate$7).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$7).darken(darkenRate$7).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$7 = {
  lighter: '#FFF7CD',
  main: warning$7,
  light: /*#__PURE__*/tinycolor(warning$7).lighten(lightenRate$7).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$7).darken(darkenRate$7).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$7 = {
  lighter: '#FFE7D9',
  main: error$7,
  light: /*#__PURE__*/tinycolor(error$7).lighten(lightenRate$7).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$7).darken(darkenRate$7).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$7 = {
  primary: /*#__PURE__*/createGradient(PRIMARY$7.light, PRIMARY$7.main),
  info: /*#__PURE__*/createGradient(INFO$7.light, INFO$7.main),
  success: /*#__PURE__*/createGradient(SUCCESS$7.light, SUCCESS$7.main),
  warning: /*#__PURE__*/createGradient(WARNING$7.light, WARNING$7.main),
  error: /*#__PURE__*/createGradient(ERROR$7.light, ERROR$7.main),
  one: '#EB323F',
  two: '#981127'
};
var palette$7 = {
  hero: hero$7,
  primary: /*#__PURE__*/_extends({}, PRIMARY$7),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$7),
  info: /*#__PURE__*/_extends({}, INFO$7),
  success: /*#__PURE__*/_extends({}, SUCCESS$7),
  warning: /*#__PURE__*/_extends({}, WARNING$7),
  error: /*#__PURE__*/_extends({}, ERROR$7),
  grey: GREY,
  gradients: GRADIENTS$7,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": GREY[100],
    neutral: GREY[200],
    warning: '#FEF1F0',
    error: '#ECECEC',
    info: 'rgba(174 33 3, 0.4)',
    infoGadient: /*#__PURE__*/createGradient(INFO$7.lighter, INFO$7.light),
    success: '#FFE7CE'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: PRIMARY$7.main,
    toggle2: PRIMARY$7.light,
    toggle3: '#FCEDF2',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#DB4141',
    colorLeft: '#DB4141',
    colorHover: '#802121',
    colorActive: '#000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(139.78deg, #EB323F 3.01%, #981127 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$7).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#F4F4F4',
    two: '#FFEEEE'
  },
  shadows: {
    card: '0px 2px 24px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$7 = "Glober SemiBold";
var typography$7 = {
  fontFamily: FONT_PRIMARY$7,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$7(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$7(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$e(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$7(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$7(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$7(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$7(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$7(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n\n        @font-face {\n          font-family: 'Glober SemiBold';\n          src: url(/fonts/Glober/GloberSemiBoldFree.eot);\n          src: url(/fonts/Glober/GloberSemiBoldFree.eot?#iefix) format('embedded-opentype'),\n              url(/fonts/Glober/GloberSemiBoldFree.woff2) format('woff2'),\n              url(/fonts/Glober/GloberSemiBoldFree.woff) format('woff'),\n              url(/fonts/Glober/GloberSemiBoldFree.ttf) format('truetype');\n          font-weight: 600;\n          font-style: normal;\n          font-display: swap;\n      }\n      \n\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$7(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$7(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$7(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$7(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$7() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$7(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

function Menu$7() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$7(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

function Link$7() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$7() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$f(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$7() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$7(theme) {
  return Object.assign(AppBar$7(theme), Card$7(theme), Input$e(theme), Paper$7(theme), Button$7(theme), Tooltip$7(theme), Backdrop$7(theme), Typography$7(theme), CssBaseline$7(theme), Autocomplete$7(theme), ToggleButton$7(theme), IconButton$7(theme), Picker$7(), Rating$7(theme), Menu$7(), Alert$7(theme), Link$7(), Badge$7(), Input$f(theme), Skeleton$7());
}

var pimu = {
  palette: palette$7,
  typography: typography$7,
  componentsOverride: ComponentsOverrides$7
};

// ----------------------------------------------------------------------
var lighterenRate$8 = 1.5;
var lightenRate$8 = 7.5;
var darkenRate$8 = 15;
var darkerRate$8 = 30;
var primary$8 = '#1B719E';
var secondary$8 = '#A6CCBE';
var warning$8 = '#3AAEEC';
var success$8 = '#1B719E';
var info$8 = '#F2D0B2';
var error$8 = '#FF9690';
var hero$8 = '#2188bf';
var PRIMARY$8 = {
  lighter: /*#__PURE__*/tinycolor(primary$8).lighten(lighterenRate$8).toHexString(),
  main: primary$8,
  light: /*#__PURE__*/tinycolor(primary$8).lighten(lightenRate$8).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$8).darken(darkenRate$8).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$8).darken(darkerRate$8).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$8 = {
  lighter: '#D6E4FF',
  main: secondary$8,
  light: /*#__PURE__*/tinycolor(secondary$8).lighten(lightenRate$8).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$8).darken(darkenRate$8).toHexString(),
  contrastText: '#ccc',
  darker: '#E87780'
};
var INFO$8 = {
  lighter: '#FCEDF2',
  main: info$8,
  light: /*#__PURE__*/tinycolor(info$8).lighten(lightenRate$8).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$8).darken(darkenRate$8).toHexString(),
  contrastText: '#fff',
  darker: '#F7BFBC'
};
var SUCCESS$8 = {
  lighter: '#E9FCD4',
  main: success$8,
  light: /*#__PURE__*/tinycolor(success$8).lighten(lightenRate$8).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$8).darken(darkenRate$8).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$8 = {
  lighter: '#FFF7CD',
  main: warning$8,
  light: /*#__PURE__*/tinycolor(warning$8).lighten(lightenRate$8).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$8).darken(darkenRate$8).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$8 = {
  lighter: '#FFE7D9',
  main: error$8,
  light: /*#__PURE__*/tinycolor(error$8).lighten(lightenRate$8).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$8).darken(darkenRate$8).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$8 = {
  primary: /*#__PURE__*/createGradient(PRIMARY$8.light, PRIMARY$8.main),
  info: /*#__PURE__*/createGradient(INFO$8.light, INFO$8.main),
  success: /*#__PURE__*/createGradient(SUCCESS$8.light, SUCCESS$8.main),
  warning: /*#__PURE__*/createGradient(WARNING$8.light, WARNING$8.main),
  error: /*#__PURE__*/createGradient(ERROR$8.light, ERROR$8.main),
  one: '#2AB6CA',
  two: '#28909B'
};
var palette$8 = {
  hero: hero$8,
  primary: /*#__PURE__*/_extends({}, PRIMARY$8),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$8),
  info: /*#__PURE__*/_extends({}, INFO$8),
  success: /*#__PURE__*/_extends({}, SUCCESS$8),
  warning: /*#__PURE__*/_extends({}, WARNING$8),
  error: /*#__PURE__*/_extends({}, ERROR$8),
  grey: GREY,
  gradients: GRADIENTS$8,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": '#fff',
    neutral: GREY[100],
    warning: '#ECECEC',
    error: '#edd1d1',
    info: 'rgba(174 33 3, 0.4)',
    infoGadient: /*#__PURE__*/createGradient(INFO$8.lighter, INFO$8.light),
    success: '#FFE7CE'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: PRIMARY$8.main,
    toggle2: PRIMARY$8.dark,
    toggle3: '#EDFCFA',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#7C7D80',
    colorLeft: '#2AB6CA',
    colorHover: '#802121',
    colorActive: '#000',
    bg: '#FFF'
  },
  baseButton: {
    bgColor: 'linear-gradient(139.78deg, #2AB6CA 3.01%, #28909B 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$8).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#F1FBFC',
    two: '#F1FCF7'
  },
  shadows: {
    card: '0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$8 = "Avenir Next Cyr";
var typography$8 = {
  fontFamily: FONT_PRIMARY$8,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$8(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$8(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$g(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.16)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$8(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$8(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$8(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$8(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$8(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$8(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$8(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$8(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(180deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$8(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$8() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$8(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

function Menu$8() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$8(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

function Link$8() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$8() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$h(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$8() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$8(theme) {
  return Object.assign(AppBar$8(theme), Card$8(theme), Input$g(theme), Paper$8(theme), Button$8(theme), Tooltip$8(theme), Backdrop$8(theme), Typography$8(theme), CssBaseline$8(theme), Autocomplete$8(theme), ToggleButton$8(theme), IconButton$8(theme), Picker$8(), Rating$8(theme), Menu$8(), Alert$8(theme), Link$8(), Badge$8(), Input$h(theme), Skeleton$8());
}

var ncn = {
  palette: palette$8,
  typography: typography$8,
  componentsOverride: ComponentsOverrides$8
};

// ----------------------------------------------------------------------
var lighterenRate$9 = 1.5;
var lightenRate$9 = 7.5;
var darkenRate$9 = 15;
var darkerRate$9 = 30;
var primary$9 = '#2873AA';
var secondary$9 = '#5F7D8E';
var warning$9 = '#FF352A';
var success$9 = '#4DAE00';
var info$9 = '#C2C4CB';
var error$9 = '#E20B00';
var hero$9 = '#5F7D8E';
var PRIMARY$9 = {
  lighter: /*#__PURE__*/tinycolor(primary$9).lighten(lighterenRate$9).toHexString(),
  main: primary$9,
  light: /*#__PURE__*/tinycolor(primary$9).lighten(lightenRate$9).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$9).darken(darkenRate$9).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$9).darken(darkerRate$9).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$9 = {
  lighter: '#D6E4FF',
  main: secondary$9,
  light: /*#__PURE__*/tinycolor(secondary$9).lighten(lightenRate$9).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$9).darken(darkenRate$9).toHexString(),
  contrastText: '#ccc',
  darker: '#E87780'
};
var INFO$9 = {
  lighter: '#FCEDF2',
  main: info$9,
  light: /*#__PURE__*/tinycolor(info$9).lighten(lightenRate$9).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$9).darken(darkenRate$9).toHexString(),
  contrastText: '#fff',
  darker: '#F7BFBC'
};
var SUCCESS$9 = {
  lighter: '#E9FCD4',
  main: success$9,
  light: /*#__PURE__*/tinycolor(success$9).lighten(lightenRate$9).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$9).darken(darkenRate$9).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$9 = {
  lighter: '#FFF7CD',
  main: warning$9,
  light: /*#__PURE__*/tinycolor(warning$9).lighten(lightenRate$9).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$9).darken(darkenRate$9).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$9 = {
  lighter: '#FFE7D9',
  main: error$9,
  light: /*#__PURE__*/tinycolor(error$9).lighten(lightenRate$9).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$9).darken(darkenRate$9).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$9 = {
  primary: /*#__PURE__*/createGradient(PRIMARY$9.light, PRIMARY$9.main),
  info: /*#__PURE__*/createGradient(INFO$9.light, INFO$9.main),
  success: /*#__PURE__*/createGradient(SUCCESS$9.light, SUCCESS$9.main),
  warning: /*#__PURE__*/createGradient(WARNING$9.light, WARNING$9.main),
  error: /*#__PURE__*/createGradient(ERROR$9.light, ERROR$9.main),
  one: '#A9341E',
  two: '#7A232E'
};
var palette$9 = {
  hero: hero$9,
  primary: /*#__PURE__*/_extends({}, PRIMARY$9),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$9),
  info: /*#__PURE__*/_extends({}, INFO$9),
  success: /*#__PURE__*/_extends({}, SUCCESS$9),
  warning: /*#__PURE__*/_extends({}, WARNING$9),
  error: /*#__PURE__*/_extends({}, ERROR$9),
  grey: GREY,
  gradients: GRADIENTS$9,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": GREY[100],
    neutral: GREY[200],
    warning: '#FEF1F0',
    error: '#ECECEC',
    info: 'rgba(174 33 3, 0.4)',
    infoGadient: /*#__PURE__*/createGradient(INFO$9.lighter, INFO$9.light),
    success: '#FFE7CE'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: '#E7CBC7',
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: hero$9,
    toggle2: /*#__PURE__*/tinycolor(hero$9).lighten(lightenRate$9).toHexString(),
    toggle3: '#F5F5F5',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#7C7D80',
    colorLeft: '#B4193C',
    colorHover: '#E20B00',
    colorActive: '#000000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(139.78deg, #A9341E 3.01%, #7A232E 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$9).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#FFEEEE',
    two: '#F5F5F5'
  },
  shadows: {
    card: '0px 2px 24px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$9 = "Avenir Next Cyr";
var typography$9 = {
  fontFamily: FONT_PRIMARY$9,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$9(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$9(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$i(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: styles.alpha(theme.palette.grey[500], 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$9(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$9(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$9(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$9(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$9(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$9(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$9(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$9(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$9(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& span > svg': {
            color: theme.palette.hero
          }
        }
      }
    }
  };
}

function Picker$9() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$9(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

function Menu$9() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$9(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

function Link$9() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$9() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$j(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$9() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$9(theme) {
  return Object.assign(AppBar$9(theme), Card$9(theme), Input$i(theme), Paper$9(theme), Button$9(theme), Tooltip$9(theme), Backdrop$9(theme), Typography$9(theme), CssBaseline$9(theme), Autocomplete$9(theme), ToggleButton$9(theme), IconButton$9(theme), Picker$9(), Rating$9(theme), Menu$9(), Alert$9(theme), Link$9(), Badge$9(), Input$j(theme), Skeleton$9());
}

var sibgmu = {
  palette: palette$9,
  typography: typography$9,
  componentsOverride: ComponentsOverrides$9
};

// ----------------------------------------------------------------------
var lighterenRate$a = 1.5;
var lightenRate$a = 7.5;
var darkenRate$a = 15;
var darkerRate$a = 30;
var primary$a = '#AA9161';
var secondary$a = '#D0C8B5';
var warning$a = '#F57069';
var success$a = '#E3F8D2';
var info$a = '#B5A788';
var error$a = '#F57069';
var hero$a = '#6D0C8B5';
var PRIMARY$a = {
  lighter: /*#__PURE__*/tinycolor(primary$a).lighten(lighterenRate$a).toHexString(),
  main: primary$a,
  light: /*#__PURE__*/tinycolor(primary$a).lighten(lightenRate$a).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$a).darken(darkenRate$a).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$a).darken(darkerRate$a).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$a = {
  lighter: '#D6E4FF',
  main: secondary$a,
  light: /*#__PURE__*/tinycolor(secondary$a).lighten(lightenRate$a).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$a).darken(darkenRate$a).toHexString(),
  contrastText: '#A2916A',
  darker: '#827657'
};
var INFO$a = {
  lighter: '#D0F2FF',
  main: info$a,
  light: /*#__PURE__*/tinycolor(info$a).lighten(lightenRate$a).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$a).darken(darkenRate$a).toHexString(),
  contrastText: '#fff',
  darker: '#04297A'
};
var SUCCESS$a = {
  lighter: '#E9FCD4',
  main: success$a,
  light: /*#__PURE__*/tinycolor(success$a).lighten(lightenRate$a).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$a).darken(darkenRate$a).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$a = {
  lighter: '#FFF7CD',
  main: warning$a,
  light: /*#__PURE__*/tinycolor(warning$a).lighten(lightenRate$a).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$a).darken(darkenRate$a).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$a = {
  lighter: '#FFE7D9',
  main: error$a,
  light: /*#__PURE__*/tinycolor(error$a).lighten(lightenRate$a).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$a).darken(darkenRate$a).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$a = {
  primary: /*#__PURE__*/createGradient(PRIMARY$a.light, PRIMARY$a.main),
  info: /*#__PURE__*/createGradient(INFO$a.light, INFO$a.main),
  success: /*#__PURE__*/createGradient(SUCCESS$a.light, SUCCESS$a.main),
  warning: /*#__PURE__*/createGradient(WARNING$a.light, WARNING$a.main),
  error: /*#__PURE__*/createGradient(ERROR$a.light, ERROR$a.main),
  one: '#B5A788',
  two: '#AA9161'
};
var palette$a = {
  hero: hero$a,
  primary: /*#__PURE__*/_extends({}, PRIMARY$a),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$a),
  info: /*#__PURE__*/_extends({}, INFO$a),
  success: /*#__PURE__*/_extends({}, SUCCESS$a),
  warning: /*#__PURE__*/_extends({}, WARNING$a),
  error: /*#__PURE__*/_extends({}, ERROR$a),
  grey: GREY,
  gradients: GRADIENTS$a,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": GREY[100],
    neutral: GREY[200],
    warning: '#FEF1F0',
    error: '#ECECEC',
    info: '#FFEED6',
    infoGadient: /*#__PURE__*/createGradient(INFO$a.lighter, INFO$a.light),
    success: '#FFE7CE'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: '#A2916A',
    toggle2: '#F57069',
    toggle3: '#F2F2F1',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#828383',
    colorLeft: '#F57069',
    colorHover: '#AA9161',
    colorActive: '#000000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(163.61deg, #B5A788 3.01%, #AA9161 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$a).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#F6F4F0',
    two: '#F2F2F1'
  },
  shadows: {
    card: '0px 2.13072px 26.634px rgba(78, 72, 190, 0.08)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$a = 'Roboto';
var typography$a = {
  fontFamily: FONT_PRIMARY$a,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: '2.0rem',
    fontWeight: 500
  },
  h2: {
    fontSize: '1.7rem',
    fontWeight: 500
  },
  h3: {
    fontSize: '1.64rem',
    fontWeight: 500
  },
  h4: {
    fontSize: '1.5rem'
  },
  h5: {
    fontSize: '1.285rem'
  },
  h6: {
    fontSize: '1.05rem'
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/pxToRem(12)
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
    fontSize: /*#__PURE__*/pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$a(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$a(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$k(theme) {
  return {
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: theme.palette.grey
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$a(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.info.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.info.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$a(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$a(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.6);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$a(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$a(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$a(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$a(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$a(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$a(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$a() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$a(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Menu$a() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$a(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Link$a() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$a() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$l(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$a() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$a(theme) {
  return Object.assign(AppBar$a(theme), Card$a(theme), Input$k(theme), Paper$a(theme), Button$a(theme), Tooltip$a(theme), Backdrop$a(theme), Typography$a(theme), CssBaseline$a(theme), Autocomplete$a(theme), ToggleButton$a(theme), IconButton$a(theme), Picker$a(), Rating$a(theme), Menu$a(), Alert$a(theme), Link$a(), Badge$a(), Input$l(theme), Skeleton$a());
}

var mositalmed = {
  palette: palette$a,
  typography: typography$a,
  componentsOverride: ComponentsOverrides$a
};

// ----------------------------------------------------------------------
var lighterenRate$b = 1.5;
var lightenRate$b = 7.5;
var darkenRate$b = 15;
var darkerRate$b = 30;
var primary$b = '#AC729C';
var secondary$b = '#C8316C';
var warning$b = '#FF4D75';
var success$b = '#FFE7CE';
var info$b = '#D9DEEC';
var error$b = '#D41442';
var hero$b = '#BD8AAD';
var PRIMARY$b = {
  lighter: /*#__PURE__*/tinycolor(primary$b).lighten(lighterenRate$b).toHexString(),
  main: primary$b,
  light: /*#__PURE__*/tinycolor(primary$b).lighten(lightenRate$b).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$b).darken(darkenRate$b).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$b).darken(darkerRate$b).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$b = {
  lighter: '#D6E4FF',
  main: secondary$b,
  light: /*#__PURE__*/tinycolor(secondary$b).lighten(lightenRate$b).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$b).darken(darkenRate$b).toHexString(),
  contrastText: '#ccc',
  darker: '#E87780'
};
var INFO$b = {
  lighter: '#F8F1FC',
  main: info$b,
  light: /*#__PURE__*/tinycolor(info$b).lighten(lightenRate$b).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$b).darken(darkenRate$b).toHexString(),
  contrastText: '#fff',
  darker: '#F7BFBC'
};
var SUCCESS$b = {
  lighter: '#E9FCD4',
  main: success$b,
  light: /*#__PURE__*/tinycolor(success$b).lighten(lightenRate$b).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$b).darken(darkenRate$b).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$b = {
  lighter: '#FFF7CD',
  main: warning$b,
  light: /*#__PURE__*/tinycolor(warning$b).lighten(lightenRate$b).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$b).darken(darkenRate$b).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$b = {
  lighter: '#FFE7D9',
  main: error$b,
  light: /*#__PURE__*/tinycolor(error$b).lighten(lightenRate$b).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$b).darken(darkenRate$b).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$b = {
  primary: /*#__PURE__*/createGradient(PRIMARY$b.light, PRIMARY$b.main),
  info: /*#__PURE__*/createGradient(INFO$b.light, INFO$b.main),
  success: /*#__PURE__*/createGradient(SUCCESS$b.light, SUCCESS$b.main),
  warning: /*#__PURE__*/createGradient(WARNING$b.light, WARNING$b.main),
  error: /*#__PURE__*/createGradient(ERROR$b.light, ERROR$b.main),
  one: '#AC729C',
  two: '#734464'
};
var palette$b = {
  hero: hero$b,
  primary: /*#__PURE__*/_extends({}, PRIMARY$b),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$b),
  info: /*#__PURE__*/_extends({}, INFO$b),
  success: /*#__PURE__*/_extends({}, SUCCESS$b),
  warning: /*#__PURE__*/_extends({}, WARNING$b),
  error: /*#__PURE__*/_extends({}, ERROR$b),
  grey: GREY,
  gradients: GRADIENTS$b,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": '#fff',
    neutral: GREY[200],
    warning: '#ECECEC',
    error: '#ECECEC',
    info: '#F8F1FC',
    infoGadient: /*#__PURE__*/createGradient(INFO$b.light, INFO$b.main),
    success: '#FFEED6'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabledBackground: '#85CCCA',
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: hero$b,
    toggle2: /*#__PURE__*/tinycolor(hero$b).lighten(lightenRate$b).toHexString(),
    toggle3: '#F5F5F5',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#414D4C',
    colorLeft: '#AC729C',
    colorHover: '#744164',
    colorActive: '#000000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(139.78deg, #AC729C 3.01%, #734464 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$b).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#F9F1FC',
    two: '#FEF0F5'
  },
  shadows: {
    card: '0px 2px 35px rgba(78, 72, 190, 0.08)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$b = "Avenir Next Cyr";
var typography$b = {
  fontFamily: FONT_PRIMARY$b,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$b(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$b(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$m(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: styles.alpha(theme.palette.grey[500], 0.32)
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$b(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$b(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$b(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$b(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$b(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$b(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$b(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$b(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$b(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& span > svg': {
            color: theme.palette.hero
          }
        }
      }
    }
  };
}

function Picker$b() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$b(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: theme.palette.primary.main
        },
        root: {
          color: theme.palette.primary.main,
          '& span > span': {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

function Menu$b() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$b(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

function Link$b() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$b() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$n(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$b() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$b(theme) {
  return Object.assign(AppBar$b(theme), Card$b(theme), Input$m(theme), Paper$b(theme), Button$b(theme), Tooltip$b(theme), Backdrop$b(theme), Typography$b(theme), CssBaseline$b(theme), Autocomplete$b(theme), ToggleButton$b(theme), IconButton$b(theme), Picker$b(), Rating$b(theme), Menu$b(), Alert$b(theme), Link$b(), Badge$b(), Input$n(theme), Skeleton$b());
}

var skyfert = {
  palette: palette$b,
  typography: typography$b,
  componentsOverride: ComponentsOverrides$b
};

// ----------------------------------------------------------------------
var lighterenRate$c = 1.5;
var lightenRate$c = 7.5;
var darkenRate$c = 15;
var darkerRate$c = 30;
var primary$c = '#204568';
var secondary$c = '#4A6F93';
var warning$c = '#C76277';
var success$c = '#5CAA7F';
var info$c = '#BCC3D2';
var error$c = '#C76277';
var hero$c = '#426A90';
var PRIMARY$c = {
  lighter: /*#__PURE__*/tinycolor(primary$c).lighten(lighterenRate$c).toHexString(),
  main: primary$c,
  light: /*#__PURE__*/tinycolor(primary$c).lighten(lightenRate$c).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$c).darken(darkenRate$c).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$c).darken(darkerRate$c).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$c = {
  lighter: '#F6F4F0',
  main: secondary$c,
  light: /*#__PURE__*/tinycolor(secondary$c).lighten(lightenRate$c).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$c).darken(darkenRate$c).toHexString(),
  contrastText: '#ccc',
  darker: '#E87780'
};
var INFO$c = {
  lighter: '#F6F4F0',
  main: info$c,
  light: /*#__PURE__*/tinycolor(info$c).lighten(lightenRate$c).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$c).darken(darkenRate$c).toHexString(),
  contrastText: '#fff',
  darker: '#F7BFBC'
};
var SUCCESS$c = {
  lighter: '#F6F4F0',
  main: success$c,
  light: /*#__PURE__*/tinycolor(success$c).lighten(lightenRate$c).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$c).darken(darkenRate$c).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$c = {
  lighter: '#FEF1F0',
  main: warning$c,
  light: /*#__PURE__*/tinycolor(warning$c).lighten(lightenRate$c).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$c).darken(darkenRate$c).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$c = {
  lighter: '#FEF1F0',
  main: error$c,
  light: /*#__PURE__*/tinycolor(error$c).lighten(lightenRate$c).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$c).darken(darkenRate$c).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$c = {
  primary: /*#__PURE__*/createGradient(PRIMARY$c.light, PRIMARY$c.main),
  info: /*#__PURE__*/createGradient(INFO$c.light, INFO$c.main),
  success: /*#__PURE__*/createGradient(SUCCESS$c.light, SUCCESS$c.main),
  warning: /*#__PURE__*/createGradient(WARNING$c.light, WARNING$c.main),
  error: /*#__PURE__*/createGradient(ERROR$c.light, ERROR$c.main),
  one: '#073D5F',
  two: '#022D47'
};
var palette$c = {
  hero: hero$c,
  primary: /*#__PURE__*/_extends({}, PRIMARY$c),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$c),
  info: /*#__PURE__*/_extends({}, INFO$c),
  success: /*#__PURE__*/_extends({}, SUCCESS$c),
  warning: /*#__PURE__*/_extends({}, WARNING$c),
  error: /*#__PURE__*/_extends({}, ERROR$c),
  grey: GREY,
  gradients: GRADIENTS$c,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": '#fff',
    neutral: GREY[200],
    warning: '#FEF1F0',
    error: '#FEF1F0',
    info: '#EDF7FC',
    infoGadient: /*#__PURE__*/createGradient(SECONDARY$c.light, SECONDARY$c.lighter),
    success: '#D9EFE2'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabledBackground: '#F7F7F8',
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: hero$c,
    toggle2: /*#__PURE__*/tinycolor(hero$c).lighten(lightenRate$c).toHexString(),
    toggle3: '#F5F5F5',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#939FAE',
    colorLeft: '#426A90',
    colorHover: '#4A6F93',
    colorActive: '#000000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(139.78deg, #073D5F 3.01%, #022D47 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$c).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#E8F2F5',
    two: '#FEF1F0'
  },
  shadows: {
    card: '0px 2px 24px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$c = "Avenir Next Cyr";
var typography$c = {
  fontFamily: FONT_PRIMARY$c,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$c(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$c(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$o(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: '1px solid rgb(196 196 196)'
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid rgb(97, 87, 255, 0.3)'
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          '&:hover': {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          '&:before': {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderRadius: theme.spacing(0.8),
          backgroundColor: 'transparent',
          '&.Mui-focused': {
            backgroundColor: '#fff'
          },
          '& fieldset': {
            borderColor: styles.alpha(theme.palette.primary.light, 0.32)
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
            borderWidth: 2
          },
          '&.Mui-focused fieldset': {
            borderWidth: 2
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$c(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.secondary.main,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$c(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$c(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$c(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$c(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$c(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$c(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$c(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$c(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& span > svg': {
            color: theme.palette.hero
          }
        }
      }
    }
  };
}

function Picker$c() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$c(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: theme.palette.primary.main
        },
        root: {
          color: theme.palette.primary.main,
          '& span > span': {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

function Menu$c() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$c(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

function Link$c() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$c() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$p(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$c() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$c(theme) {
  return Object.assign(AppBar$c(theme), Card$c(theme), Input$o(theme), Paper$c(theme), Button$c(theme), Tooltip$c(theme), Backdrop$c(theme), Typography$c(theme), CssBaseline$c(theme), Autocomplete$c(theme), ToggleButton$c(theme), IconButton$c(theme), Picker$c(), Rating$c(theme), Menu$c(), Alert$c(theme), Link$c(), Badge$c(), Input$p(theme), Skeleton$c());
}

var white_fang = {
  palette: palette$c,
  typography: typography$c,
  componentsOverride: ComponentsOverrides$c
};

// ----------------------------------------------------------------------
var lighterenRate$d = 1.5;
var lightenRate$d = 7.5;
var darkenRate$d = 15;
var darkerRate$d = 30;
var primary$d = '#D81440';
var secondary$d = '#BE697C';
var warning$d = '#F57069';
var success$d = '#34DFA2';
var info$d = '#FFEED6';
var error$d = '#f44336';
var hero$d = '#D81440';
var PRIMARY$d = {
  lighter: /*#__PURE__*/tinycolor(primary$d).lighten(lighterenRate$d).toHexString(),
  main: primary$d,
  light: /*#__PURE__*/tinycolor(primary$d).lighten(lightenRate$d).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$d).darken(darkenRate$d).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$d).darken(darkerRate$d).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$d = {
  lighter: '#FCF1F1',
  main: secondary$d,
  light: /*#__PURE__*/tinycolor(secondary$d).lighten(lightenRate$d).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$d).darken(darkenRate$d).toHexString(),
  contrastText: '#ccc',
  darker: '#091A7A'
};
var INFO$d = {
  lighter: '#ECECEC',
  main: info$d,
  light: /*#__PURE__*/tinycolor(info$d).lighten(lightenRate$d).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$d).darken(darkenRate$d).toHexString(),
  contrastText: '#fff',
  darker: '#04297A'
};
var SUCCESS$d = {
  lighter: '##FFEED6',
  main: success$d,
  light: /*#__PURE__*/tinycolor(success$d).lighten(lightenRate$d).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$d).darken(darkenRate$d).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$d = {
  lighter: '#E3F8D2',
  main: warning$d,
  light: /*#__PURE__*/tinycolor(warning$d).lighten(lightenRate$d).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$d).darken(darkenRate$d).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$d = {
  lighter: '#FFE7D9',
  main: error$d,
  light: /*#__PURE__*/tinycolor(error$d).lighten(lightenRate$d).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$d).darken(darkenRate$d).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$d = {
  primary: /*#__PURE__*/createGradient(PRIMARY$d.light, PRIMARY$d.main),
  info: /*#__PURE__*/createGradient(INFO$d.light, INFO$d.main),
  success: /*#__PURE__*/createGradient(SUCCESS$d.light, SUCCESS$d.main),
  warning: /*#__PURE__*/createGradient(WARNING$d.light, WARNING$d.main),
  error: /*#__PURE__*/createGradient(ERROR$d.light, ERROR$d.main),
  one: '#D81440',
  two: '#C41139'
};
var palette$d = {
  hero: hero$d,
  primary: /*#__PURE__*/_extends({}, PRIMARY$d),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$d),
  info: /*#__PURE__*/_extends({}, INFO$d),
  success: /*#__PURE__*/_extends({}, SUCCESS$d),
  warning: /*#__PURE__*/_extends({}, WARNING$d),
  error: /*#__PURE__*/_extends({}, ERROR$d),
  grey: GREY,
  gradients: GRADIENTS$d,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": '#fff',
    neutral: GREY[200],
    warning: '#F8E5E3',
    error: '##F5D7D7',
    info: '#FCF1F1',
    infoGadient: /*#__PURE__*/createGradient(INFO$d.lighter, INFO$d.light),
    success: '#E3F8D2'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: '#BE697C',
    toggle2: '#D81440',
    toggle3: '#fff',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#808080',
    colorLeft: '#808080',
    colorHover: '#D81440',
    colorActive: '#000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(163.61deg, #D81440 3.01%, #C41139 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$d).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#FCF1F1',
    two: '#FEF1F0'
  },
  shadows: {
    card: '0px 2px 24px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$d = "Avenir Next Cyr";
var typography$d = {
  fontFamily: FONT_PRIMARY$d,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
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
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$d(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$d(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$q(theme) {
  return {
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: theme.palette.grey
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.dark,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$d(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.secondary.main,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$d(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$d(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.6);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$d(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$d(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$d(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$d(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$d(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$d(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$d() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$d(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Menu$d() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$d(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Link$d() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$d() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$r(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$d() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$d(theme) {
  return Object.assign(AppBar$d(theme), Card$d(theme), Input$q(theme), Paper$d(theme), Button$d(theme), Tooltip$d(theme), Backdrop$d(theme), Typography$d(theme), CssBaseline$d(theme), Autocomplete$d(theme), ToggleButton$d(theme), IconButton$d(theme), Picker$d(), Rating$d(theme), Menu$d(), Alert$d(theme), Link$d(), Badge$d(), Input$r(theme), Skeleton$d());
}

var kalinchenko = {
  palette: palette$d,
  typography: typography$d,
  componentsOverride: ComponentsOverrides$d
};

// ----------------------------------------------------------------------
var lighterenRate$e = 1.5;
var lightenRate$e = 7.5;
var darkenRate$e = 15;
var darkerRate$e = 30;
var primary$e = '#0E2F76';
var secondary$e = '#5D9ED1';
var warning$e = '#FF9690';
var success$e = '#4DAE00';
var info$e = '#398CB0';
var error$e = '#FF4D75';
var hero$e = '#0E2F76';
var PRIMARY$e = {
  lighter: /*#__PURE__*/tinycolor(primary$e).lighten(lighterenRate$e).toHexString(),
  main: primary$e,
  light: /*#__PURE__*/tinycolor(primary$e).lighten(lightenRate$e).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$e).darken(darkenRate$e).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$e).darken(darkerRate$e).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$e = {
  lighter: '#5D9ED1',
  main: secondary$e,
  light: /*#__PURE__*/tinycolor(secondary$e).lighten(lightenRate$e).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$e).darken(darkenRate$e).toHexString(),
  contrastText: '#D0F2FF',
  darker: '#827657'
};
var INFO$e = {
  lighter: '#D0F2FF',
  main: info$e,
  light: /*#__PURE__*/tinycolor(info$e).lighten(lightenRate$e).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$e).darken(darkenRate$e).toHexString(),
  contrastText: '#fff',
  darker: '#04297A'
};
var SUCCESS$e = {
  lighter: '#E9FCD4',
  main: success$e,
  light: /*#__PURE__*/tinycolor(success$e).lighten(lightenRate$e).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$e).darken(darkenRate$e).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$e = {
  lighter: '#FFF7CD',
  main: warning$e,
  light: /*#__PURE__*/tinycolor(warning$e).lighten(lightenRate$e).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$e).darken(darkenRate$e).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$e = {
  lighter: '#FFE7D9',
  main: error$e,
  light: /*#__PURE__*/tinycolor(error$e).lighten(lightenRate$e).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$e).darken(darkenRate$e).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$e = {
  primary: /*#__PURE__*/createGradient(PRIMARY$e.light, PRIMARY$e.main),
  info: /*#__PURE__*/createGradient(INFO$e.light, INFO$e.main),
  success: /*#__PURE__*/createGradient(SUCCESS$e.light, SUCCESS$e.main),
  warning: /*#__PURE__*/createGradient(WARNING$e.light, WARNING$e.main),
  error: /*#__PURE__*/createGradient(ERROR$e.light, ERROR$e.main),
  one: '#B5A788',
  two: '#AA9161'
};
var palette$e = {
  hero: hero$e,
  primary: /*#__PURE__*/_extends({}, PRIMARY$e),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$e),
  info: /*#__PURE__*/_extends({}, INFO$e),
  success: /*#__PURE__*/_extends({}, SUCCESS$e),
  warning: /*#__PURE__*/_extends({}, WARNING$e),
  error: /*#__PURE__*/_extends({}, ERROR$e),
  grey: GREY,
  gradients: GRADIENTS$e,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": '#fff',
    neutral: GREY[200],
    warning: '#F7F7F8',
    error: '#D9DEEC',
    info: '#F1F4FC',
    infoGadient: /*#__PURE__*/createGradient(INFO$e.lighter, INFO$e.light),
    success: '#FFEED6'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: '#5D9ED1',
    toggle2: '#5F79AE',
    toggle3: '#fff',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#7C7D80',
    colorLeft: '#0B2660',
    colorHover: '#5D9ED1',
    colorActive: '#000000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: ' linear-gradient(139.78deg, #0E2F76 3.01%, #0B2660 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$e).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#F1F4FC',
    two: '#F1FCF9'
  },
  shadows: {
    card: '0px 8px 24px 0px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$e = 'Avenir Next Cyr';
var typography$e = {
  fontFamily: FONT_PRIMARY$e,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: '2.0rem',
    fontWeight: 500
  },
  h2: {
    fontSize: '1.7rem',
    fontWeight: 500
  },
  h3: {
    fontSize: '1.64rem',
    fontWeight: 500
  },
  h4: {
    fontSize: '1.5rem'
  },
  h5: {
    fontSize: '1.285rem'
  },
  h6: {
    fontSize: '1.05rem'
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/pxToRem(12)
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
    fontSize: /*#__PURE__*/pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$e(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$e(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$s(theme) {
  return {
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: '1px solid rgb(196 196 196)'
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid rgb(97, 87, 255, 0.3)'
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          '&:hover': {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          '&:before': {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: 'transparent',
          '&.Mui-focused': {
            backgroundColor: '#fff'
          },
          '& fieldset': {
            borderColor: theme.palette.grey
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
            borderWidth: '2px'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '2px'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$e(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.secondary.main,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.info.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.info.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$e(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$e(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.6);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$e(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$e(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$e(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$e(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$e(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none !important',
          background: "background: linear-gradient(139.78deg, " + theme.palette.primary.main + " 3.01%, #0B2660 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$e(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$e() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$e(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Menu$e() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$e(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Link$e() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$e() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$t(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$e() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background:
            //'linear-gradient(120deg,transparent,rgba(145, 158, 171, 0.5),transparent) '
            'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%)'
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$e(theme) {
  return Object.assign(AppBar$e(theme), Card$e(theme), Input$s(theme), Paper$e(theme), Button$e(theme), Tooltip$e(theme), Backdrop$e(theme), Typography$e(theme), CssBaseline$e(theme), Autocomplete$e(theme), ToggleButton$e(theme), IconButton$e(theme), Picker$e(), Rating$e(theme), Menu$e(), Alert$e(theme), Link$e(), Badge$e(), Input$t(theme), Skeleton$e());
}

var celt = {
  palette: palette$e,
  typography: typography$e,
  componentsOverride: ComponentsOverrides$e
};

// ----------------------------------------------------------------------
var lighterenRate$f = 1.5;
var lightenRate$f = 7.5;
var darkenRate$f = 15;
var darkerRate$f = 30;
var primary$f = '#204568';
var secondary$f = '#4A6F93';
var warning$f = '#C76277';
var success$f = '#5CAA7F';
var info$f = '#BCC3D2';
var error$f = '#C76277';
var hero$f = '#426A90';
var PRIMARY$f = {
  lighter: /*#__PURE__*/tinycolor(primary$f).lighten(lighterenRate$f).toHexString(),
  main: primary$f,
  light: /*#__PURE__*/tinycolor(primary$f).lighten(lightenRate$f).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$f).darken(darkenRate$f).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$f).darken(darkerRate$f).toHexString(),
  contrastText: '#fff'
};
var SECONDARY$f = {
  lighter: '#F6F4F0',
  main: secondary$f,
  light: /*#__PURE__*/tinycolor(secondary$f).lighten(lightenRate$f).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$f).darken(darkenRate$f).toHexString(),
  contrastText: '#ccc',
  darker: '#E87780'
};
var INFO$f = {
  lighter: '#F6F4F0',
  main: info$f,
  light: /*#__PURE__*/tinycolor(info$f).lighten(lightenRate$f).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$f).darken(darkenRate$f).toHexString(),
  contrastText: '#fff',
  darker: '#F7BFBC'
};
var SUCCESS$f = {
  lighter: '#F6F4F0',
  main: success$f,
  light: /*#__PURE__*/tinycolor(success$f).lighten(lightenRate$f).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$f).darken(darkenRate$f).toHexString(),
  contrastText: '#ccc',
  darker: '#08660D'
};
var WARNING$f = {
  lighter: '#FEF1F0',
  main: warning$f,
  light: /*#__PURE__*/tinycolor(warning$f).lighten(lightenRate$f).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$f).darken(darkenRate$f).toHexString(),
  darker: '#7A4F01',
  contrastText: GREY[800]
};
var ERROR$f = {
  lighter: '#FEF1F0',
  main: error$f,
  light: /*#__PURE__*/tinycolor(error$f).lighten(lightenRate$f).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$f).darken(darkenRate$f).toHexString(),
  darker: '#7A0C2E',
  contrastText: '#fff'
};
var GRADIENTS$f = {
  primary: /*#__PURE__*/createGradient(PRIMARY$f.light, PRIMARY$f.main),
  info: /*#__PURE__*/createGradient(INFO$f.light, INFO$f.main),
  success: /*#__PURE__*/createGradient(SUCCESS$f.light, SUCCESS$f.main),
  warning: /*#__PURE__*/createGradient(WARNING$f.light, WARNING$f.main),
  error: /*#__PURE__*/createGradient(ERROR$f.light, ERROR$f.main),
  one: '#073D5F',
  two: '#022D47'
};
var palette$f = {
  hero: hero$f,
  primary: /*#__PURE__*/_extends({}, PRIMARY$f),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$f),
  info: /*#__PURE__*/_extends({}, INFO$f),
  success: /*#__PURE__*/_extends({}, SUCCESS$f),
  warning: /*#__PURE__*/_extends({}, WARNING$f),
  error: /*#__PURE__*/_extends({}, ERROR$f),
  grey: GREY,
  gradients: GRADIENTS$f,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: '#fff',
    "default": '#fff',
    neutral: GREY[200],
    warning: '#FEF1F0',
    error: '#FEF1F0',
    info: '#EDF7FC',
    infoGadient: /*#__PURE__*/createGradient(SECONDARY$f.light, SECONDARY$f.lighter),
    success: '#D9EFE2'
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabledBackground: '#F7F7F8',
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: hero$f,
    toggle2: /*#__PURE__*/tinycolor(hero$f).lighten(lightenRate$f).toHexString(),
    toggle3: '#F5F5F5',
    toggle4: '#fff'
  },
  sideBar: {
    color: '#939FAE',
    colorLeft: '#426A90',
    colorHover: '#4A6F93',
    colorActive: '#000000',
    bg: '#fff'
  },
  baseButton: {
    bgColor: 'linear-gradient(139.78deg, #073D5F 3.01%, #022D47 95.95%)',
    shadow: "0px 1px 4px " + /*#__PURE__*/tinycolor(secondary$f).setAlpha(0.3).toRgbString()
  },
  bgLight: {
    one: '#E8F2F5',
    two: '#FEF1F0'
  },
  shadows: {
    card: '0px 2px 24px rgba(0, 0, 0, 0.09)',
    firstHover: '0px 8px 32px 0px rgba(0, 0, 0, 0.18)'
  }
};

var FONT_PRIMARY$f = "Avenir Next Cyr";
var typography$f = {
  fontFamily: FONT_PRIMARY$f,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$f(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$f(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$u(theme) {
  return {
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-disabled': {
    //         '& svg': { color: theme.palette.text.disabled }
    //       }
    //     },
    //     input: {
    //       '&::placeholder': {
    //         opacity: 1,
    //         color: theme.palette.text.disabled
    //       }
    //     }
    //   }
    // },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottom: '1px solid rgb(196 196 196)'
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid rgb(97, 87, 255, 0.3)'
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          '&:hover': {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          '&:before': {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderRadius: theme.spacing(0.8),
          backgroundColor: 'transparent',
          '&.Mui-focused': {
            backgroundColor: '#fff'
          },
          '& fieldset': {
            borderColor: styles.alpha(theme.palette.primary.light, 0.32)
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
            borderWidth: 2
          },
          '&.Mui-focused fieldset': {
            borderWidth: 2
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$f(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          borderRadius: 5,
          fontStyle: 'normal',
          fontWeight: 500,
          boxShadow: 'none',
          border: 0,
          '&:hover': {
            border: 0,
            background: 'transparent'
          },
          '&.Mui-disabled': {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: '#fff !important'
          },
          '&.Mui-select': {
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            border: '1px solid #bdbdbd'
          }
        },
        containedPrimary: {
          color: '#fff',
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: 'none'
          }
        },
        containedSecondary: {
          color: theme.palette.secondary.main,
          background: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            background: theme.palette.bgLight.two,
            boxShadow: 'none'
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          '&:hover': {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: 'none'
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: '#fff',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          '&:hover': {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedSuccess: {
          color: '#fff',
          backgroundColor: theme.palette.success.main,
          '&:hover': {
            backgroundColor: theme.palette.success.light,
            boxShadow: 'none'
          }
        },
        containedWarning: {
          color: '#fff',
          backgroundColor: theme.palette.warning.main,
          '&:hover': {
            backgroundColor: theme.palette.warning.light,
            boxShadow: 'none'
          }
        },
        containedInfo: {
          color: '#fff',
          backgroundColor: theme.palette.info.main,
          '&:hover': {
            backgroundColor: theme.palette.info.light,
            boxShadow: 'none'
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$f(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$f(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.3);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$f(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$f(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$f(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$f(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$f(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(177.31deg, " + theme.palette.gradients.one + " 3.01%, " + theme.palette.gradients.two + " 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$f(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          '& span > svg': {
            color: theme.palette.hero
          }
        }
      }
    }
  };
}

function Picker$f() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$f(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        icon: {
          color: theme.palette.primary.main
        },
        root: {
          color: theme.palette.primary.main,
          '& span > span': {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

function Menu$f() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$f(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

function Link$f() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$f() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$v(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$f() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$f(theme) {
  return Object.assign(AppBar$f(theme), Card$f(theme), Input$u(theme), Paper$f(theme), Button$f(theme), Tooltip$f(theme), Backdrop$f(theme), Typography$f(theme), CssBaseline$f(theme), Autocomplete$f(theme), ToggleButton$f(theme), IconButton$f(theme), Picker$f(), Rating$f(theme), Menu$f(), Alert$f(theme), Link$f(), Badge$f(), Input$v(theme), Skeleton$f());
}

var vetcenter = {
  palette: palette$f,
  typography: typography$f,
  componentsOverride: ComponentsOverrides$f
};

var lightenRate$g = 7.5;
var darkenRate$g = 15;
var darkerRate$g = 30;
var primary$g = "#FF7009";
var secondary$g = "#434343";
var warning$g = "#FF0D00";
var success$g = "#FFEED6";
var info$g = "#DBB091";
var error$g = "#C8316C";
var hero$g = "#FF7009";
var PRIMARY$g = {
  lighter: "#FFDEC8",
  main: primary$g,
  light: /*#__PURE__*/tinycolor(primary$g).lighten(lightenRate$g).toHexString(),
  dark: /*#__PURE__*/tinycolor(primary$g).darken(darkenRate$g).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$g).darken(darkerRate$g).toHexString(),
  contrastText: "#fff"
};
var SECONDARY$g = {
  lighter: "#D6E4FF",
  main: secondary$g,
  light: /*#__PURE__*/tinycolor(secondary$g).lighten(lightenRate$g).toHexString(),
  dark: /*#__PURE__*/tinycolor(secondary$g).darken(darkenRate$g).toHexString(),
  darker: /*#__PURE__*/tinycolor(primary$g).darken(darkerRate$g).toHexString(),
  contrastText: "#ccc"
};
var INFO$g = {
  lighter: "#D0F2FF",
  main: info$g,
  light: /*#__PURE__*/tinycolor(info$g).lighten(lightenRate$g).toHexString(),
  dark: /*#__PURE__*/tinycolor(info$g).darken(darkenRate$g).toHexString(),
  contrastText: "#fff",
  darker: "#04297A"
};
var SUCCESS$g = {
  lighter: "#E9FCD4",
  main: success$g,
  light: /*#__PURE__*/tinycolor(success$g).lighten(lightenRate$g).toHexString(),
  dark: /*#__PURE__*/tinycolor(success$g).darken(darkenRate$g).toHexString(),
  contrastText: "#ccc",
  darker: "#08660D"
};
var WARNING$g = {
  lighter: "#FFF7CD",
  main: warning$g,
  light: /*#__PURE__*/tinycolor(warning$g).lighten(lightenRate$g).toHexString(),
  dark: /*#__PURE__*/tinycolor(warning$g).darken(darkenRate$g).toHexString(),
  darker: "#7A4F01",
  contrastText: GREY[800]
};
var ERROR$g = {
  lighter: "#FFE7D9",
  main: error$g,
  light: /*#__PURE__*/tinycolor(error$g).lighten(lightenRate$g).toHexString(),
  dark: /*#__PURE__*/tinycolor(error$g).darken(darkenRate$g).toHexString(),
  darker: "#7A0C2E",
  contrastText: "#fff"
};
var GRADIENTS$g = {
  primary: /*#__PURE__*/createGradient(PRIMARY$g.light, PRIMARY$g.main),
  info: /*#__PURE__*/createGradient(INFO$g.light, INFO$g.main),
  success: /*#__PURE__*/createGradient(SUCCESS$g.light, SUCCESS$g.main),
  warning: /*#__PURE__*/createGradient(WARNING$g.light, WARNING$g.main),
  error: /*#__PURE__*/createGradient(ERROR$g.light, ERROR$g.main),
  one: "#FF7009",
  two: "#E66305"
};
var palette$g = {
  hero: hero$g,
  primary: /*#__PURE__*/_extends({}, PRIMARY$g),
  secondary: /*#__PURE__*/_extends({}, SECONDARY$g),
  info: /*#__PURE__*/_extends({}, INFO$g),
  success: /*#__PURE__*/_extends({}, SUCCESS$g),
  warning: /*#__PURE__*/_extends({}, WARNING$g),
  error: /*#__PURE__*/_extends({}, ERROR$g),
  grey: GREY,
  gradients: GRADIENTS$g,
  divider: GREY[50024],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    boby2: GREY[600],
    subtitle2: GREY[50080],
    disabled: GREY[400]
  },
  background: {
    paper: "#fff",
    "default": "#fff",
    neutral: GREY[200],
    warning: "#FEF1F0",
    error: "#FEF1F0",
    info: "#FFF0E6",
    infoGadient: /*#__PURE__*/createGradient(INFO$g.lighter, INFO$g.light),
    success: "#FCF3ED"
  },
  action: {
    active: GREY[600],
    hover: GREY[5008],
    selected: GREY[50016],
    disabled: GREY[50080],
    disabledBackground: GREY[50024],
    focus: GREY[50024],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    toggle1: "#FC8737",
    toggle2: "#FF7009",
    toggle3: "#EDEDED",
    toggle4: "#fff"
  },
  sideBar: {
    color: "#848281",
    colorLeft: "#848281",
    colorHover: "#FF7009",
    colorActive: "#000",
    bg: "#fff"
  },
  baseButton: {
    bgColor: "linear-gradient(139.78deg, #FF7009 3.01%, #E66305 95.95%);",
    shadow: "0px 4px 15px 0px rgba(35, 40, 48, 0.08)"
  },
  bgLight: {
    one: "#F1FCF9",
    two: "#FFF0E6"
  },
  shadows: {
    card: "0px 2px 24px rgba(0, 0, 0, 0.09)",
    firstHover: "0px 8px 32px 0px rgba(0, 0, 0, 0.18)"
  }
};

var FONT_PRIMARY$g = "Avenir Next Cyr";
var typography$g = {
  fontFamily: FONT_PRIMARY$g,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2.0rem",
    fontWeight: 500
  },
  h2: {
    fontSize: "1.7rem",
    fontWeight: 500
  },
  h3: {
    fontSize: "1.64rem",
    fontWeight: 500
  },
  h4: {
    fontSize: "1.5rem"
  },
  h5: {
    fontSize: "1.285rem"
  },
  h6: {
    fontSize: "1.05rem"
  },
  subtitle1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  subtitle2: {
    fontWeight: 450,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(12)
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
    fontSize: /*#__PURE__*/paletteFuncs.pxToRem(14)
  }
};

// ----------------------------------------------------------------------
function Card$g(theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1)
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Paper$g(theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          backgroundSize: "cover",
          boxSizing: "border-box",
          boxShadow: theme.palette.shadows.card,
          transition: "none"
        }
      }
    }
  };
}

function Input$w(theme) {
  return {
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottom: "1px solid rgb(196 196 196)"
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid rgb(97, 87, 255, 0.3)"
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: styles.alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: styles.alpha(theme.palette.grey[500], 0.16)
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: styles.alpha(theme.palette.grey[500], 0.48)
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(0.8),
          backgroundColor: "transparent",
          "&.Mui-focused": {
            backgroundColor: "#fff"
          },
          "& fieldset": {
            borderColor: theme.palette.primary.lighter
          },
          "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: styles.alpha(theme.palette.primary.main, 0.2)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.main,
            borderWidth: "2px"
          },
          "&.Mui-focused fieldset": {
            borderWidth: "2px"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Button$g(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: "inherit"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "inherit",
          borderRadius: 5,
          fontStyle: "normal",
          fontWeight: 500,
          boxShadow: "none",
          border: 0,
          "&:hover": {
            border: 0
          },
          "&.Mui-disabled": {
            background: theme.palette.baseButton.bgColor + " !important",
            opacity: theme.palette.action.disabledOpacity,
            color: "#fff !important"
          },
          "&.Mui-select": {
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
            border: "1px solid #bdbdbd"
          }
        },
        containedPrimary: {
          color: "#fff",
          background: theme.palette.baseButton.bgColor,
          boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            background: theme.palette.baseButton.bgColor,
            opacity: 0.8,
            boxShadow: "none"
          }
        },
        containedSecondary: {
          color: theme.palette.hero,
          background: theme.palette.bgLight.two,
          boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            background: theme.palette.bgLight.one,
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.bgLight.one,
          boxShadow: theme.palette.baseButton.shadow,
          "&:hover": {
            backgroundColor: theme.palette.bgLight.two,
            color: theme.palette.primary.dark,
            boxShadow: "none"
          }
        },
        outlinedInfo: {
          color: theme.palette.primary.main,
          backgroundColor: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            color: theme.palette.primary.dark
          }
        },
        outlinedSuccess: {
          color: theme.palette.primary.dark,
          backgroundColor: theme.palette.success.light,
          "&:hover": {
            color: theme.palette.primary.darker,
            backgroundColor: theme.palette.success.light,
            boxShadow: "none"
          }
        },
        containedSuccess: {
          color: "#fff",
          backgroundColor: theme.palette.success.main,
          "&:hover": {
            backgroundColor: theme.palette.success.light,
            boxShadow: "none"
          }
        },
        containedWarning: {
          color: "#fff",
          backgroundColor: theme.palette.warning.main,
          "&:hover": {
            backgroundColor: theme.palette.warning.light,
            boxShadow: "none"
          }
        },
        containedInfo: {
          color: "#fff",
          backgroundColor: theme.palette.info.main,
          "&:hover": {
            backgroundColor: theme.palette.info.light,
            boxShadow: "none"
          }
        },
        textPrimary: {
          "&:hover": {
            background: "transparent",
            color: theme.palette.primary.dark
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Tooltip$g(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800]
        },
        arrow: {
          color: theme.palette.grey[800]
        }
      }
    }
  };
}

function Backdrop$g(theme) {
  var varLow = styles.alpha(theme.palette.grey[900], 0.92);
  var varHigh = styles.alpha(theme.palette.grey[900], 0.9);
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          //          backgroundColor: theme.palette.grey[600],
          background: ["rgb(22,28,36)", "-moz-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "-webkit-linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)", "linear-gradient(75deg, " + varLow + " 0%, " + varHigh + " 100%)"],
          "&.MuiBackdrop-invisible": {
            background: "transparent"
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Typography$g(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(2)
        },
        body2: {
          color: theme.palette.text.boby2
        },
        caption: {
          fontSize: 14
        },
        caption_date: {
          fontSize: 13
        },
        subtitle2: {
          color: theme.palette.text.subtitle2
        }
      }
    }
  };
}

function CssBaseline$g(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: "\n        *: {\n          margin: 0;\n          padding: 0;\n          boxSizing: border-box;\n        }\n        html: {\n          width: 100%;\n          height: 100%;\n          webkit-overflow-scrolling: touch;\n        }\n        body: {\n          width: 100%;\n          height: 100%;\n          background-color:" + theme.palette.background["default"] + ";\n        }\n        #root: {\n          width: 100%;\n          height: 100%;\n        }\n        img: {\n          display: block;\n          maxWidth: 100%;\n        }\n        @font-face {\n          font-family: 'Avenir Next Cyr';\n          src: url(/fonts/Avenir/AvenirNextCyr-Regular.eot);\n          src: local('Avenir Next Cyr Regular'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.eot?#iefix) format('embedded-opentype'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.woff) format('woff'),\n            url(/fonts/Avenir/AvenirNextCyr-Regular.ttf) format('truetype');\n          font-weight: normal;\n          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;\n        }\n      "
    }
  };
}

// ----------------------------------------------------------------------
function Autocomplete$g(theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.palette.shadows.card
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function ToggleButton$g(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          padding: "0px 12px",
          border: "1px solid " + theme.palette.action.toggle1,
          width: "100%",
          height: 42,
          boxSizing: "border-box",
          borderRadius: theme.spacing(0.6),
          textTransform: "none",
          fontStyle: "normal",
          fontWeight: 500,
          color: theme.palette.action.toggle2,
          background: theme.palette.action.toggle3,
          boxShadow: theme.palette.shadows.card,
          "&:hover": {
            color: theme.palette.action.toggle4,
            background: theme.palette.action.toggle2 + " !important"
          },
          "&.Mui-selected": {
            color: theme.palette.action.toggle4,
            backgroundColor: theme.palette.action.toggle1
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function AppBar$g() {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none !important",
          background: "linear-gradient(139.78deg, #FF7009 3.01%, #E66305 95.95%)"
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function IconButton$g(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& span > svg": {
            color: theme.palette.primary.main
          }
        }
      }
    }
  };
}

function Picker$g() {
  return {
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          backgroundColor: 'transparent'
        }
      }
    },
    MuiCalendarPicker: {
      styleOverrides: {
        root: {
          width: 300
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Rating$g(theme) {
  return {
    MuiRating: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.dark,
          "& span > span": {
            top: 0,
            left: 0
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Menu$g() {
  return {
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A'
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Alert$g(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        root: {
          // boxShadow: theme.palette.shadows.card,
          borderRadius: theme.spacing(1),
          "& .MuiAlert-icon": {
            fontSize: theme.spacing(4)
          }
        },
        standardWarning: {
          backgroundColor: theme.palette.background.warning,
          "& .MuiAlert-icon": {
            color: theme.palette.warning.main + " !important"
          }
        },
        standardError: {
          backgroundColor: theme.palette.background.error,
          "& .MuiAlert-icon": {
            color: theme.palette.error.main + " !important"
          }
        },
        standardInfo: {
          backgroundColor: theme.palette.background.info,
          "& .MuiAlert-icon": {
            color: theme.palette.info.main + " !important"
          }
        },
        standardSuccess: {
          backgroundColor: theme.palette.background.success,
          "& .MuiAlert-icon": {
            color: theme.palette.success.dark
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Link$g() {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }
    }
  };
}

function Badge$g() {
  return {
    MuiBadge: {
      styleOverrides: {
        colorWarning: {
          color: '#fff',
          fontWeight: 500
        }
      }
    }
  };
}

function Input$x(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.light,
          "&.Mui-selected": {
            color: theme.palette.text.primary
          }
        }
      }
    }
  };
}

// ----------------------------------------------------------------------
function Skeleton$g() {
  return {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          '&::after': {
            background: 'linear-gradient(110deg, transparent 10%, rgba(145, 158, 171, 0.5), transparent 90%) '
          }
        }
      }
    }
  };
}

//
function ComponentsOverrides$g(theme) {
  return Object.assign(AppBar$g(), Card$g(theme), Input$w(theme), Paper$g(theme), Button$g(theme), Tooltip$g(theme), Backdrop$g(theme), Typography$g(theme), CssBaseline$g(theme), Autocomplete$g(theme), ToggleButton$g(theme), IconButton$g(theme), Picker$g(), Rating$g(theme), Menu$g(), Alert$g(theme), Link$g(), Badge$g(), Input$x(theme), Skeleton$g());
}

var sm = {
  palette: palette$g,
  typography: typography$g,
  componentsOverride: ComponentsOverrides$g
};

function getTheme(name) {
  //console.log('name', name);
  return name === "drAnna" ? drAnna : name === "gms" ? gms : name === "medincenter" ? medincenter : name === "medswiss" ? medswiss : name === "mediadoc" ? mediadoc : name === "minfin" ? minfin : name === "pimu" ? pimu : name === "ncn" ? ncn : name === "sibgmu" ? sibgmu : name === "mositalmed" ? mositalmed : name === "skyfert" ? skyfert : name === "white_fang" ? white_fang : name === "kalinchenko" ? kalinchenko : name === "celt" ? celt : name === "vetcenter" ? vetcenter : name === "sm" ? sm : mobimed;
}

var makeCustomTheme = function makeCustomTheme(name) {
  var _getTheme = getTheme(name),
    palette = _getTheme.palette,
    typography = _getTheme.typography,
    componentsOverride = _getTheme.componentsOverride;
  var themeOptions = {
    palette: palette,
    typography: typography
  };
  var theme = styles.createTheme(themeOptions);
  theme.components = componentsOverride(theme);
  return theme;
};
function ThemeProvider(_ref) {
  var children = _ref.children,
    name = _ref.name,
    theme = _ref.theme;
  var customTheme = React.useMemo(function () {
    return name || !theme ? makeCustomTheme(name) : theme;
  }, [name, theme]);
  return /*#__PURE__*/React__default.createElement(styles.StyledEngineProvider, {
    injectFirst: true
  }, /*#__PURE__*/React__default.createElement(styles.ThemeProvider, {
    theme: customTheme
  }, /*#__PURE__*/React__default.createElement(material.CssBaseline, null), children));
}

exports.default = ThemeProvider;
//# sourceMappingURL=mui-themes-extand.cjs.development.js.map
